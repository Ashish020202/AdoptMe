import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white py-8 pt-12">
      <div className="container mx-auto px-4">
        {/* Company and Address Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
          <div>
            <h2 className="text-2xl font-bold">Pet Adopt</h2>
            <p className="text-sm mt-2">1234 Pet Road, Animal City, 56789</p>
            <p className="text-sm">Phone: (123) 456-7890</p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col md:flex-row md:space-x-6 mt-4 md:mt-0">
            <ul className="flex flex-col space-y-2 md:space-y-0">
              <li>
                <Link to="/" className="hover:text-blue-400">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/adoption" className="hover:text-blue-400">
                  Adopt
                </Link>
              </li>
              <li>
                <Link to="/donate" className="hover:text-blue-400">
                  Donate
                </Link>
              </li>
              <li>
                <Link to="/emergency" className="hover:text-blue-400">
                  Emergency
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-blue-400">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center mt-6 space-x-6">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-600"
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-pink-400"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-500"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </div>

        {/* Copyright */}
        <div className="mt-6 text-center text-sm">
          <p>&copy; 2025 Pet Adopt. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
