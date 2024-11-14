import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "./axiosConfig";

const useCheckAuth = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
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

    checkAuth();
  }, [navigate]);

  return user;
};

export default useCheckAuth;
