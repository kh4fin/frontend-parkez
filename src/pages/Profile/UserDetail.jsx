import React, { useState, useEffect } from "react";
import axiosInstance from "../../utils/axiosConfig";
import Navbar from "../../components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";

const UserDetail = () => {
  const [userData, setUserData] = useState({
    first_name: "",
    last_name: "",
    email: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    axiosInstance
      .get("/accounts/users/me/")
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.error("Ada kesalahan dalam mengambil data pengguna:", error);
      });
  }, []);

  const handleEdit = () => {
    navigate("/edit-profile");
  };

  return (
    <>
      <Navbar />
      <div className="w-full max-w-md mx-auto mt-16 bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center mb-6">
          Profil <span className="text-red-500">parkEZ</span>
        </h1>
        <div className="bg-gray-100 p-4 rounded-lg border border-gray-300">
          <div className="flex items-center mb-4">
            <i className="fas fa-user-circle text-2xl mr-2"></i>
            <h2 className="text-lg font-bold">Informasi Pribadi</h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                First Name
              </label>
              <input
                type="text"
                value={`${userData.first_name}` || "Loading..."}
                readOnly
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                value={`${userData.last_name}` || "Loading..."}
                readOnly
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="text"
                value={userData.email || "Loading..."}
                readOnly
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
              />
            </div>
            <button
              onClick={handleEdit}
              className="mt-4 w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Edit Profil
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDetail;
