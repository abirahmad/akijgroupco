"use client";
import { useState } from "react";
import {
  FaFacebook,
  FaTwitter,
  FaGoogle,
  FaPinterest,
  FaPhone,
  FaEnvelope,
  FaUser,
  FaGooglePlus,
} from "react-icons/fa";
import Link from "next/link";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 header-area">
      <div className="hidden sm:flex justify-between items-center py-3 px-6 bg-gradient-to-r from-blue-700 to-indigo-600 text-white shadow-md">
        <div className="flex space-x-6">
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

      <div id="sticker" className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex sm:justify-between sm:items-center">
          <div className="flex items-center">
            <button
              type="button"
              className="navbar-toggle block lg:hidden text-gray-500"
              onClick={() => setIsNavOpen(!isNavOpen)}
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="block w-6 h-1 bg-gray-600 mb-1"></span>
              <span className="block w-6 h-1 bg-gray-600 mb-1"></span>
              <span className="block w-6 h-1 bg-gray-600"></span>
            </button>
            <a
              className="navbar-brand page-scroll sticky-logo text-center"
              href="/"
            >
              <h1 className="text-2xl font-bold">
                <span className="text-blue-500">Akij</span>
                <span className="text-black">Group</span>
              </h1>
            </a>
          </div>
          <nav
            className={`navbar-collapse lg:flex ${isNavOpen ? "" : "hidden"}`}
          >
            <ul className="nav flex flex-col lg:flex-row items-center lg:space-x-4">
              <li className="active">
                <Link
                  className="page-scroll text-gray-700 hover:text-blue-500"
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="page-scroll text-gray-700 hover:text-blue-500"
                  href="/about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="page-scroll text-gray-700 hover:text-blue-500"
                  href="/brands"
                >
                  Brands
                </Link>
              </li>
              <li>
                <Link
                  className="page-scroll text-gray-700 hover:text-blue-500"
                  href="/news-events"
                >
                  News & Event
                </Link>
              </li>
              <li className="relative">
                <ul
                  className={`dropdown-menu absolute bg-white shadow-lg z-50 ${
                    isDropdownOpen ? "" : "hidden"
                  }`}
                >
                  <li>
                    <Link
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      href="https://www.akijjute.com/"
                      target="__blank"
                    >
                      Akij Jute
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      href="https://www.akijplastics.com/"
                      target="__blank"
                    >
                      Akij Plastics
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      href="https://www.akijpipes.com/"
                      target="__blank"
                    >
                      Akij Pipes
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      href="https://www.akijmatch.com/"
                      target="__blank"
                    >
                      Akij Match
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link
                  className="page-scroll text-gray-700 hover:text-blue-500"
                  href="/contact"
                >
                  Career
                </Link>
              </li>
              <li>
                <Link
                  className="page-scroll text-gray-700 hover:text-blue-500"
                  href="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
