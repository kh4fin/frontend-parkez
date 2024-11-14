// DashboardMain.js
import React from "react";

const DashboardMain = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold">Welcome to Admin Dashboard</h2>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-6 shadow rounded-lg">
          <h3 className="text-lg font-bold">Total Users</h3>
          <p className="text-2xl">150</p>
        </div>
        <div className="bg-white p-6 shadow rounded-lg">
          <h3 className="text-lg font-bold">Total Lokasi Parkir</h3>
          <p className="text-2xl">35</p>
        </div>
        <div className="bg-white p-6 shadow rounded-lg">
          <h3 className="text-lg font-bold">Paket Parkir Terjual</h3>
          <p className="text-2xl">450</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardMain;
