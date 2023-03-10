import React from "react";
import { Navigate } from "react-router-dom";

const NavigationRoutes = ({ children }) => {
  const user = true;
  if (!user) return <Navigate to="/login" />;
  return children;
};

export default NavigationRoutes;
