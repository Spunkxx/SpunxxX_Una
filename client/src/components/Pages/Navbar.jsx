
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="  dark:bg-gray-900">
      <div className=" max-w-screen-xl mx-auto p-4">
        <div className="flex flex-auto justify-between items-center">
          <Link to="/" className="text-2xl font-semibold text-black dark:text-white">
            Flast-Ai
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-600 dark:text-gray-400 focus:outline-none"
          >
            <svg
              className={`w-6 h-6 ${menuOpen ? 'hidden' : 'block'}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>

          {/* Desktop navigation */}
          <ul className="hidden md:flex space-x-6">
            <li>
              <Link
                to="/home"
                className="text-gray-700 hover:text-blue-700 dark:text-gray-300 dark:hover:text-blue-500"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-gray-700 hover:text-blue-700 dark:text-gray-300 dark:hover:text-blue-500"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="text-gray-700 hover:text-blue-700 dark:text-gray-300 dark:hover:text-blue-500"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-blue-700 dark:text-gray-300 dark:hover:text-blue-500"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile navigation */}
        {menuOpen && (
          <div className="mt-4 md:hidden">
            <ul className="space-y-4">
              <li>
                <Link
                  to="/home"
                  className="block text-gray-700 hover:text-blue-700 dark:text-gray-300 dark:hover:text-blue-500"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="block text-gray-700 hover:text-blue-700 dark:text-gray-300 dark:hover:text-blue-500"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="block text-gray-700 hover:text-blue-700 dark:text-gray-300 dark:hover:text-blue-500"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="block text-gray-700 hover:text-blue-700 dark:text-gray-300 dark:hover:text-blue-500"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;