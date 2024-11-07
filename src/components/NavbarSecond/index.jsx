import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import "./NavbarSecond.scss";

const NavbarSecond = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="navbarsecond">
      <NavLink to="/" className="navbarsecond-logo">
        park<span>EZ</span>
      </NavLink>
      <ul className={`navbarsecond-nav-links ${isOpen ? "open" : ""}`}>
        <li>
          <NavLink
            to="/"
            aria-label="Home"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            {/* <FaHome size={24} /> */}
            <span className="navbarsecond-text">Beranda</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            aria-label="Tentang Kami"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            {/* <FcAbout size={24} /> */}
            <span className="navbarsecond-text">Tentang Kami</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/harga"
            aria-label="Harga"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            {/* <FaParking size={24} /> */}
            <span className="navbarsecond-text">Harga</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/kontak"
            aria-label="Kontak"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            {/* <FaHistory size={24} /> */}
            <span className="navbarsecond-text">Kontak</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/login"
            aria-label="Login"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <button className="navbarsecond-btn-login">
              {/* <FaUser size={18} /> */}
              <span className="navbarsecond-text">Masuk</span>
            </button>
          </NavLink>
        </li>
      </ul>
      <div className="navbarsecond-nav-extra">
        <FaBars id="burger-menu" onClick={toggleMenu} size={24} />
      </div>
    </nav>
  );
};

export default NavbarSecond;
