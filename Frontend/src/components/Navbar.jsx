import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const navbar = () => {
  return (
    <div className="navbarContainer">
      <nav>
        <NavLink
          to="/MovieHub"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Movie Hub
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/favourite"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Favourites
        </NavLink>
      </nav>
    </div>
  );
};

export default navbar;
