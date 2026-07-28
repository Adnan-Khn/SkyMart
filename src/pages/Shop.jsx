import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import NavBar from "../components/Navbar";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import { CartStore } from "../context/CartContext";
import ShopSkeleton from "./ShopSkeleton";
import { useParams, useSearchParams } from "react-router";

const Shop = () => {
  const [param,setParam] = useSearchParams()
  let initialCat = param.get("category") || "all"
  const [isLoading,setIsLoading] = useState(true)
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(initialCat);
  const [sortBy, setSortBy] = useState("all");

  const getProds = async () => {
    try{
      const prods = await axios.get("https://dummyjson.com/products?limit=117");
    //console.log(prods.data.products)
    setProducts(prods.data.products);
    setIsLoading(false)
    }catch(err){
      console.log("Error while fetching prods", err)
    }
  };

  useEffect(() => {
    getProds();
  }, []);
  let { isInCart, cartItems } = useContext(CartStore);

  const filteredProds = [...products].filter((prod)=>{
    const mathed = prod.title.toLowerCase().includes(search.toLocaleLowerCase())
    const matchedCat = category==="all" || prod.category === category
    return mathed && matchedCat
  }).sort((a,b)=>{
    switch(sortBy){
      case "asc":
        //{(product.price * (1 - product.discountPercentage / 100)).toFixed(2)}
        return (a.price*(1-a.discountPercentage/100))-(b.price*(1-b.discountPercentage/100))
      case "desc":
        return (b.price*(1-b.discountPercentage/100))-(a.price*(1-a.discountPercentage/100))
      case "asc-rating":
        return a.rating-b.rating
      case "desc-rating":
        return b.rating-a.rating
      default:
        return 0
    }
  })
  if(isLoading) return(<ShopSkeleton/>)
  return (
    <div className="w-full max-w-7xl mx-auto py-8 px-4 text-white">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-4xl font-bold">All Products</h1>
          <p className="text-zinc-400 mt-2">
            {filteredProds.length} Products Available
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 flex flex-col md:flex-row gap-4 mb-8">
        {/* Search */}
        <input
          type="text"
          placeholder="Search Products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 outline-none focus:border-olive-500 transition"
        />

        {/* Category */}
        <select
          className="bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 outline-none focus:border-olive-500 cursor-pointer"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="all">All Categories</option>
          <option value="beauty">Beauty</option>
          <option value="fragrances">Fragrances</option>
          <option value="furniture">Furniture</option>
          <option value="groceries">Groceries</option>
          <option value="home-decoration">Home Decoration</option>
          <option value="kitchen-accessories">Kitchen Accessories</option>
          <option value="laptops">Laptops</option>
          <option value="mens-shirts">Mens Shirts</option>
          <option value="mens-shoes">Mens Shoes</option>
          <option value="mens-watches">Mens Watches</option>
          <option value="mobile-accessories">Mobile Accessories</option>
          <option value="motorcycle">Motorcycle</option>
        </select>

        {/* Sorting */}
        <select
          className="bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 outline-none focus:border-olive-500 cursor-pointer"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="all">Sort By</option>
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
          <option value="asc-rating">Rating: Low to High</option>
          <option value="desc-rating">Rating: High to Low</option>
        </select>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProds.map((prod) => {
          isInCart = cartItems.find((item) => item.id === prod.id);
          return (
            <ProductCard key={prod.id} product={prod} isInCart={isInCart} />
          );
        })}
      </div>
    </div>
  );
};

export default Shop;
