import React from "react";
import { Link, useNavigate } from "react-router";
import "./Navbar.css";
import { Power } from "lucide-react";

export function Navbar() {
  const navigate = useNavigate();

  const handleSignOut = () => {
    navigate("/");
  };
  return (
    <>
      <header className="bg-green-500 shadow-lg sticky top-0 z-50">
        <nav className="px-4 py-3 flex items-center">
          <div className="flex items-center text-white space-x-4">
            <h1 className="mt-1 text-xl mr-6">Green Shadow</h1>
            <Link to="/dashboard" className="custom-link">
              Dashboard
            </Link>
            <Link to="/field" className="custom-link">
              Field Details
            </Link>
            <Link to="/crop" className="custom-link">
              Crop Details
            </Link>
            <Link to="/staff" className="custom-link">
              Staff Details
            </Link>
            <Link to="/equipment" className="custom-link">
              Equipment Details
            </Link>
            <Link to="/log" className="custom-link">
              Log Detalls
            </Link>
            <Link to="/vehicle" className="custom-link">
              Vehicle Details
            </Link>
          </div>
          <button
            className="ml-auto flex items-center gap-2  bg-white text-green-500 px-4 py-2 rounded-md font-medium hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400"
            onClick={handleSignOut}
          >
            <Power className="h-5 w-5" />
            Sign Out
          </button>
        </nav>
      </header>
    </>
  );
}
