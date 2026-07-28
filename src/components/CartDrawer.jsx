import { useContext } from "react";
import { toast } from "react-toastify";
import { CartStore } from "../context/CartContext";
import { useNavigate } from "react-router";

const CartDrawer = () => {
  const {
    showCart,
    setShowCart,
    cartItems,
    handleDecrement,
    handleIncrement,
    handleRemove,
  } = useContext(CartStore);

  const { totalItems, totalAmount } = cartItems.reduce(
    (acc, item) => {
      acc.totalItems += item.quantity;
      acc.totalAmount +=
        item.price * (1 - item.discountPercentage / 100) * item.quantity;

      return acc;
    },
    {
      totalItems: 0,
      totalAmount: 0,
    }
  );
  const navigate = useNavigate()
  
  const handleCheckout = () => {
    if (cartItems.length === 0) {
      toast.error("Your cart is empty!");
      return;
    }
    for(let item of cartItems){
        handleRemove(item.id)
    }; 

    toast.success("🎉 Order placed successfully!");

    setTimeout(() => {
      toast.success("🙏 Thank you for shopping with us!");
    }, 1200);

    setShowCart(false);
    navigate("/")
  };

  return (
    <>
      <div
        onClick={() => setShowCart(false)}
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 z-40 
            ${showCart ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />
      <div
        className={`fixed top-0 right-0 h-screen w-96 bg-zinc-900 shadow-2xl transition-transform duration-300 z-50 flex flex-col ${
          showCart ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-5 border-b border-zinc-700">
          <h1 className="text-2xl font-bold text-white">
            Cart ({totalItems})
          </h1>

          <button
            onClick={() => setShowCart(false)}
            className="text-2xl text-white hover:text-red-400"
          >
            ✕
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4">
          {cartItems.length === 0 ? (
            <div className="flex items-center justify-center h-full text-zinc-400 text-lg">
              <span>Cart is Empty {"  "} <i className="ri-shopping-cart-line"></i></span>
            </div>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 mb-5 border-b border-zinc-800 pb-4"
              >
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-20 h-20 object-cover rounded-lg"
                />

                <div className="flex-1">
                  <h2 className="text-white font-semibold line-clamp-2">
                    {item.title}
                  </h2>

                  <p className="text-green-400 font-semibold mt-1">
                    $
                    {(
                      item.price *
                      (1 - item.discountPercentage / 100)
                    ).toFixed(2)}
                  </p>

                  <div className="flex justify-between items-center mt-3">
                    <div className="flex items-center gap-4 text-white">
                      <button
                        onClick={() => handleDecrement(item.id)}
                        className="w-7 h-7 rounded bg-zinc-800 hover:bg-zinc-700"
                      >
                        -
                      </button>

                      <span>{item.quantity}</span>

                      <button
                        onClick={() => handleIncrement(item.id)}
                        className="w-7 h-7 rounded bg-zinc-800 hover:bg-zinc-700"
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => handleRemove(item.id)}
                      className="text-red-400 hover:text-red-500 text-xl"
                    >
                      <i className="ri-delete-bin-4-line"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-zinc-700 p-5 bg-zinc-900">
          <div className="flex justify-between items-center mb-4">
            <span className="text-zinc-400">Total Items</span>
            <span className="text-white font-semibold">{totalItems}</span>
          </div>

          <div className="flex justify-between items-center mb-5">
            <span className="text-lg font-semibold text-white">
              Total Amount
            </span>
            <span className="text-2xl font-bold text-green-400">
              ${totalAmount.toFixed(2)}
            </span>
          </div>

          <button
            onClick={handleCheckout}
            className="w-full bg-olive-600 hover:bg-olive-700 transition-all duration-300 text-white font-semibold py-3 rounded-xl"
          >
            Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default CartDrawer;