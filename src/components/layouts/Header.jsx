"use client";
import React, { useEffect, useState } from "react";
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

const Navbar = ({ setting }) => {
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
            href={`tel:${setting.primary_phone}`}
            className="flex items-center hover:text-white"
          >
            <FaPhone className="mr-2" />
            {setting.primary_phone}
          </a>
          <a
            href={`mailto:${setting.primary_email}`}
            className="flex items-center hover:text-white"
          >
            <FaEnvelope className="mr-2" />
            {setting.primary_email}
          </a>
        </div>
        <nav className="flex items-center space-x-6">
          <a href="#" className="flex items-center hover:text-white">
            <FaUser className="mr-2" />
            Login
          </a>
          <ul className="hidden md:flex space-x-4">
            <li>
              <a
                href={setting.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href={setting.youtube} className="hover:text-white">
                <FaGooglePlus />
              </a>
            </li>
            <li>
              <a href={setting.twitter} className="hover:text-white">
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
                {/* <img src="/logo.png" alt="Logo" className="w-36" /> */}
                <img src={setting.logo_url} alt="Logo" className="w-36" />
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
                href="#about"
                className=" page-scroll text-gray-700 hover:text-white hover:bg-gradient-to-r from-blue-400 to-indigo-200 px-2 py-2 rounded-lg"
              >
                About
              </Link>
              <Link
                href="#brands"
                className=" page-scroll text-gray-700 hover:text-white hover:bg-gradient-to-r from-blue-400 to-indigo-200 px-2 py-2 rounded-lg"
              >
                Brands
              </Link>
              <Link
                href="#newsEvents"
                className=" page-scroll text-gray-700 hover:text-white hover:bg-gradient-to-r from-blue-400 to-indigo-200 px-2 py-2 rounded-lg"
              >
                News Events
              </Link>
              <Link
                href="#career"
                className=" page-scroll text-gray-700 hover:text-white hover:bg-gradient-to-r from-blue-400 to-indigo-200 px-2 py-2 rounded-lg"
              >
                Career
              </Link>
              <Link
                href="#contact"
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
              <Link href="/home" className="block ">
                Home
              </Link>
              <Link href="/about" className="block ">
                About
              </Link>
              <Link href="/brands" className="block ">
                Brands
              </Link>
              <Link href="/news-events" className="block ">
                News Events
              </Link>
              <Link href="/career" className="block ">
                Career
              </Link>
              <Link href="/contact" className="block ">
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
