import React from "react";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <NavLink to="/" className="logo">
            park<span>EZ</span>
          </NavLink>
        </div>
        <div className="footer-social">
          <NavLink to="https://facebook.com">
            <FaFacebook />
          </NavLink>
          <NavLink to="https://twitter.com">
            <FaTwitter />
          </NavLink>
          <NavLink to="https://instagram.com">
            <FaInstagram />
          </NavLink>
          <NavLink to="https://linkedin.com">
            <FaLinkedin />
          </NavLink>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 parkEZ. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
