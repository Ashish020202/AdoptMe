import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 text-center">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold mb-4">Pet Adopt</h3>
              <p className="text-sm">
                Helping animals find loving homes. Join our mission to make the
                world better for our furry friends.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">
                Subscribe to Newsletter
              </h3>
              <input
                id="email"
                type="email"
                placeholder="           Enter your email"
                className="px-3 py-1 border border-gray-500 rounded focus:outline-none focus:ring focus:ring-gray-500 text-black"
              />
            </div>
          </div>

          {/* Links Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="/adoption" className="hover:underline">
                  Adopt
                </a>
              </li>
              <li>
                <a href="/donate" className="hover:underline">
                  Donate
                </a>
              </li>
              <li>
                <a href="/emergency" className="hover:underline">
                  Emergency
                </a>
              </li>
              <li>
                <a href="/about" className="hover:underline">
                  About
                </a>
              </li>
            </ul>
          </div>

          {/* Contact and Social Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="text-sm mb-4">123 Pet Street, Furry City, PC 56789</p>
            <p className="text-sm mb-4">Email: support@petadopt.com</p>
            <div className="flex space-x-4 justify-center">
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
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
          <p>© 2025 Pet Adopt. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
