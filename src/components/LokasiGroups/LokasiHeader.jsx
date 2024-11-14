import React from "react";
import "./LokasiGroups.scss";
import { FaSearch } from "react-icons/fa";

const LokasiHeader = () => {
  return (
    <header className="lokasi-header">
      <form className="lokasi-search">
        <FaSearch className="lokasi-icon" />
        <input type="text" placeholder="Cari lokasi tujuanmu..." />
      </form>
    </header>
  );
};

export default LokasiHeader;
