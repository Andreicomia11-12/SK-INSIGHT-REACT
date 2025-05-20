import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="bg-[#0A2C52] text-white shadow-md rounded-b-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3">
            <img
              src="/logo.png" // ← Make sure this path is correct
              alt="SK-INSIGHT Logo"
              className="h-10 w-10 rounded-full border"
            />
            <span className="text-xl font-bold">SK–INSIGHT</span>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-8 items-center">
            <Link to="/" className="hover:underline font-medium">
              Home
            </Link>

            {/* Profiling Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center px-4 py-2 rounded-full font-medium hover:bg-[#163E74] transition"
              >
                Profiling
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg text-black z-10">
                  <Link
                    to="/kk-questionnaire"
                    className="block px-4 py-2 hover:bg-gray-100 text-sm"
                  >
                    KK Questionnaire
                  </Link>
                  <Link
                    to="/youth-profile"
                    className="block px-4 py-2 hover:bg-gray-100 text-sm"
                  >
                    Youth Profile
                  </Link>
                </div>
              )}
            </div>

            <Link to="/assistance" className="hover:underline font-medium">
              Assistance
            </Link>

            {/* Icons */}
            <div className="flex space-x-3 bg-[#163E74] px-4 py-2 rounded-full">
              <button>
                <img src="/user-icon.svg" alt="User" className="w-5 h-5" />
              </button>
              <button>
                <img src="/bell-icon.svg" alt="Notifications" className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
