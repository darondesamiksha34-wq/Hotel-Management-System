import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { RiHomeSmile2Fill } from "react-icons/ri";

function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full h-20 z-50
        flex items-center justify-between
        px-4 md:px-10 lg:px-20
        transition-all duration-500
        ${scrolled ? "bg-white shadow-xl" : "bg-transparent"}`}>
      
      <Link
        to="/"
        className="flex items-center gap-2 text-4xl font-bold font-sans"
      >
        <RiHomeSmile2Fill className="text-5xl" />
        StayZone
      
      </Link>

      
      <div className="hidden md:flex gap-8 font-bold text-black">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/hotel" className="hover:underline">Hotel</Link>
        <Link to="/experience" className="hover:underline">Experience</Link>
        <Link to="/about" className="hover:underline">About</Link>
      </div>

      
      <div className="hidden md:flex items-center gap-4">
        <IoIosSearch size={20} />
        <button
          onClick={() => navigate("/signin")}
          className="text-white px-6 py-2 rounded-2xl bg-black"
        >
          Login
        </button>
      </div>

      
      <button
        className="md:hidden text-3xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      
      {menuOpen && (
        <div
          className="absolute top-20 left-0 w-full bg-white shadow-md
          flex flex-col items-center gap-6 py-6 md:hidden"
        >
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/hotel" onClick={() => setMenuOpen(false)}>Hotel</Link>
          <Link to="/experience" onClick={() => setMenuOpen(false)}>Experience</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>

          <button
            onClick={() => {
              setMenuOpen(false);
              navigate("/login");
            }}
            className="text-white px-6 py-2 rounded-2xl bg-black"
          >
            Login
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;



