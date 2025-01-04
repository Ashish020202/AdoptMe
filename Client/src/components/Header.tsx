import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-200 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          🐾 PetAdopt
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-lg font-medium ${
                isActive ? "text-blue-500" : "text-gray-700"
              } hover:text-blue-600`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/adoption"
            className={({ isActive }) =>
              `text-lg font-medium ${
                isActive ? "text-blue-500" : "text-gray-700"
              } hover:text-blue-600`
            }
          >
            Adopt
          </NavLink>
          <NavLink
            to="/donate"
            className={({ isActive }) =>
              `text-lg font-medium ${
                isActive ? "text-blue-500" : "text-gray-700"
              } hover:text-blue-600`
            }
          >
            Donate
          </NavLink>
          <NavLink
            to="/emergency"
            className={({ isActive }) =>
              `text-lg font-medium ${
                isActive ? "text-blue-500" : "text-gray-700"
              } hover:text-blue-600`
            }
          >
            Emergency
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-lg font-medium ${
                isActive ? "text-blue-500" : "text-gray-700"
              } hover:text-blue-600`
            }
          >
            About
          </NavLink>
        </nav>

        {/* Sign-In/Profile Button */}
        <Link
          to="/signin"
          className="hidden md:inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Sign In
        </Link>

        {/* Hamburger Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-gray-100 border-t border-gray-300">
          <ul className="space-y-4 py-4 px-6">
            <li>
              <NavLink
                to="/"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block text-lg ${
                    isActive ? "text-blue-500" : "text-gray-700"
                  } hover:text-blue-600`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/adoption"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block text-lg ${
                    isActive ? "text-blue-500" : "text-gray-700"
                  } hover:text-blue-600`
                }
              >
                Adopt
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/donate"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block text-lg ${
                    isActive ? "text-blue-500" : "text-gray-700"
                  } hover:text-blue-600`
                }
              >
                Donate
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/emergency"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block text-lg ${
                    isActive ? "text-blue-500" : "text-gray-700"
                  } hover:text-blue-600`
                }
              >
                Emergency
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block text-lg ${
                    isActive ? "text-blue-500" : "text-gray-700"
                  } hover:text-blue-600`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <Link
                to="/signin"
                onClick={() => setIsOpen(false)}
                className="block text-lg bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 text-center"
              >
                Sign In
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
