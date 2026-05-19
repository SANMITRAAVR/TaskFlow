import { motion } from "framer-motion";

import {
  FaCalendarAlt,
  FaTrash,
  FaCheck,
  FaEdit,
} from "react-icons/fa";

function TaskCard({
  id,
  title,
  priority,
  status,
  date,
  deleteTask,
  completeTask,
  openEditModal,
}) {

  const priorityColors = {
    High: "bg-red-500",
    Medium: "bg-yellow-500",
    Low: "bg-green-500",
  };

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-5 shadow-xl"
    >

      {/* Header */}
      <div className="flex justify-between items-center">

        <h2
          className={`text-xl font-semibold ${
            status === "Completed"
              ? "line-through text-gray-500"
              : "text-white"
          }`}
        >
          {title}
        </h2>

        <span
          className={`${priorityColors[priority]} text-white px-3 py-1 rounded-full text-sm`}
        >
          {priority}
        </span>

      </div>

      {/* Status */}
      <p className="text-gray-400 mt-4">
        Status: {status}
      </p>

      {/* Date */}
      <div className="flex items-center gap-2 mt-5 text-gray-300">

        <FaCalendarAlt />

        <span>{date}</span>

      </div>

      {/* Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-6">

        {/* Complete Button */}
        <button
          onClick={() => completeTask(id)}
          className="bg-green-500 hover:bg-green-600 transition-all p-3 rounded-xl text-white flex justify-center items-center gap-2"
        >

          <FaCheck />

          Complete

        </button>

        {/* Edit Button */}
        <button
          onClick={() => openEditModal(id)}
          className="bg-blue-500 hover:bg-blue-600 transition-all p-3 rounded-xl text-white flex justify-center items-center gap-2"
        >

          <FaEdit />

          Edit

        </button>

        {/* Delete Button */}
        <button
          onClick={() => deleteTask(id)}
          className="bg-red-500 hover:bg-red-600 transition-all p-3 rounded-xl text-white flex justify-center items-center gap-2"
        >

          <FaTrash />

          Delete

        </button>

      </div>

    </motion.div>
  );
}

export default TaskCard;