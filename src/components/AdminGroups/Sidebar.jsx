import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-600 min-h-screen text-white">
      <div className="p-4 font-bold text-xl">parkEZ</div>
      <ul className="space-y-4 p-4">
        <li>
          <NavLink
            to="/dashboard-admin"
            className="hover:bg-gray-700 text-gray-300 p-2 block rounded"
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard-admin/users"
            className="hover:bg-gray-700 text-gray-300 p-2 block rounded"
          >
            Users
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard-admin/partners"
            className="hover:bg-gray-700 text-gray-300 p-2 block rounded"
          >
            Partners
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard-admin/packet"
            className="hover:bg-gray-700 text-gray-300 p-2 block rounded"
          >
            Packet
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard-admin/history"
            className="hover:bg-gray-700 text-gray-300 p-2 block rounded"
          >
            History
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
