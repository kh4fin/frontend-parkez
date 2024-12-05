import React, { useState, useEffect } from "react";
import axiosInstance from "../../utils/axiosConfig";
import { useNavigate } from "react-router-dom"; // Mengimpor useNavigate

const EditUser = () => {
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosInstance
      .put("/dj-rest-auth/user/", userData)
      .then((response) => {
        console.log("Data berhasil diperbarui:", response.data);
        navigate("/profile");
      })
      .catch((error) => {
        console.error("Ada kesalahan dalam memperbarui data pengguna:", error);
      });
  };

  const handleBack = () => {
    navigate("/profile/user-info");
  };

  return (
    <div className="w-full max-w-md mx-auto mt-16 bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center mb-6">Edit Profil</h1>
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              First Name
            </label>
            <input
              type="text"
              name="first_name"
              value={userData.first_name}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              name="last_name"
              value={userData.last_name}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
            />
          </div>
          <button
            type="submit"
            className="mt-4 w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Simpan Perubahan
          </button>
          <button
            type="button"
            onClick={handleBack}
            className="mt-4 w-full px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
          >
            Batalkan Perubahan
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditUser;
