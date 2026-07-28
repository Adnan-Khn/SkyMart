import { useContext } from "react";
import { Link} from "react-router";
import { CartStore } from "../context/CartContext";

const ProductCard = ({ product, isInCart }) => {
  const { cartItems, setCartItems ,setShowCart} = useContext(CartStore);

  return (
    <div className="group w-70 bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-cyan-500/10 hover:border-olive-500/40 transition-all duration-300 flex flex-col justify-between">
      {/* Product Image */}
      <div className="h-60 bg-white p-6 flex items-center justify-center overflow-hidden rounded-2xl">
        <img
          src={product.images[0]}
          alt={product.title}
          className="h-full object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {/* Product Details */}
      <div className="p-5 flex flex-col flex-1 justify-between">
        {/* Category */}
        <span className="text-xs uppercase tracking-widest text-olive-400">
          {product.category}
        </span>

        {/* Title */}
        <h2 className="mt-2 text-lg font-semibold text-white line-clamp-2">
          {product.title}
        </h2>

        {/* Price + Rating */}
        <div className="mt-4 flex items-center justify-between">
          <span className="text-2xl font-bold text-zinc-400">
            ${(product.price * (1 - product.discountPercentage / 100)).toFixed(2)}
          </span>

          <div className="flex items-center gap-1 text-yellow-400">
            ⭐
            <span className="text-white text-sm">{product?.rating || 4.5}</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-5 flex gap-3">
          <Link
            to={`/shop/${product.id}`}
            className="flex-1 text-center py-2 rounded-lg bg-olive-600 hover:bg-olive-500 transition"
          >
            View
          </Link>
          {isInCart ? (
            <button className="flex-1 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 transition">
              Added !
            </button>
          ) : (
            <button
              className="flex-1 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 transition"
              onClick={() =>{
                setCartItems((prev) => [...prev, { ...product, quantity: 1 }])
                setShowCart(true)
              }
              }
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
