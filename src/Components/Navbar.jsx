import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Handle clicks outside of the dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-[#f3f6f4] p-4 shadow-xl border border-gray-300 rounded-md fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto flex items-center">
        <div className="flex items-center space-x-4">
          <img 
            src="/ITF_logo.jpg" 
            alt="Logo" 
            className="w-16 h-16 rounded-full object-cover"
          />
          <h1 className="text-red-600 text-2xl font-bold">Infinity Tech Flame</h1>
        </div>
        <ul className="flex space-x-4 ml-auto">
          <li>
            <Link to="/" className="text-red-500 hover:text-blue-400 font-bold">
              Home
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-red-500 hover:text-blue-400 font-bold">
              Contact
            </Link>
          </li>
          <li className="relative" ref={dropdownRef}>
            <button 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="text-red-500 hover:text-blue-400 font-bold focus:outline-none"
            >
              Portfolio
            </button>
            {isDropdownOpen && (
              <ul className="absolute top-full left-0 mt-2 bg-white shadow-xl border border-gray-300 rounded-md w-48">
                <li>
                  <Link 
                    to="/portfolio/projects" 
                    className="block px-4 py-2 text-red-500 hover:bg-gray-100 font-bold"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/portfolio/about" 
                    className="block px-4 py-2 text-red-500 hover:bg-gray-100 font-bold"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/portfolio/resources" 
                    className="block px-4 py-2 text-red-500 hover:bg-gray-100 font-bold"
                  >
                    Resources
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/portfolio/blog" 
                    className="block px-4 py-2 text-red-500 hover:bg-gray-100 font-bold"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/portfolio/careers" 
                    className="block px-4 py-2 text-red-500 hover:bg-gray-100 font-bold"
                  >
                    Careers
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link to="/channel" className="text-red-500 hover:text-blue-400 font-bold">
              Channel
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-red-500 hover:text-blue-400 font-bold">
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
