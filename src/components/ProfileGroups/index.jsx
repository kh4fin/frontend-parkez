import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import imgProfile from "../../assets/images/blank-profile-picture-973460.svg";
import "./ProfileGroups.scss";
import axiosInstance from "../../utils/axiosConfig";

const ProfileGroups = () => {
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

  const handleLogout = () => {
    localStorage.removeItem("userRole");
    localStorage.removeItem("authToken");
    localStorage.clear();

    navigate("/");
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <>
      <header className="profile-header">
        <h2>Akun</h2>
      </header>

      <div className="profile-section">
        <div className="profile-main">
          <img src={imgProfile} alt="profile" />
          <div className="profile-info">
            <h2>{user ? user.first_name : "User"}</h2>
            <NavLink to="/profile/edit">edit profile</NavLink>
          </div>
        </div>
        <div className="profile-rows">
          <div className="profile-row">
            <NavLink to="/profile/kebijakan-privasi">Kebijakan Privasi</NavLink>
          </div>
          <div className="profile-row">
            <NavLink to="/profile/s&k">Syarat & Ketentuan</NavLink>
          </div>
          <div className="profile-row">
            <NavLink to="/profile/bantuan">Bantuan</NavLink>
          </div>
          <div className="profile-row">
            <NavLink to="/profile/pengaturan">Pengaturan Akun</NavLink>
          </div>
          <div className="profile-row">
            <button
              className="bg-gray-400 text-white px-4 py-2 rounded"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileGroups;
