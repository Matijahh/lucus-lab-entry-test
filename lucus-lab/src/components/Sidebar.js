import React from "react";
import { Link } from "react-router-dom";
import auth from "../auth";
import history from "../history";

/** Images Imports */
import Logo from "../assets/img/logo.png";

const Sidebar = (props) => {
  return (
    <div className="sidebar-wrapper">
      <div className="image-wrapper">
        <img className="sidebar-img" src={Logo} alt="Logo" />
      </div>
      <div className="links-wrapper">
        <Link className="nav-link" to="/home">
          Home
        </Link>
        <Link className="nav-link" to="/gallery">
          Gallery
        </Link>
        <Link className="nav-link" to="/todo">
          To Do List
        </Link>
        <button
          onClick={() =>
            auth.logout(() => {
              history.push("/");
              window.location.reload(false);
            })
          }
          className="nav-link"
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
