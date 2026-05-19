import { useState } from "react";
import { motion } from "framer-motion";

function AddTaskModal({ closeModal, addTask }) {

  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Medium");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      title,
      priority,
      status: "Pending",
      date: new Date().toLocaleDateString(),
    };

    addTask(newTask);

    closeModal();
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">

      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-gray-900 border border-white/10 p-8 rounded-3xl w-full max-w-md shadow-2xl"
      >

        <h2 className="text-3xl font-bold text-white mb-6">
          Add New Task
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <input
            type="text"
            placeholder="Task title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full bg-white/10 border border-white/10 p-4 rounded-xl text-white outline-none"
            required
          />

          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="w-full bg-white/10 border border-white/10 p-4 rounded-xl text-white outline-none"
          >

            <option className="bg-black">High</option>
            <option className="bg-black">Medium</option>
            <option className="bg-black">Low</option>

          </select>

          <div className="flex gap-4">

            <button
              type="submit"
              className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-xl text-white font-semibold"
            >
              Add Task
            </button>

            <button
              type="button"
              onClick={closeModal}
              className="flex-1 bg-red-500 p-4 rounded-xl text-white font-semibold"
            >
              Cancel
            </button>

          </div>

        </form>

      </motion.div>

    </div>
  );
}

export default AddTaskModal;