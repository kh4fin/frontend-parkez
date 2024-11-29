import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/axiosConfig";
import Navbar from "../../components/Navbar/Navbar";
import ParkirGroups from "../../components/ParkirGroups";
import { FaBarcode } from "react-icons/fa";
import ParkirHeader from "../../components/ParkirGroups/ParkirHeader";

const Parkir = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const checkAuth = async () => {
    const token = localStorage.getItem("authToken");

    if (!token) {
      navigate("/login");
    } else {
      try {
        const response = await axiosInstance.get("/accounts/users/me/");
        setUser(response.data);
      } catch (error) {
        if (error.response && error.response.status === 401) {
          navigate("/login");
        }
      }
    }
  };

  const handleScannerClick = () => {
    navigate("/scan");
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <div className="relative min-h-screen">
      <Navbar />
      <ParkirGroups />
      <div className="absolute bottom-0 left-0 right-0 flex justify-center mb-4">
        <button
          onClick={handleScannerClick}
          className="flex flex-col items-center text-xl"
        >
          <FaBarcode className="text-blue-500 text-4xl" />
          <p className="text-blue-500 mt-2">Scan</p>
        </button>
      </div>
    </div>
  );
};

export default Parkir;
