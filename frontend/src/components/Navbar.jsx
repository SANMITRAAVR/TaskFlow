import {
  FaSearch,
  FaBell,
  FaSignOutAlt,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  const userInfo = JSON.parse(
    localStorage.getItem("userInfo")
  );

  const logoutHandler = () => {

    localStorage.removeItem(
      "userInfo"
    );

    navigate("/");
  };

  return (
    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-5 mb-10">

      {/* Left */}
      <div>

        <h1 className="text-4xl font-bold text-white">
          Dashboard
        </h1>

        <p className="text-gray-400 mt-2">
          Welcome back,
          <span className="text-blue-400 ml-2 font-semibold">
            {userInfo?.name}
          </span>
          👋
        </p>

      </div>

      {/* Right */}
      <div className="flex items-center gap-4">

        {/* Search */}
        <div className="flex items-center bg-white/10 border border-white/10 px-4 py-3 rounded-xl">

          <FaSearch className="text-gray-400 mr-3" />

          <input
            type="text"
            placeholder="Search tasks..."
            className="bg-transparent outline-none text-white placeholder-gray-400"
          />

        </div>

        {/* Notification */}
        <button className="bg-white/10 p-4 rounded-xl text-white hover:bg-white/20 transition-all">

          <FaBell />

        </button>

        {/* Profile */}
        <img
          src="https://i.pravatar.cc/40"
          alt="profile"
          className="w-12 h-12 rounded-full border-2 border-blue-500"
        />

        {/* Logout */}
        <button
          onClick={logoutHandler}
          className="flex items-center gap-2 bg-red-500 hover:bg-red-600 transition-all text-white px-5 py-3 rounded-xl shadow-lg"
        >

          <FaSignOutAlt />

          Logout

        </button>

      </div>

    </div>
  );
}

export default Navbar;