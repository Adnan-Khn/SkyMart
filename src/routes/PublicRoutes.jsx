import React, { useContext } from "react";
import { UserStore } from "../context/UserContext";
import { Navigate } from "react-router";

const PublicRoutes = ({ children }) => {
  const userSession = useContext(UserStore);
  if (userSession) return <Navigate to={"/"} replace />;
  return <div>{children}</div>;
};

export default PublicRoutes;
