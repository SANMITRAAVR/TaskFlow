import {
  FaHome,
  FaTasks,
  FaChartBar,
  FaCog,
} from "react-icons/fa";

function Sidebar() {
  return (
    <div className="w-64 min-h-screen bg-white/10 backdrop-blur-lg border-r border-white/10 p-6 hidden md:flex flex-col">

      <h1 className="text-3xl font-bold text-white mb-10">
        TaskFlow
      </h1>

      <div className="space-y-6 text-gray-300">

        <div className="flex items-center gap-4 hover:text-white cursor-pointer transition-all">
          <FaHome />
          <span>Dashboard</span>
        </div>

        <div className="flex items-center gap-4 hover:text-white cursor-pointer transition-all">
          <FaTasks />
          <span>Tasks</span>
        </div>

        <div className="flex items-center gap-4 hover:text-white cursor-pointer transition-all">
          <FaChartBar />
          <span>Analytics</span>
        </div>

        <div className="flex items-center gap-4 hover:text-white cursor-pointer transition-all">
          <FaCog />
          <span>Settings</span>
        </div>

      </div>

    </div>
  );
}

export default Sidebar;