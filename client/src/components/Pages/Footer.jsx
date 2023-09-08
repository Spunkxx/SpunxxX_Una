
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-transparent py-12">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="md:col-span-2 lg:col-span-1">
            <h2 className="text-2xl font-semibold text-white mb-4">About Us</h2>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non justo eu turpis tristique euismod.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">Links</h2>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400">Services</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
            <address className="text-gray-400">
              123 Main Street
              <br />
              City, Country
              <br />
              Phone: +123-456-789
              <br />
              Email: example@example.com
            </address>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8 flex flex-col items-center md:flex-row md:justify-between">
          <p className="text-gray-400">&copy; 2023 Your Company. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-4">
              <li>
                <Link to="/privacy-policy" className="text-gray-400">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-gray-400">Terms of Service</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
