import axios from "axios";
import { Star, Truck, ShieldCheck, Package } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import ProductDetailSkeleton from "./ProductDetailsSkeletion";
import { CartStore } from "../context/CartContext";
import ProductCard from "../components/ProductCard";

const ProductDetails = () => {
  const { id } = useParams();
  const productId = Number(id);
  const [isLoading, setIsLoading] = useState(true);
  const [relatedProds, setRelatedProds] = useState([]);
  const [product, setProduct] = useState({
    images: [],
    reviews: [],
    tags: [],
    dimensions: {},
  });
  const { cartItems, setCartItems, handleIncrement, handleDecrement } =
    useContext(CartStore);
  let isInCart = cartItems.find((item) => item.id === product.id) || null;
  //console.log(cartItems);
  const getRelatedProds = async (category) => {
    try {
      const res = await axios.get(
        `https://dummyjson.com/products/category/${category}`,
      );

      const filteredProducts = res.data.products.filter(
        (item) => item.id !== productId,
      );

      setRelatedProds(filteredProducts);
    } catch (err) {
      console.log(err);
    }
  };
  const getProd = async () => {
    try {
      setIsLoading(true);
      let res = await axios.get(`https://dummyjson.com/products/${id}`);
      setProduct(res.data);
      await getRelatedProds(res.data.category);
      setIsLoading(false);
    } catch (err) {
      console.log("API error : ", err);
    }
  };

  useEffect(() => {
    getProd();
    //console.log(product)
  }, [id]);
  const discountedPrice = (
    product.price -
    (product.price * product.discountPercentage) / 100
  ).toFixed(2);
  //console.log(product?.images[0])
  if (isLoading) return <ProductDetailSkeleton />;
  return (
    <div className="min-h-screen bg-zinc-950 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Section */}
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Left Image */}
          <div className="bg-gray-100 rounded-xl p-6 flex items-center justify-center">
            <img
              src={product.images?.[0]}
              alt={product.title}
              className="max-h-125 object-contain hover:scale-105 duration-300"
            />
          </div>

          {/* Middle Details */}
          <div className="space-y-5">
            <div>
              <span className="bg-pink-600 text-sm px-3 py-1 rounded-full">
                {product?.category}
              </span>

              <h1 className="text-4xl font-bold mt-3">{product.title}</h1>

              <p className="text-zinc-400 mt-2">{product.brand}</p>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex text-yellow-400">
                <Star size={18} fill="currentColor" />
                <span className="ml-1">{product.rating}</span>
              </div>

              <span className="text-zinc-500">
                ({product.reviews.length} Reviews)
              </span>
            </div>

            {/* Price */}
            <div>
              <div className="flex items-center gap-3">
                <span className="text-4xl font-bold text-olive-400">
                  ${discountedPrice}
                </span>

                <span className="line-through text-zinc-500">
                  ${product.price}
                </span>

                <span className="bg-olive-600 px-2 py-1 rounded text-sm">
                  {product.discountPercentage}% OFF
                </span>
              </div>
            </div>

            {/* Description */}
            <div>
              <h2 className="text-xl font-semibold mb-2">Description</h2>

              <p className="text-zinc-300 leading-7">{product.description}</p>
            </div>

            {/* Tags */}
            <div className="flex gap-2 flex-wrap">
              {product.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-zinc-800 px-3 py-1 rounded-full text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Specifications */}
            <div className="bg-zinc-900 rounded-xl p-5">
              <h2 className="text-xl font-semibold mb-4">Specifications</h2>

              <div className="grid grid-cols-2 gap-4 text-zinc-300">
                <p>Brand</p>
                <p>{product.brand}</p>

                <p>SKU</p>
                <p>{product.sku}</p>

                <p>Weight</p>
                <p>{product.weight} g</p>

                <p>Dimensions</p>
                <p>
                  {product.dimensions.width} × {product.dimensions.height} ×{" "}
                  {product.dimensions.depth}
                </p>

                <p>Warranty</p>
                <p>{product.warrantyInformation}</p>

                <p>Return Policy</p>
                <p>{product.returnPolicy}</p>
              </div>
            </div>
          </div>

          {/* Right Purchase Card */}
          <div className="bg-zinc-900 rounded-xl p-6 h-fit sticky top-8">
            <h2 className="text-3xl font-bold text-olive-400">
              ${discountedPrice}
            </h2>

            <p className="text-zinc-400 mt-2">
              Original Price
              <span className="line-through ml-2">${product.price}</span>
            </p>

            <div className="mt-5 space-y-4">
              <div className="flex items-center gap-3">
                <Package className="text-blue-400" />
                <span>{product.availabilityStatus}</span>
              </div>

              <div className="flex items-center gap-3">
                <Truck className="text-green-400" />
                <span>{product.shippingInformation}</span>
              </div>

              <div className="flex items-center gap-3">
                <ShieldCheck className="text-yellow-400" />
                <span>{product.warrantyInformation}</span>
              </div>
            </div>
            {isInCart ? (
              <button className="w-full bg-olive-600 hover:bg-olive-700 py-3 rounded-lg font-semibold mt-8 text-white flex justify-between px-10">
                <span
                  className="font-semibold text-2xl"
                  onClick={() => handleDecrement(productId)}
                >
                  -
                </span>
                <span>{isInCart.quantity}</span>
                <span
                  className="font-semibold text-2xl"
                  onClick={() => handleIncrement(productId)}
                >
                  +
                </span>
              </button>
            ) : (
              <button
                className="w-full bg-cyan-600 hover:bg-cyan-700 py-3 rounded-lg font-semibold mt-8"
                onClick={() =>
                  setCartItems((prev) => [...prev, { ...product, quantity: 1 }])
                }
              >
                Add to Cart
              </button>
            )}

            <div className="mt-6 text-sm text-zinc-400">
              <p>Stock: {product.stock}</p>
              <p>Minimum Order: {product.minimumOrderQuantity}</p>
            </div>
          </div>
        </div>

        {/* Reviews */}
        <div className="mt-14">
          <h2 className="text-3xl font-bold mb-6">Customer Reviews</h2>

          <div className="space-y-5">
            {product.reviews.map((review, index) => (
              <div key={index} className="bg-zinc-900 p-5 rounded-xl">
                <div className="flex justify-between">
                  <div>
                    <h3 className="font-semibold">{review.reviewerName}</h3>

                    <p className="text-zinc-400 text-sm">
                      {review.reviewerEmail}
                    </p>
                  </div>

                  <div className="flex items-center text-yellow-400">
                    <Star size={18} fill="currentColor" />
                    <span className="ml-1">{review.rating}</span>
                  </div>
                </div>

                <p className="mt-3 text-zinc-300">{review.comment}</p>

                <p className="text-xs text-zinc-500 mt-2">
                  {new Date(review.date).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-20">
          <h2 className="text-3xl font-bold mb-6">Related Products</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProds.map((item) => {
              let prodInCart = cartItems.find((val) => val.id === item.id);
              return (
                <ProductCard key={item.id} product={item} isInCart={prodInCart} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
