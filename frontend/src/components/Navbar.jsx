import { FaSearch, FaBell } from "react-icons/fa";

function Navbar() {
  return (
    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-5 mb-10">

      <div>
        <h1 className="text-4xl font-bold text-white">
          Dashboard
        </h1>

        <p className="text-gray-400 mt-2">
          Welcome back 👋
        </p>
      </div>

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

      </div>

    </div>
  );
}

export default Navbar;