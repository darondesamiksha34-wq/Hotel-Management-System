import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { RiHomeSmile2Fill } from "react-icons/ri";
import { deleteAccount, logoutUser } from "../services/user.service";
import { useToast } from "./ToastProvider";

function Navbar() {
  const navigate = useNavigate();
  const { showSuccess, showError } = useToast();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [userEmail, setUserEmail] = useState(() => localStorage.getItem("userEmail") || "");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const syncUser = () => {
      setUserEmail(localStorage.getItem("userEmail") || "");
    };

    window.addEventListener("authChange", syncUser);
    window.addEventListener("storage", syncUser);

    return () => {
      window.removeEventListener("authChange", syncUser);
      window.removeEventListener("storage", syncUser);
    };
  }, []);

  const handleLogout = async () => {
    try {
      const response = await logoutUser();

      if (response.success !== true) {
        showError(response.message || "Logout failed");
        return;
      }
    } catch (error) {
      console.error(error);
      showError("Something went wrong while logging out");
      return;
    }

    localStorage.removeItem("userEmail");
    setUserEmail("");
    setMenuOpen(false);
    showSuccess("Logged out successfully");
    navigate("/signin");
  };

  const handleDeleteAccount = async () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete your account? This action cannot be undone."
    );

    if (!confirmed) return;

    try {
      const response = await deleteAccount();

      if (response.success !== true) {
        showError(response.message || "Unable to delete account");
        return;
      }
    } catch (error) {
      console.error(error);
      showError("Something went wrong while deleting your account");
      return;
    }

    localStorage.removeItem("userEmail");
    setUserEmail("");
    setMenuOpen(false);
    showSuccess("Account deleted successfully");
    navigate("/signin");
  };

  const userInitial = userEmail.trim().charAt(0).toUpperCase();

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
        {userEmail ? (
          <div className="relative group">
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-lg font-bold text-white"
              aria-label={`Signed in as ${userEmail}`}
            >
              {userInitial}
            </button>

            <div className="invisible absolute right-0 top-12 min-w-40 rounded-lg bg-white py-2 shadow-xl ring-1 ring-black/10 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div className="max-w-56 truncate px-4 pb-2 text-sm text-gray-500">
                {userEmail}
              </div>
              <button
                type="button"
                onClick={handleLogout}
                className="w-full px-4 py-2 text-left text-sm font-semibold text-red-600 hover:bg-red-50"
              >
                Logout
              </button>
              <button
                type="button"
                onClick={handleDeleteAccount}
                className="w-full px-4 py-2 text-left text-sm font-semibold text-red-700 hover:bg-red-50"
              >
                Delete Account
              </button>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/signin")}
            className="text-white px-6 py-2 rounded-2xl bg-black"
          >
            Login
          </button>
        )}
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

          {userEmail ? (
            <div className="flex flex-col items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-lg font-bold text-white">
                {userInitial}
              </div>
              <button
                type="button"
                onClick={handleLogout}
                className="text-red-600 font-semibold"
              >
                Logout
              </button>
              <button
                type="button"
                onClick={handleDeleteAccount}
                className="text-red-700 font-semibold"
              >
                Delete Account
              </button>
            </div>
          ) : (
            <button
              onClick={() => {
                setMenuOpen(false);
                navigate("/signin");
              }}
              className="text-white px-6 py-2 rounded-2xl bg-black"
            >
              Login
            </button>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
