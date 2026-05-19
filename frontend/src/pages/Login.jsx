import { FaTasks } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black flex items-center justify-center px-4">

      {/* Background Glow */}
      <div className="absolute w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-20 top-10 left-10"></div>

      <div className="absolute w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-20 bottom-10 right-10"></div>

      {/* Login Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 80 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl p-8 w-full max-w-md"
      >

        {/* Logo */}
        <div className="flex flex-col items-center mb-8">

          <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-5 rounded-2xl shadow-lg mb-5">
            <FaTasks className="text-white text-4xl" />
          </div>

          <h1 className="text-5xl font-bold text-white tracking-wide">
            TaskFlow
          </h1>

          <p className="text-gray-300 mt-3 text-center">
            Manage tasks smarter and faster 🚀
          </p>

        </div>

        {/* Form */}
        <form className="space-y-5">

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full bg-white/10 border border-white/20 rounded-xl p-4 text-white placeholder-gray-400 outline-none focus:border-blue-500 transition-all"
          />

          <input
            type="password"
            placeholder="Enter your password"
            className="w-full bg-white/10 border border-white/20 rounded-xl p-4 text-white placeholder-gray-400 outline-none focus:border-purple-500 transition-all"
          />

          <button
            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:scale-105 transition-all duration-300 text-white p-4 rounded-xl font-semibold shadow-lg"
          >
            Login
          </button>

        </form>

        {/* Footer */}
        <p className="text-gray-400 text-center mt-6">
          Don’t have an account?
          <Link
            to="/register"
            className="text-blue-400 ml-2 hover:underline"
          >
            Register
          </Link>
        </p>

      </motion.div>
    </div>
  );
}

export default Login;