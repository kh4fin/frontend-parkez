import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaLocationArrow,
  FaParking,
  FaHistory,
  FaUser,
} from "react-icons/fa";
import "./styles.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/home" className="logo">
        park<span>EZ</span>
      </NavLink>
      <ul className="nav-links">
        <li>
          <NavLink
            to="/home"
            aria-label="Home"
            className={({ isActive }) => (isActive ? "link active" : "link")}
          >
            <div className="icon">
              <FaHome />
            </div>
            <span className="text">Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/lokasi"
            aria-label="Lokasi"
            className={({ isActive }) => (isActive ? "link active" : "link")}
          >
            <div className="icon">
              <FaLocationArrow />
            </div>
            <span className="text">Lokasi</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/parkir"
            aria-label="Parkir"
            className={({ isActive }) => (isActive ? "link active" : "link")}
          >
            <div className="icon">
              <FaParking />
            </div>
            <span className="text">Parkir</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/riwayat"
            aria-label="Riwayat"
            className={({ isActive }) => (isActive ? "link active" : "link")}
          >
            <div className="icon">
              <FaHistory />
            </div>
            <span className="text">Riwayat</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profile"
            aria-label="Profile"
            className={({ isActive }) => (isActive ? "link active" : "link")}
          >
            <div className="icon">
              <FaUser />
            </div>
            <span className="text">Profile</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
