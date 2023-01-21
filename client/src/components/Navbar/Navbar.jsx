import React from "react";
import "./Navbar.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";
import image1 from "../../media/login_background.jpg";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const darkMode = useSelector(state.togglemode.darkmode);
  const dispatch = useDispatch();
  // const darkMode = true;
  return (
    <div className={darkMode ? "navbar" : "navbar navbar-theme"}>
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>Heat Media</span>
        </Link>
        <HomeOutlinedIcon />
        {darkMode ? <WbSunnyOutlinedIcon /> : <DarkModeOutlinedIcon />}
        <GridViewOutlinedIcon />
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="right">
        <PersonOutlinedIcon />
        <EmailOutlinedIcon />
        <NotificationsOutlinedIcon />
        <div className="user">
          <img src={image1} alt="" />
          <span>Ajay Roy</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
