import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axiosInstance from "../../utils/axiosConfig";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRole, setSelectedRole] = useState("All");
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axiosInstance.get("/accounts/users/");
        setUsers(response.data);
        // console.log(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    filterUsers();
  }, [searchQuery, selectedRole, users]);

  const filterUsers = () => {
    let filtered = users;

    if (selectedRole !== "All") {
      filtered = filtered.filter((user) => user.role === selectedRole);
    }

    if (searchQuery) {
      filtered = filtered.filter(
        (user) =>
          user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          user.email.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredUsers(filtered);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">List Users</h2>

      <div className="mb-4 flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search by name or email..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border p-2 rounded w-1/2"
        />

        <select
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="All">All Roles</option>
          <option value="Owner">Owner</option>
          <option value="Admin">Admin</option>
          <option value="User">User</option>
        </select>
      </div>

      <table className="min-w-full bg-white">
        <thead className="bg-gray-300">
          <tr>
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Role</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user, index) => (
              <tr key={index}>
                <td className="border px-4 py-2 text-center">{user.id}</td>
                <td className="border px-4 py-2 text-center">
                  {user.first_name}
                </td>
                <td className="border px-4 py-2 text-center">{user.email}</td>
                <td className="border px-4 py-2 text-center">{user.role}</td>
                <td className="border px-4 py-2 text-center">
                  <NavLink
                    to={`/dashboard-admin/users/${user.id}/edit`}
                    className="bg-blue-500 text-white px-2 py-1 rounded"
                  >
                    Edit
                  </NavLink>
                  <NavLink
                    to={`/dashboard-admin/users/${user.id}`}
                    className="bg-red-500 text-white px-2 py-1 rounded ml-2"
                  >
                    Delete
                  </NavLink>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center p-4">
                No users found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
