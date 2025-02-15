import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "./Header";

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen">
      {/* Header */}
      <Header
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      {/* Sidebar (Mobile) */}
      <div
        className={`fixed top-0 right-0 h-full w-48 bg-white shadow-lg transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 z-50`}
      >
        <button
          className="absolute top-4 right-4 text-xl"
          onClick={() => setIsSidebarOpen(false)}
        >
          ✖
        </button>
        <nav className="mt-14 px-8 flex flex-col  justify-end">
          <Link
            to="/"
            className={`py-2 text-lg text-gray-600 ${
              location.pathname === "/" ? " font-bold" : ""
            }`}
            onClick={() => setIsSidebarOpen(false)}
          >
            Overview
          </Link>
          <Link
            to="/streams"
            className={`py-2 text-lg  text-gray-600 ${
              location.pathname === "/streams" ? "font-bold" : ""
            }`}
            onClick={() => setIsSidebarOpen(false)}
          >
            Streams
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <main className="py-4 px-4 md:px-8">{children}</main>
    </div>
  );
};

export default Layout;
