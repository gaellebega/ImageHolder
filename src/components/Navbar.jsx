import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkStyle =
    "relative cursor-pointer font-sans font-normal tracking-[0.02em] after:absolute after:left-[-4px] after:right-[-4px] after:-bottom-1 after:h-[1.5px] after:bg-black after:scale-x-0 hover:after:scale-x-100 after:transition-transform";

  return (
    <nav className="w-full bg-white px-8 py-6">
      {/* Top Navbar */}
      <div className="flex items-center justify-between">

        {/* Empire Design Logo */}
        <Link
          to="/"
          className="font-cormorant text-black text-2xl font-bold tracking-[0.22em] cursor-pointer"
        >
          EMPIRE DESIGN.
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex w-96 items-center justify-evenly text-black text-[17px]">
          <Link
            to="/key-art"
            className={linkStyle}
          >
            Key Art
          </Link>

          <Link
            to="/av"
            className={linkStyle}
          >
            Av
          </Link>

          <Link
            to="/contact"
            className={linkStyle}
          >
            Contact
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 cursor-pointer"
          aria-label="Open menu"
        >
          <span className="w-7 h-0.5 bg-black"></span>
          <span className="w-7 h-0.5 bg-black"></span>
          <span className="w-7 h-0.5 bg-black"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-end gap-5 pt-6 text-black">
          <Link
            to="/key-art"
            onClick={() => setMenuOpen(false)}
            className={linkStyle}
          >
            Key Art
          </Link>

          <Link
            to="/av"
            onClick={() => setMenuOpen(false)}
            className={linkStyle}
          >
            AV
          </Link>

          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className={linkStyle}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;