"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaFacebook, FaTwitter, FaGoogle, FaPinterest } from "react-icons/fa";

const Footer = ({setting}) => {

 
  return (
    <footer>
      <div className="bg-gray-700 text-gray-400 rounded-2xl shadow-2xl">
        <div className="container mx-auto py-8">
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/3 px-4 mb-6 md:mb-0">
              <div>
                <h2 className="text-white text-2xl font-bold">
                  <span className="text-blue-700">Akij</span>Group
                </h2>
                <p className="mt-4">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis.
                </p>
                <div className="flex space-x-4 mt-4">
                  <a
                    target="_blank"
                    href={setting.facebook}
                    className="text-white"
                  >
                    <FaFacebook size={24} />
                  </a>
                  <a
                    target="_blank"
                    href={setting.twitter}
                    className="text-white"
                  >
                    <FaTwitter size={24} />
                  </a>
                  <a
                    target="_blank"
                    href={setting.youtube}
                    className="text-white"
                  >
                    <FaGoogle size={24} />
                  </a>
                  <a href="#" className="text-white">
                    <FaPinterest size={24} />
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-6 md:mb-0">
              <div>
                <h4 className="text-white text-xl font-semibold">
                  Information
                </h4>
                <p className="mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor.
                </p>
                <div className="mt-4">
                  <p>
                    <span className="font-bold">Tel:</span>{" "}
                    {setting.primary_phone}
                  </p>
                  <p>
                    <span className="font-bold">Email:</span>{" "}
                    {setting.primary_email}
                  </p>
                  <p>
                    <span className="font-bold">Working Hours:</span>{" "}
                    {setting.office_hours}
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-6 md:mb-0">
              <div>
                <h4 className="text-white text-xl font-semibold">Instagram</h4>
                <div className="flex flex-wrap mt-4">
                  <a href="#" className="w-1/3 p-1">
                    <img
                      src="/img/portfolio/1.jpg"
                      alt=""
                      className="w-full h-auto"
                    />
                  </a>
                  <a href="#" className="w-1/3 p-1">
                    <img
                      src="/img/portfolio/2.jpg"
                      alt=""
                      className="w-full h-auto"
                    />
                  </a>
                  <a href="#" className="w-1/3 p-1">
                    <img
                      src="/img/portfolio/3.jpg"
                      alt=""
                      className="w-full h-auto"
                    />
                  </a>
                  <a href="#" className="w-1/3 p-1">
                    <img
                      src="/img/portfolio/4.jpg"
                      alt=""
                      className="w-full h-auto"
                    />
                  </a>
                  <a href="#" className="w-1/3 p-1">
                    <img
                      src="/img/portfolio/5.jpg"
                      alt=""
                      className="w-full h-auto"
                    />
                  </a>
                  <a href="#" className="w-1/3 p-1">
                    <img
                      src="/img/portfolio/6.jpg"
                      alt=""
                      className="w-full h-auto"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-900 py-4">
          <div className="container mx-auto text-center">
            <p className="text-gray-500">
              &copy; Copyright <strong>Akij Group</strong>. All Rights Reserved
            </p>
            <p className="text-gray-500 mt-2">
              Designed by{" "}
              <a
                href="https://www.akijgroup.co/"
                target="__blank"
                className="text-indigo-500"
              >
                Akij Group Software Team
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
