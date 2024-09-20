'use client';
import { LucideHome, LucideMail, LucidePhone, LucideTwitter, LucideFacebook, LucideInstagram, LucideX } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex flex-wrap justify-between items-center">
          {/* Company Info */}
          <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
            <h4 className="text-2xl font-semibold text-white mb-4">PostIt AI</h4>
            <p className="text-gray-400">
              Empowering your digital journey with cutting-edge content creation solutions.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
            <h5 className="text-lg font-bold text-white mb-4">Quick Links</h5>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-white">About Us</a></li>
              <li><a href="#services" className="hover:text-white">Services</a></li>
              <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
              <li><a href="#contact" className="hover:text-white">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="w-full sm:w-1/3">
            <h5 className="text-lg font-bold text-white mb-4">Contact Us</h5>
            <ul className="space-y-2">
              <li className="flex items-center">
                <LucidePhone className="mr-2 text-purple-400" /><a href="tel:+2349063525949">+234 906 352 5949</a>
              </li>
              <li className="flex items-center">
                <LucideMail className="mr-2 text-purple-400" /><a href="mailto:postit.assist@gmail.com ">postit.assist@gmail.com </a>
              </li>
              <li className="flex items-center">
                <LucideHome className="mr-2 text-purple-400" /> 49 Ibukun Olu Str, Lagos, Nigeria
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="mt-8 border-t border-gray-700 pt-8 flex justify-between items-center">
          <p className="text-gray-400">© {new Date().getFullYear()} PostIt AI. All Rights Reserved.</p>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <LucideFacebook className="text-purple-400 hover:text-purple-500 w-6 h-6" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <LucideX className="text-purple-400 hover:text-purple-500 w-6 h-6" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <LucideInstagram className="text-purple-400 hover:text-purple-500 w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
