import React, { useContext } from "react";
import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import About from "../pages/About";
import Shop from "../pages/Shop";
import Register from "../pages/Register";
import Login from "../pages/Login";
import { UserStore } from "../context/UserContext";
import ProtectedRoutes from "./ProtectedRoutes";
import PublicRoutes from "./PublicRoutes";
import ProductDetails from "../pages/ProductDetails";

const AppRoutes = () => {
  const { userSession, setUserSession } = useContext(UserStore);

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/" element={<ProtectedRoutes />}>
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="shop" element={<Shop />}/>
        <Route path="shop/:id" element={<ProductDetails />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
