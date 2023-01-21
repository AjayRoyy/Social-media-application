import React from "react";
import Leftbar from "../components/Leftbar/Leftbar.jsx";
import Rightbar from "../components/RightBar/Rightbar.jsx";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import "../styles/_style.scss";

const OutletRoute = () => {
  return (
    <div className="theme-dark">
      <Navbar />
      <div
        style={{
          display: "flex",
        }}
      >
        <Leftbar />
        <Outlet />
        <Rightbar />
      </div>
    </div>
  );
};

export default OutletRoute;
