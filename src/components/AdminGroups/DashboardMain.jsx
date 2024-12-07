import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { Chart, CategoryScale, LinearScale, BarElement, Title } from "chart.js";
import axiosInstance from "../../utils/axiosConfig";

Chart.register(CategoryScale, LinearScale, BarElement, Title);

const DashboardMain = () => {
  const [dashboardData, setDashboardData] = useState({
    totalUsers: 0,
    totalParkingLocations: 0,
    totalPackagesSold: 0,
  });
  const [chartData, setChartData] = useState(null);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userResponse = await axiosInstance.get("/accounts/users/");
        const users = userResponse.data;

        const parkingResponse = await axiosInstance.get(
          `${import.meta.env.VITE_API_URL}/api/parking/`
        );
        const parkingLocations = parkingResponse.data;

        const transactionResponse = await axiosInstance.get(
          "/api/transaksi-paket/"
        );
        const transactionsData = transactionResponse.data;

        setDashboardData({
          totalUsers: users.length,
          totalParkingLocations: parkingLocations.length,
          totalPackagesSold: transactionsData.length,
        });

        setTransactions(transactionsData);
        calculateRevenue(transactionsData);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, []);

  const calculateRevenue = (transaksi) => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const monthlyRevenue = months.map((_, monthIndex) => {
      const filteredTransactions = transaksi.filter((item) => {
        const createdAt = new Date(item.created_at);
        return createdAt.getMonth() === monthIndex && item.status === "paid";
      });

      const revenue = filteredTransactions.reduce((total, item) => {
        return total + parseFloat(item.paket.harga);
      }, 0);

      return revenue;
    });

    setChartData({
      labels: months,
      datasets: [
        {
          label: "Revenue (in $)",
          data: monthlyRevenue,
          backgroundColor: "rgba(75, 192, 192, 0.6)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
        },
      ],
    });
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold">Welcome to Admin Dashboard</h2>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-6 shadow rounded-lg">
          <h3 className="text-lg font-bold">Total Users</h3>
          <p className="text-2xl">{dashboardData.totalUsers}</p>
        </div>
        <div className="bg-white p-6 shadow rounded-lg">
          <h3 className="text-lg font-bold">Total Lokasi Parkir</h3>
          <p className="text-2xl">{dashboardData.totalParkingLocations}</p>
        </div>
        <div className="bg-white p-6 shadow rounded-lg">
          <h3 className="text-lg font-bold">Paket Parkir Terjual</h3>
          <p className="text-2xl">{dashboardData.totalPackagesSold}</p>
        </div>
      </div>

      <div className="mt-8 bg-white p-6 shadow rounded-lg">
        <h3 className="text-lg font-bold mb-4">Monthly Revenue</h3>
        {chartData ? (
          <Bar
            data={chartData}
            options={{
              responsive: true,
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
            }}
          />
        ) : (
          <p>Loading chart data...</p>
        )}
      </div>
    </div>
  );
};

export default DashboardMain;
