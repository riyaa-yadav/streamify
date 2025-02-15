import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const location = useLocation();

  return (
    <header className="bg-gray-600 text-white py-4 px-4 md:px-8 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Streamify</h1>

      {/* Hamburger for Mobile */}
      <button
        className="md:hidden text-2xl"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        ☰
      </button>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-4">
        <Link
          to="/"
          className={`${
            location.pathname === "/"
              ? "border-b-2 border-white font-semibold"
              : ""
          }`}
        >
          Overview
        </Link>
        <Link
          to="/streams"
          className={`${
            location.pathname === "/streams"
              ? "border-b-2 border-white font-semibold"
              : ""
          }`}
        >
          Streams
        </Link>
      </nav>
    </header>
  );
};

export default Header;
