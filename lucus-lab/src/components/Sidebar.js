import React from "react";
import { Link } from "react-router-dom";

/** Images Imports */
import Logo from "../assets/img/logo.png";

const Sidebar = () => {
  return (
    <div className="sidebar-wrapper">
      <div className="image-wrapper">
        <img className="sidebar-img" src={Logo} alt="Logo" />
      </div>
      <div className="links-wrapper">
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/gallery">
          Gallery
        </Link>
        <Link className="nav-link" to="/todo">
          To Do List
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
