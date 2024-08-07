"use client";
import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import {
  FaFacebook,
  FaTwitter,
  FaPhone,
  FaEnvelope,
  FaUser,
  FaGooglePlus,
} from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sticky top-0 z-50">
      {" "}
      <div className="hidden sm:flex justify-between items-center py-3 px-6 bg-gradient-to-r from-blue-400 to-indigo-200 text-grey-400 shadow-md">
        <div className="flex space-x-2">
          <a
            href="tel:+1234567890"
            className="flex items-center hover:text-yellow-300"
          >
            <FaPhone className="mr-2" />
            +1234567890
          </a>
          <a
            href="mailto:info@yourmail.com"
            className="flex items-center hover:text-yellow-300"
          >
            <FaEnvelope className="mr-2" />
            info@yourmail.com
          </a>
        </div>
        <nav className="flex items-center space-x-6">
          <a href="#" className="flex items-center hover:text-yellow-300">
            <FaUser className="mr-2" />
            Login
          </a>
          <ul className="hidden md:flex space-x-4">
            <li>
              <a
                href="https://www.facebook.com/fh5co"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-300"
              >
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-300">
                <FaGooglePlus />
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-300">
                <FaTwitter />
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <nav className="bg-gray-100 text-black">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/">
                <img src="/logo.png" alt="Logo" className="w-36" />
              </Link>
            </div>
            <div className="hidden md:flex md:items-center md:space-x-4">
              <Link
                href="/"
                className=" page-scroll text-gray-700 hover:text-white hover:bg-gradient-to-r from-blue-400 to-indigo-200 px-2 py-2 rounded-lg"
              >
                Home
              </Link>
              <Link
                href="/about"
                className=" page-scroll text-gray-700 hover:text-white hover:bg-gradient-to-r from-blue-400 to-indigo-200 px-2 py-2 rounded-lg"
              >
                About
              </Link>
              <Link
                href="/brands"
                className=" page-scroll text-gray-700 hover:text-white hover:bg-gradient-to-r from-blue-400 to-indigo-200 px-2 py-2 rounded-lg"
              >
                Brands
              </Link>
              <Link
                href="/news-events"
                className=" page-scroll text-gray-700 hover:text-white hover:bg-gradient-to-r from-blue-400 to-indigo-200 px-2 py-2 rounded-lg"
              >
                News Events
              </Link>
              <Link
                href="/career"
                className=" page-scroll text-gray-700 hover:text-white hover:bg-gradient-to-r from-blue-400 to-indigo-200 px-2 py-2 rounded-lg"
              >
                Career
              </Link>
              <Link
                href="/contact"
                className=" page-scroll text-gray-700 hover:text-white hover:bg-gradient-to-r from-blue-400 to-indigo-200 px-2 py-2 rounded-lg"
              >
                Contact
              </Link>
            
            </div>
            <div className="flex md:hidden">
              <button
                onClick={toggleMenu}
                className="text-black hover:text-black focus:outline-none focus:text-black"
              >
                {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
                href="/home"
                className="block "
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block "
              >
                About
              </Link>
              <Link
                href="/brands"
                className="block "
              >
                Brands
              </Link>
              <Link
                href="/news-events"
                className="block "
              >
                News Events
              </Link>
              <Link
                href="/career"
                className="block "
              >
                Career
              </Link>
              <Link
                href="/contact"
                className="block "
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
