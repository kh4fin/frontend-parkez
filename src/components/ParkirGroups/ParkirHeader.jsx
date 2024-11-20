import React from "react";
// import "./LokasiGroups.scss";
import { IoMdArrowRoundBack } from "react-icons/io";
import { NavLink } from "react-router-dom";

const ParkirHeader = () => {
  return (
    <nav className="chardlist-pricing-nav">
      <NavLink to="/parkir" className="chardlist-icon">
        <IoMdArrowRoundBack className="chardlist-icon-left" />
      </NavLink>
    </nav>
  );
};

export default ParkirHeader;
