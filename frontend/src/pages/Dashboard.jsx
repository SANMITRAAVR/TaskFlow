import { useState, useEffect } from "react";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import StatsCard from "../components/StatsCard";
import TaskCard from "../components/TaskCard";
import AddTaskModal from "../components/AddTaskModal";
import EditTaskModal from "../components/EditTaskModal";

import { FaPlus } from "react-icons/fa";

function Dashboard() {

  // Add Modal
  const [showModal, setShowModal] = useState(false);

  // Edit Modal
  const [showEditModal, setShowEditModal] =
    useState(false);

  // Selected Task
  const [selectedTask, setSelectedTask] =
    useState(null);

  // Tasks State
  const [tasks, setTasks] = useState(() => {

    const savedTasks =
      localStorage.getItem("tasks");

    return savedTasks
      ? JSON.parse(savedTasks)
      : [
          {
            id: 1,
            title: "Design Dashboard UI",
            priority: "High",
            status: "In Progress",
            date: "20 May 2026",
          },

          {
            id: 2,
            title: "Finish Backend API",
            priority: "Medium",
            status: "Pending",
            date: "24 May 2026",
          },
        ];
  });

  // Save to LocalStorage
  useEffect(() => {

    localStorage.setItem(
      "tasks",
      JSON.stringify(tasks)
    );

  }, [tasks]);

  // Add Task
  const addTask = (task) => {

    const newTask = {
      ...task,
      id: Date.now(),
    };

    setTasks([...tasks, newTask]);
  };

  // Delete Task
  const deleteTask = (id) => {

    setTasks(
      tasks.filter(
        (task) => task.id !== id
      )
    );
  };

  // Complete Task
  const completeTask = (id) => {

    const updatedTasks = tasks.map(
      (task) => {

        if (task.id === id) {

          return {
            ...task,
            status: "Completed",
          };

        }

        return task;
      }
    );

    setTasks(updatedTasks);
  };

  // Update Task
  const updateTask = (updatedTask) => {

    const updatedTasks = tasks.map(
      (task) =>

        task.id === updatedTask.id
          ? updatedTask
          : task
    );

    setTasks(updatedTasks);
  };

  // Open Edit Modal
  const openEditModal = (id) => {

    const taskToEdit = tasks.find(
      (task) => task.id === id
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
                  task.status === "Completed"
              ).length
            }
          />

          <StatsCard
            title="Pending"
            value={
              tasks.filter(
                (task) =>
                  task.status !== "Completed"
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
                key={task.id}
                id={task.id}
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
          onClick={() => setShowModal(true)}
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
        {showEditModal && selectedTask && (

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