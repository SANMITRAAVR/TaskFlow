import { useState, useEffect } from "react";

import axios from "axios";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import StatsCard from "../components/StatsCard";
import TaskCard from "../components/TaskCard";
import AddTaskModal from "../components/AddTaskModal";
import EditTaskModal from "../components/EditTaskModal";

import { FaPlus } from "react-icons/fa";

function Dashboard() {

  // Add Modal
  const [showModal, setShowModal] =
    useState(false);

  // Edit Modal
  const [showEditModal, setShowEditModal] =
    useState(false);

  // Selected Task
  const [selectedTask, setSelectedTask] =
    useState(null);

  // Tasks
  const [tasks, setTasks] = useState([]);

  // Fetch Tasks
  const fetchTasks = async () => {

    try {

      const { data } =
        await axios.get(
          "http://localhost:5000/api/tasks"
        );

      setTasks(data);

    } catch (error) {

      console.log(error);
    }
  };

  // Load Tasks
  useEffect(() => {

    fetchTasks();

  }, []);

  // Add Task
  const addTask = async (task) => {

    try {

      await axios.post(
        "http://localhost:5000/api/tasks",
        task
      );

      fetchTasks();

      setShowModal(false);

    } catch (error) {

      console.log(error);
    }
  };

  // Delete Task
  const deleteTask = async (id) => {

    try {

      await axios.delete(
        `http://localhost:5000/api/tasks/${id}`
      );

      fetchTasks();

    } catch (error) {

      console.log(error);
    }
  };

  // Complete Task
  const completeTask = async (id) => {

    try {

      await axios.put(
        `http://localhost:5000/api/tasks/${id}`
      );

      fetchTasks();

    } catch (error) {

      console.log(error);
    }
  };

  // Update Task
  const updateTask = async (
    updatedTask
  ) => {

    try {

      await axios.put(
        `http://localhost:5000/api/tasks/${updatedTask._id}`,
        updatedTask
      );

      fetchTasks();

      setShowEditModal(false);

    } catch (error) {

      console.log(error);
    }
  };

  // Open Edit Modal
  const openEditModal = (id) => {

    const taskToEdit =
      tasks.find(
        (task) =>
          task._id === id
      );

    setSelectedTask(taskToEdit);

    setShowEditModal(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute w-96 h-96 bg-blue-500 opacity-10 blur-3xl rounded-full top-0 left-0"></div>

      <div className="absolute w-96 h-96 bg-purple-500 opacity-10 blur-3xl rounded-full bottom-0 right-0"></div>

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-8 relative z-10">

        {/* Navbar */}
        <Navbar />

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <StatsCard
            title="Total Tasks"
            value={tasks.length}
          />

          <StatsCard
            title="Completed"
            value={
              tasks.filter(
                (task) =>
                  task.status ===
                  "Completed"
              ).length
            }
          />

          <StatsCard
            title="Pending"
            value={
              tasks.filter(
                (task) =>
                  task.status !==
                  "Completed"
              ).length
            }
          />

        </div>

        {/* Tasks Section */}
        <div className="mt-12">

          <div className="flex justify-between items-center mb-8">

            <h2 className="text-3xl font-bold text-white">
              Your Tasks
            </h2>

            <button className="bg-white/10 border border-white/10 text-white px-5 py-3 rounded-xl hover:bg-white/20 transition-all">
              View All
            </button>

          </div>

          {/* Task Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

            {tasks.map((task) => (

              <TaskCard
                key={task._id}
                id={task._id}
                title={task.title}
                priority={task.priority}
                status={task.status}
                date={task.date}
                deleteTask={deleteTask}
                completeTask={completeTask}
                openEditModal={openEditModal}
              />

            ))}

          </div>

        </div>

        {/* Floating Add Button */}
        <button
          onClick={() =>
            setShowModal(true)
          }
          className="fixed bottom-10 right-10 bg-gradient-to-r from-blue-500 to-purple-500 p-5 rounded-full text-white shadow-2xl hover:scale-110 transition-all duration-300"
        >

          <FaPlus className="text-xl" />

        </button>

        {/* Add Modal */}
        {showModal && (

          <AddTaskModal
            closeModal={() =>
              setShowModal(false)
            }
            addTask={addTask}
          />

        )}

        {/* Edit Modal */}
        {showEditModal &&
          selectedTask && (

          <EditTaskModal
            task={selectedTask}
            closeModal={() =>
              setShowEditModal(false)
            }
            updateTask={updateTask}
          />

        )}

      </div>

    </div>
  );
}

export default Dashboard;