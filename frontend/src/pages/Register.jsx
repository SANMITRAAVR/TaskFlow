import { FaUserPlus } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black flex items-center justify-center px-4">

      {/* Background Glow */}
      <div className="absolute w-72 h-72 bg-pink-500 rounded-full blur-3xl opacity-20 top-10 left-10"></div>

      <div className="absolute w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-20 bottom-10 right-10"></div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 80 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl p-8 w-full max-w-md"
      >

        {/* Logo */}
        <div className="flex flex-col items-center mb-8">

          <div className="bg-gradient-to-r from-pink-500 to-blue-500 p-5 rounded-2xl shadow-lg mb-5">
            <FaUserPlus className="text-white text-4xl" />
          </div>

          <h1 className="text-5xl font-bold text-white tracking-wide">
            Register
          </h1>

          <p className="text-gray-300 mt-3 text-center">
            Create your TaskFlow account ✨
          </p>

        </div>

        {/* Form */}
        <form className="space-y-5">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full bg-white/10 border border-white/20 rounded-xl p-4 text-white placeholder-gray-400 outline-none focus:border-pink-500 transition-all"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full bg-white/10 border border-white/20 rounded-xl p-4 text-white placeholder-gray-400 outline-none focus:border-blue-500 transition-all"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full bg-white/10 border border-white/20 rounded-xl p-4 text-white placeholder-gray-400 outline-none focus:border-purple-500 transition-all"
          />

          <button
            className="w-full bg-gradient-to-r from-pink-500 to-blue-500 hover:scale-105 transition-all duration-300 text-white p-4 rounded-xl font-semibold shadow-lg"
          >
            Create Account
          </button>

        </form>

        {/* Footer */}
        <p className="text-gray-400 text-center mt-6">
          Already have an account?
          <Link
            to="/"
            className="text-blue-400 ml-2 hover:underline"
          >
            Login
          </Link>
        </p>

      </motion.div>
    </div>
  );
}

export default Register;