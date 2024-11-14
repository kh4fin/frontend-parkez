import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Sidebar from "../../components/AdminGroups/Sidebar";
import Header from "../../components/AdminGroups/Header";
import DashboardMain from "../../components/AdminGroups/DashboardMain";
import Users from "../../components/AdminGroups/Users";
import Packet from "../../components/AdminGroups/Packet";
import UserEdit from "../../components/AdminGroups/UserEdit";
import axiosInstance from "../../utils/axiosConfig";
import PacketAdd from "../../components/AdminGroups/PacketAdd";
import PacketEdit from "../../components/AdminGroups/PacketEdit";
import Partners from "../../components/AdminGroups/Partners";
import PartnersAdd from "../../components/AdminGroups/PartnersAdd";
import PartnersEdit from "../../components/AdminGroups/PartnersEdit";

const Dashboard = () => {
  const [userRole, setUserRole] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      const savedRole = localStorage.getItem("userRole");

      if (savedRole) {
        setUserRole(savedRole);

        if (savedRole !== "owner") {
          navigate("/home");
        }
      } else {
        try {
          const response = await axiosInstance.get("/accounts/users/me/");
          const user = response.data;

          localStorage.setItem("userRole", user.role);
          setUserRole(user.role);

          if (user.role !== "owner") {
            navigate("/home");
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
          navigate("/home");
        }
      }
    };

    checkAuth();
  }, [navigate]);

  if (userRole === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-slate-400 min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<DashboardMain />} />
          <Route path="users" element={<Users />} />
          <Route path="users/:id/edit" element={<UserEdit />} />
          <Route path="packet" element={<Packet />} />
          <Route path="packet/add" element={<PacketAdd />} />
          <Route path="packet/:id/edit" element={<PacketEdit />} />
          <Route path="partners" element={<Partners />} />
          <Route path="partners/add" element={<PartnersAdd />} />
          <Route path="partners/:id/edit" element={<PartnersEdit />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
