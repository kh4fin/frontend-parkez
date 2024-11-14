import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import HomeHero from "../../components/HomeGroups/HomeHero";
import HomePricing from "../../components/HomeGroups/HomePricing";
import axiosInstance from "../../utils/axiosConfig";

const Home = () => {
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
      <HomeHero user={user} />
      <HomePricing />
    </div>
  );
};

export default Home;
