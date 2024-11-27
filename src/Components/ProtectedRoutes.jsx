import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./Context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { authState } = useAuth();
  const { isAuth } = authState;

  return isAuth ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
