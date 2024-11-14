import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userRole");
    localStorage.removeItem("authToken");
    localStorage.clear();

    navigate("/login");
  };

  return (
    <div className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-lg font-bold">Dashboard Admin</h1>
      <div>
        <NavLink
          to="/home"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Back
        </NavLink>
        <button
          className="bg-red-500 text-white px-4 ms-6 py-2 rounded"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Header;
