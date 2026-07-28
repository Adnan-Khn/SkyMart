import { BedDouble, Hand, MirrorRound, Shirt } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { UserStore } from "../context/UserContext";
import { NavLink, useNavigate } from "react-router";
import { ComputerDesktopIcon } from "@heroicons/react/16/solid";
import axios from "axios";

const Home = () => {
  const [top, setTop] = useState([]);
  const { userSession } = useContext(UserStore);
  const navigate = useNavigate();
  const handleCategory = (category) => {
    navigate(`/shop?category=${category}`);
  };
  const getProd = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/products?limit=117");
      //console.log(prods.data.products)
      //setProds(products.data.products);
      const prods = res.data.products;
      const topProds = [...prods]
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 10);
      setTop(topProds);
    } catch (err) {
      console.log("Error while fetching prods", err);
    }
  };
  useEffect(() => {
    getProd();
  }, []);
  return (
    <div>
      <div className="flex flex-col items-center py-8 px-4">
        <section className="w-full max-w-5xl h-120 rounded-3xl bg-linear-to-r from-zinc-900 via-zinc-800 to-zinc-900 border border-zinc-700 flex overflow-hidden shadow-2xl">
          <div className="w-2/3 flex flex-col justify-center px-12 gap-6 text-white">
            <p className="flex items-center gap-2 text-lg text-zinc-300">
              Hello
              <Hand className="text-yellow-400 rotate-330" />
            </p>

            <h1 className="text-6xl font-bold leading-tight">
              Welcome back,
              <br />
              <span className="text-olive-400">
                {userSession?.name.split(" ")[0]}
              </span>
            </h1>

            <p className="text-zinc-400 text-lg leading-8">
              Discover today's picks — hand-curated products across electronics,
              fashion, and more.
            </p>

            <div className="flex gap-5 mt-4">
              <NavLink
                to={"/shop"}
                className="bg-olive-500 hover:bg-olive-600 transition px-8 py-4 rounded-xl font-semibold flex items-center gap-2"
              >
                Shop Now
                <i className="ri-arrow-right-long-fill text-xl"></i>
              </NavLink>

              <NavLink
                to={"/shop"}
                className="border border-zinc-600 hover:border-olive-400 hover:text-olive-400 transition px-8 py-4 rounded-xl"
              >
                View All Products
              </NavLink>
            </div>
          </div>
          
          <div className="w-1/3 flex flex-col justify-center items-center gap-8 p-8">
            <div className="w-full bg-[#60663b8e] rounded-2xl p-8 text-center border border-zinc-700">
              <h2 className="text-5xl font-bold text-[#889630]">20+</h2>
              <p className="text-zinc-400 mt-2">Products Available</p>
            </div>

            <div className="w-full bg-[#60663b8e] rounded-2xl p-8 text-center border border-zinc-700">
              <h2 className="text-4xl font-bold text-[#889630]">Free</h2>
              <p className="text-zinc-400 mt-2">Delivery on $100+</p>
            </div>
          </div>
        </section>
        <section className="mt-20 w-full max-w-5xl rounded-3xl bg-linear-to-r from-zinc-900 via-zinc-800 border border-zinc-700 flex flex-col items-start shadow-2xl gap-6 p-10">
          <h1 className="text-3xl font-bold">Shop by Category</h1>
          <div className="flex justify-around gap-6 mt-12 w-full">
            
            <div
              className="group cursor-pointer bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-6 flex flex-col items-center hover:-translate-y-2 border border-gray-100"
              onClick={() => handleCategory("beauty")}
            >
              <div className="w-28 h-28 bg-pink-100 rounded-full flex items-center justify-center">
                <img
                  className="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300"
                  src="https://cdn-icons-png.flaticon.com/512/10786/10786565.png"
                  alt="Beauty"
                />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-gray-800">
                Beauty
              </h3>
              <p className="text-sm text-gray-500 mt-1">Makeup & Skincare</p>
            </div>

            
            <div
              onClick={() => handleCategory("fragrances")}
              className="group cursor-pointer bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-6 flex flex-col items-center hover:-translate-y-2 border border-gray-100"
            >
              <div className="w-28 h-28 bg-yellow-100 rounded-full flex items-center justify-center">
                <img
                  className="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300"
                  src="https://cdn-icons-png.flaticon.com/512/2960/2960590.png"
                  alt="Fragrance"
                />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-gray-800">
                Fragrance
              </h3>
              <p className="text-sm text-gray-500 mt-1">Perfumes & Scents</p>
            </div>

            
            <div
              onClick={() => handleCategory("furniture")}
              className="group cursor-pointer bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-6 flex flex-col items-center hover:-translate-y-2 border border-gray-100"
            >
              <div className="w-28 h-28 bg-blue-100 rounded-full flex items-center justify-center">
                <img
                  className="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300"
                  src="https://cdn-icons-png.flaticon.com/512/10001/10001869.png"
                  alt="Furniture"
                />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-gray-800">
                Furniture
              </h3>
              <p className="text-sm text-gray-500 mt-1">Home Essentials</p>
            </div>

            
            <div
              onClick={() => handleCategory("groceries")}
              className="group cursor-pointer bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-6 flex flex-col items-center hover:-translate-y-2 border border-gray-100"
            >
              <div className="w-28 h-28 bg-green-100 rounded-full flex items-center justify-center">
                <img
                  className="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300"
                  src="https://cdn-icons-png.flaticon.com/512/1261/1261163.png"
                  alt="Groceries"
                />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-gray-800">
                Groceries
              </h3>
              <p className="text-sm text-gray-500 mt-1">Fresh & Daily Needs</p>
            </div>
          </div>
        </section>
        <section className="mt-20 w-full max-w-5xl rounded-3xl bg-linear-to-r from-zinc-900 via-zinc-800 border border-zinc-700 flex flex-col items-start shadow-2xl gap-6 p-10">
          <div>
            <h2 className="text-3xl font-bold text-white">
              ⭐ Our Top Rated Products
            </h2>
            <div className="flex justify-between">
              <p className="text-zinc-400 mt-1">
                Handpicked products loved by our customers.
              </p>
              <p
                className="text-olive-600 text-sm hover:cursor-pointer hover:scale-110 transition duration-300"
                onClick={() => navigate("/shop")}
              >
                See all Products
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-6">
              {top.map((prod) => {
                const discountedPrice = (
                  prod.price *
                  (1 - prod.discountPercentage / 100)
                ).toFixed(2);

                return (
                  <div
                    key={prod.id}
                    className="bg-zinc-100 rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-4 group cursor-pointer"
                    onClick={() => navigate(`/shop/${prod.id}`)}
                  >
                    
                    <div className="h-40 flex items-center justify-center overflow-hidden">
                      <img
                        src={prod.thumbnail}
                        alt={prod.title}
                        className="h-full object-contain group-hover:scale-105 transition duration-300"
                      />
                    </div>

                    {/* Rating */}
                    <div className="flex items-center justify-center gap-1 mt-3">
                      <span className="text-yellow-500">⭐</span>
                      <span className="font-medium text-gray-700">
                        {prod.rating.toFixed(1)}
                      </span>
                    </div>

                    {/* Price */}
                    <div className="text-center mt-3">
                      <p className="text-xl font-bold text-pink-600">
                        ${discountedPrice}
                      </p>
                      <p className="text-sm text-gray-400 line-through">
                        ${prod.price}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
      <footer className="w-full mt-10 bg-zinc-950">
        <div className="max-w-5xl mx-auto px-8 py-2">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Brand */}
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold text-white">
                Sky<span className="text-olive-400">Mart</span>
              </h2>

              <p className="text-zinc-400 mt-2">
                A modern shopping experience built with passion.
              </p>
            </div>

            {/* Developer Info */}
            <div className="text-center md:text-right">
              <p className="text-zinc-300 text-sm">Designed & Developed by</p>

              <h3 className="text-lg font-semibold text-olive-400 mt-1">
                Adnan Ahmad Khan
              </h3>

              <p className="text-sm text-zinc-500 mt-2">Built using</p>

              <div className="flex justify-center md:justify-end gap-3 mt-2 flex-wrap">
                <span className="px-3 py-1 rounded-full bg-zinc-800 text-zinc-300 text-xs border border-zinc-700">
                  React
                </span>

                <span className="px-3 py-1 rounded-full bg-zinc-800 text-zinc-300 text-xs border border-zinc-700">
                  React Router
                </span>

                <span className="px-3 py-1 rounded-full bg-zinc-800 text-zinc-300 text-xs border border-zinc-700">
                  Context API
                </span>

                <span className="px-3 py-1 rounded-full bg-zinc-800 text-zinc-300 text-xs border border-zinc-700">
                  Tailwind CSS
                </span>
              </div>
            </div>
          </div>

          
          <div className="border-t border-zinc-800 mt-8 pt-5 text-center">
            <p className="text-sm text-zinc-500">
              © {new Date().getFullYear()} SkyMart. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
