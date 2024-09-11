import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

import { GrLinkedin } from "react-icons/gr";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-gray-700 via-red-500 to-gray-700 text-white py-8 mt-10">
      <div className="container mx-auto flex flex-col items-center md:flex-row md:justify-between">
        {/* Brand Section */}
        <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
          <h2 className="text-4xl font-bold mb-2">Infinity Tech Flame</h2>
          <p className="text-sm mb-4">© {currentYear} Nitish Gupta. All rights reserved.</p>
          <ul className="flex flex-wrap justify-center space-x-6 mb-4">
            <li>
              <a href="mailto:infinityflame143@gmail.com" className="hover:text-gray-400 transition-colors duration-300">Email</a>
            </li>
            <li>
              <a href="/contact" className="hover:text-gray-400 transition-colors duration-300">Contact</a>
            </li>
            <li>
              <a href="/portfolio" className="hover:text-gray-400 transition-colors duration-300">Portfolio</a>
            </li>
            <li>
              <a href="/channel" className="hover:text-gray-400 transition-colors duration-300">Channel</a>
            </li>
            <li>
              <a href="/about" className="hover:text-gray-400 transition-colors duration-300">About</a>
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="flex space-x-6">
        <a href="www.youtube.com/@infinitytechflame" target="_blank" rel="noopener noreferrer">
            <IoLogoYoutube className="text-3xl text-red-600 hover:text-red-500 transition-transform transform hover:scale-110" />
          </a>
          <a href="https://www.facebook.com/nitish.gupta.31945243" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-3xl text-blue-600 hover:text-blue-400 transition-transform transform hover:scale-110" />
          </a>
          <a href="https://x.com/NitishG03422868" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-3xl text-blue-400 hover:text-blue-300 transition-transform transform hover:scale-110" />
          </a>
          <a href="https://www.linkedin.com/in/infinity-flame-84446531b/" target="_blank" rel="noopener noreferrer">
            <GrLinkedin className="text-3xl text-blue-700 hover:text-blue-600 transition-transform transform hover:scale-110" />
          </a>
          <a href="https://www.instagram.com/infinity_tech_flame/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-3xl text-[] hover:text-gradient-2 transition-transform transform hover:scale-110" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
