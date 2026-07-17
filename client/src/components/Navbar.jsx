import { Link } from "react-router-dom";
import { FaDna } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur border-b border-cyan-800">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 text-cyan-400 text-3xl font-bold"
        >
          <FaDna className="text-pink-500" />
          DNA Storage
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-lg">

          <Link to="/" className="hover:text-cyan-400 transition">
            Home
          </Link>

          <Link to="/encode" className="hover:text-cyan-400 transition">
            Encode
          </Link>

          <Link to="/decode" className="hover:text-cyan-400 transition">
            Decode
          </Link>

          <Link to="/history" className="hover:text-cyan-400 transition">
            History
          </Link>

          <Link to="/about" className="hover:text-cyan-400 transition">
            About
          </Link>

        </div>

        {/* Right Side Buttons */}
        <div className="flex items-center gap-4">

          <Link
            to="/login"
            className="border border-cyan-400 px-5 py-2 rounded-lg hover:bg-cyan-500 transition"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="bg-cyan-500 hover:bg-cyan-600 px-5 py-2 rounded-lg transition"
          >
            Register
          </Link>

        </div>

      </div>

    </nav>
  );
}