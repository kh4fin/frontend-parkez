import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/axiosConfig";
import Navbar from "../../components/Navbar/Navbar";
import LokasiHeader from "../../components/LokasiGroups/LokasiHeader";
import LokasiOne from "../../components/LokasiGroups/LokasiOne";
import LokasiTwo from "../../components/LokasiGroups/LokasiTwo";
import LokasiGroups from "../../components/LokasiGroups";

const Lokasi = () => {
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

  useEffect(() => {
    checkAuth();
  }, []);
  return (
    <div>
      <Navbar />
      <LokasiGroups />
      {/* <LokasiHeader /> */}
      {/* <LokasiOne /> */}
      {/* <LokasiTwo /> */}
    </div>
  );
};

export default Lokasi;
