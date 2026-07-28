import React, { useContext } from "react";
import { NavLink } from "react-router";
import { UserStore } from "../context/UserContext";
import { CartStore } from "../context/CartContext";
import { toast } from "react-toastify";

const NavBar = () => {
  const { userSession, setUserSession } = useContext(UserStore);
  const { cartItems, showCart, setShowCart } = useContext(CartStore);
  const handleLogout = () => {
    localStorage.removeItem("userSession");
    setUserSession(null);
    toast.default("See you soon. Bubye!!!")
  };
  const totalItems = cartItems.reduce((total, item) => {
    return (total += item.quantity);
  }, 0);
  return (
    <div className="w-screen max-w-7xl flex justify-around items-center p-3">
      <NavLink to={"/"}>
        <h1 className="text-xl">
          <span className="text-olive-400 text-3xl">
            <i class="ri-eth-fill"></i>
          </span>{" "}
          Sky <span className="text-olive-400">Mart</span>
        </h1>
      </NavLink>
      <div className="flex gap-5 text-sm">
        <NavLink
          to={"/"}
          className={({ isActive }) => {
            return isActive
              ? "font-bold text-[#80a42c]"
              : "text-gray-300 hover:text-white";
          }}
          end
        >
          Home
        </NavLink>
        <NavLink
          to={"/shop"}
          className={({ isActive }) => {
            return isActive
              ? "font-bold text-[#80a42c]"
              : "text-gray-300 hover:text-white";
          }}
        >
          Shop
        </NavLink>
        <NavLink
          to={"/about"}
          className={({ isActive }) => {
            return isActive
              ? "font-bold text-[#80a42c]"
              : "text-gray-300 hover:text-white";
          }}
        >
          About
        </NavLink>
      </div>
      <div className="flex gap-3 items-center text-sm">
        <div className="flex gap-2 items-center border-[0.1px] border-olive-700 p-2 rounded-xl">
          <div className="bg-olive-400 text-white rounded-lg flex justify-center items-center w-7 h-7">
            <p>{userSession?.name[0]}</p>
          </div>
          <p>{userSession?.name}</p>
        </div>
        <div
          className="flex gap-2 items-center relative border-[0.1px] border-olive-700 p-2 rounded-xl cursor-pointer"
          onClick={() => setShowCart(true)}
        >
          <i className="ri-shopping-cart-line"></i>
          <p className="absolute -top-2 -right-2 bg-olive-400 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {totalItems}
          </p>
        </div>
        <div className=" flex justify-center items-center border-[0.1px] border-olive-700 p-2 rounded-xl hover:cursor-pointer hover:text-red-400 hover:bg-[#d3606057]">
          <i className="ri-logout-box-r-line" onClick={handleLogout}></i>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
