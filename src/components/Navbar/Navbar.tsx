import React from "react";
import { Link, Outlet, useNavigate } from "react-router";
import "./Navbar.css";
import { Power } from "lucide-react";
import { FaTachometerAlt, FaListAlt, FaUsers, FaLeaf, FaToolbox, FaTruck, FaPowerOff } from 'react-icons/fa';

export function Navbar() {
  const navigate = useNavigate();

  const handleSignOut = () => {
    navigate("/");
  };
  return (
    // <>
    //   <header className="bg-green-500 shadow-lg sticky top-0 z-50">
    //     <nav className="px-4 py-3 flex items-center">
    //       <div className="flex items-center text-white space-x-4">
    //         <h1 className="mt-1 text-xl mr-6">Green Shadow</h1>
    //         <Link to="/dashboard" className="custom-link">
    //           Dashboard
    //         </Link>
    //         <Link to="/field" className="custom-link">
    //           Field Details
    //         </Link>
    //         <Link to="/crop" className="custom-link">
    //           Crop Details
    //         </Link>
    //         <Link to="/staff" className="custom-link">
    //           Staff Details
    //         </Link>
    //         <Link to="/equipment" className="custom-link">
    //           Equipment Details
    //         </Link>
    //         <Link to="/log" className="custom-link">
    //           Log Detalls
    //         </Link>
    //         <Link to="/vehicle" className="custom-link">
    //           Vehicle Details
    //         </Link>
    //       </div>
    //       <button
    //         className="ml-auto flex items-center gap-2  bg-white text-green-500 px-4 py-2 rounded-md font-medium hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400"
    //         onClick={handleSignOut}
    //       >
    //         <Power className="h-5 w-5" />
    //         Sign Out
    //       </button>
    //     </nav>
    //   </header>
    // </>
    <div className="flex">
      <aside className="w-64 bg-green-500 h-screen text-white shadow-lg sticky top-0 z-50">
        <div className="px-4 py-6">
          <h1 className="text-xl mb-8 text-center">Green Shadow</h1>
          <nav className="space-y-4">
            <Link to="/dashboard" className="flex items-center gap-2 p-2 hover:bg-green-400 rounded-md">
              <FaTachometerAlt className="h-5 w-5" />
              <span>Dashboard</span>
            </Link>
            <Link to="/field" className="flex items-center gap-2 p-2 hover:bg-green-400 rounded-md">
              <FaListAlt className="h-5 w-5" />
              <span>Field Details</span>
            </Link>
            <Link to="/crop" className="flex items-center gap-2 p-2 hover:bg-green-400 rounded-md">
              <FaLeaf className="h-5 w-5" />
              <span>Crop Details</span>
            </Link>
            <Link to="/staff" className="flex items-center gap-2 p-2 hover:bg-green-400 rounded-md">
              <FaUsers className="h-5 w-5" />
              <span>Staff Details</span>
            </Link>
            <Link to="/equipment" className="flex items-center gap-2 p-2 hover:bg-green-400 rounded-md">
              <FaToolbox className="h-5 w-5" />
              <span>Equipment Details</span>
            </Link>
            <Link to="/vehicle" className="flex items-center gap-2 p-2 hover:bg-green-400 rounded-md">
              <FaTruck className="h-5 w-5" />
              <span>Vehicle Details</span>
            </Link>
            <Link to="/log" className="flex items-center gap-2 p-2 hover:bg-green-400 rounded-md">
              <FaListAlt className="h-5 w-5" />
              <span>Log Details</span>
            </Link>
          </nav>
        </div>
        <div className="absolute bottom-4 w-full px-4">
          <button
            onClick={handleSignOut}
            className="flex items-center gap-2 w-full p-2 bg-white text-green-500 rounded-md hover:bg-gray-200"
          >
            <FaPowerOff className="h-5 w-5" />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>
      <main className="flex-1 p-6">
        <Navbar/>
        <Outlet/>
      </main>
    </div>
  );
}
