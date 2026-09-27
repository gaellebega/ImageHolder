import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkStyle =
    "relative cursor-pointer font-sans font-normal tracking-[0.02em] after:absolute after:left-[-4px] after:right-[-4px] after:-bottom-2 after:h-[1.5px] after:bg-black after:scale-x-0 hover:after:scale-x-100 after:transition-transform";

  return (
    <nav className="w-full bg-white px-8 py-6">

      {/* Top Navbar */}
      <div className="relative z-50 flex items-center justify-between">

        {/* Empire Design Logo */}
        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
          className="font-cormorant text-black text-2xl font-bold tracking-[0.22em] cursor-pointer"
        >
          EMPIRE DESIGN.
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex w-96 items-center justify-evenly text-black text-[17px]">
          <Link to="/key-art" className={linkStyle}>
            Key Art
          </Link>

          <Link to="/av" className={linkStyle}>
            Av
          </Link>

          <Link to="/contact" className={linkStyle}>
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden relative w-10 h-10 flex items-center justify-center cursor-pointer"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? (
            /* X */
            <span className="absolute text-black text-5xl font-light leading-none">
              ×
            </span>
          ) : (
            /* Two-line hamburger */
            <span className="flex flex-col gap-2">
              <span className="w-8 h-[2px] bg-black"></span>
              <span className="w-8 h-[2px] bg-black"></span>
            </span>
          )}
        </button>
      </div>

      {/* Mobile Full-Screen Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-white flex items-center justify-center">

          <div className="flex flex-col items-center gap-10 text-black text-4xl">
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
              to="/contacts"
              onClick={() => setMenuOpen(false)}
              className={linkStyle}
            >
              Contact
            </Link>
          </div>

        </div>
      )}
    </nav>
  );
}

export default Navbar;