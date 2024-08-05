"use client";
import React from "react";

export default function NewsAndEvent() {
  const handleGoToDetails = () => {
    window.location.href = "/news-events/1";
  };
  return (
    <div className="p-6 shadow-lg bg-gradient-to-r from-blue-200 via-white to-blue-200">
      <h1 className="text-center text-5xl font-bold text-gray-800">
        News & Medial
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10">
        <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden transform transition duration-500 hover:scale-105">
          <img
            onClick={() => handleGoToDetails()}
            className="w-full h-auto object-cover curd"
            src="https://today.thefinancialexpress.com.bd/uploads/1510675443.jpg"
            alt="News Event Image"
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800">
              News Event Title
            </h2>
            <p className="mt-2 text-gray-600">
              This is a short description of the news event.
            </p>
            <div className="mt-4">
              <span className="text-sm text-gray-600">
                Published on: July 8, 2024
              </span>
            </div>
          </div>
        </div>
        <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden transform transition duration-500 hover:scale-105">
          <img
            onClick={() => handleGoToDetails()}
            className="w-full h-48 object-cover"
            src="https://today.thefinancialexpress.com.bd/uploads/1510675443.jpg"
            alt="News Event Image"
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800">
              News Event Title
            </h2>
            <p className="mt-2 text-gray-600">
              This is a short description of the news event.
            </p>
            <div className="mt-4">
              <span className="text-sm text-gray-600">
                Published on: July 8, 2024
              </span>
            </div>
          </div>
        </div>
        <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden transform transition duration-500 hover:scale-105">
          <img
            onClick={() => handleGoToDetails()}
            className="w-full h-48 object-cover"
            src="https://today.thefinancialexpress.com.bd/uploads/1510675443.jpg"
            alt="News Event Image"
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800">
              News Event Title
            </h2>
            <p className="mt-2 text-gray-600">
              This is a short description of the news event.
            </p>
            <div className="mt-4">
              <span className="text-sm text-gray-600">
                Published on: July 8, 2024
              </span>
            </div>
          </div>
        </div>
        <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden transform transition duration-500 hover:scale-105">
          <img
            onClick={() => handleGoToDetails()}
            className="w-full h-48 object-cover"
            src="https://today.thefinancialexpress.com.bd/uploads/1510675443.jpg"
            alt="News Event Image"
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800">
              News Event Title
            </h2>
            <p className="mt-2 text-gray-600">
              This is a short description of the news event.
            </p>
            <div className="mt-4">
              <span className="text-sm text-gray-600">
                Published on: July 8, 2024
              </span>
            </div>
          </div>
        </div>
        {/* Repeat the above block for more news items */}
      </div>
    </div>
  );
}
