
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-8 py-6 bg-white">
      
      {/* Logo / Brand Name */}
      <Link
        to="/"
        className="text-2xl font-bold text-gray-900"
      >
        Empire Design
      </Link>

      {/* Navigation */}
      <div className="flex items-center gap-8">
        <Link
          to="/"
          className="text-gray-700 hover:text-black"
        >
          Home
        </Link>

        <Link
          to="/gallery"
          className="text-gray-700 hover:text-black"
        >
          Gallery
        </Link>

        <Link
          to="/about"
          className="text-gray-700 hover:text-black"
        >
          About
        </Link>

        <Link
          to="/contact"
          className="text-gray-700 hover:text-black"
        >
          Contact
        </Link>
      </div>

      {/* Buttons */}
      <div className="flex items-center gap-4">
        <Link
          to="/login"
          className="text-gray-700 hover:text-black"
        >
          Sign In
        </Link>

        <Link
          to="/signup"
          className="px-5 py-2.5 rounded-lg bg-black text-white hover:bg-gray-800"
        >
          Sign Up
        </Link>
      </div>

    </nav>
  );
}

export default Navbar;
