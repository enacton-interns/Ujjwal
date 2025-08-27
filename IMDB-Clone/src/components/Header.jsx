import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../store/authSlice";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.auth.currentUser);

  const handleAuthentication = () => {
    if (currentUser) {
      dispatch(logout());
      alert("Logged out successfully");
    } else {
      navigate("/authentication");
    }
  };

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  const handleSearch = () => {
    const trimmed = searchQuery.trim();
    if (trimmed) {
      navigate(`/search/${encodeURIComponent(trimmed)}`);
      setSearchQuery("");
      setIsSidebarOpen(false);
    }
  };

  return (
    <header className="bg-black text-white sticky top-0 z-50 border-b border-amber-300">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src="/src/assets/imdb-logo.svg" alt="IMDB" className="h-10" />
          </Link>

          <div className="hidden sm:flex flex-1 mx-6 gap-2">
            <input
              type="text"
              placeholder="Search movies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              className="w-full px-4 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
            <button
              onClick={handleSearch}
              className="bg-amber-400 text-black px-4 py-2 rounded font-semibold hover:bg-amber-500 transition"
            >
              Search
            </button>
          </div>

          {/* Hamburger Button (always visible) */}
          <button onClick={toggleSidebar} className="text-white text-2xl ml-4">
            <HiOutlineMenu />
          </button>
        </nav>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 w-64  bg-gray-500/50 text-black shadow-lg rounded-bl-lg backdrop-blur-sm transition-transform duration-300 z-40 ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col p-6 space-y-6 h-full">
          {/* Close Button */}
          <button
            onClick={toggleSidebar}
            className="text-2xl text-black self-end"
          >
            <HiOutlineX />
          </button>

          {/* Search (mobile only layout) */}
          <div className="sm:hidden flex flex-col gap-2">
            <input
              type="text"
              placeholder="Search movies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              className="px-3 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
            <button
              onClick={handleSearch}
              className="bg-amber-400 text-black px-3 py-2 rounded font-semibold hover:bg-amber-500"
            >
              🔍 Search
            </button>
          </div>

          {/* Navigation Links */}
          <Link to="/" onClick={toggleSidebar} className="hover:text-amber-400">
            Home
          </Link>
          <Link
            to="/popular"
            onClick={toggleSidebar}
            className="hover:text-amber-400"
          >
            Popular
          </Link>
          <Link
            to="/toprated"
            onClick={toggleSidebar}
            className="hover:text-amber-400"
          >
            Top Rated
          </Link>
          <Link
            to="/upcoming"
            onClick={toggleSidebar}
            className="hover:text-amber-400"
          >
            Upcoming
          </Link>
          <Link
            to="/watchlist"
            onClick={toggleSidebar}
            className="hover:text-amber-400"
          >
            Watchlist
          </Link>

          <button
            onClick={() => {
              toggleSidebar();
              handleAuthentication();
            }}
            className="mt-auto border px-3 py-2 font-medium rounded bg-amber-300 text-black hover:bg-amber-400"
          >
            {currentUser ? "Logout" : "Sign In"}
          </button>
        </div>
      </div>
    </header>
  );
}
