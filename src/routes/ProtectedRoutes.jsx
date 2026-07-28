import React, { useContext } from "react";
import NavBar from "../components/Navbar";
import { UserStore } from "../context/UserContext";
import { Navigate, Outlet } from "react-router";
import CartDrawer from "../components/CartDrawer";

const ProtectedRoutes = () => {
  const { userSession } = useContext(UserStore);
  if (!userSession) return <Navigate to={"/login"} replace />;
  return (
    <div>
      <NavBar />
      <CartDrawer/>
      <Outlet/>
    </div>
  );
};

export default ProtectedRoutes;
