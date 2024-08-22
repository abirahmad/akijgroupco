"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function NewsAndEvent({ news }) {
  const handleGoToDetails = (id) => {
    window.location.href = "/news-events/" + id;
  };

  return (
    <div className="p-6 shadow-lg bg-gradient-to-r from-blue-200 via-white to-blue-200" id="newsEvents">
      <h1 className="text-center text-5xl font-bold text-gray-800">
        News & Media
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10">
        {news?.map((item, index) => (
          <div
            key={index}
            className="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden transform transition duration-500 hover:scale-105"
          >
            <img
              onClick={() => handleGoToDetails(item.id)}
              // className="w-full h-auto object-cover curd"
              className="w-full md:w-[300px] lg:w-[400px] xl:w-[500px] 2xl:w-[550px] h-[200px] md:h-[200px] lg:h-[200px] xl:h-[250px] object-cover p-2 rounded-lg"
              src={item.image}
              alt="News Event Image"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800">
                {item.title}
              </h2>
              <p className="mt-2 text-gray-600">{item.short_description}</p>
              <div className="mt-4">
                <span className="text-sm text-gray-600">{item.created_at}</span>
              </div>
            </div>
          </div>
        ))}

        {/* <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden transform transition duration-500 hover:scale-105">
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
        </div> */}
        {/* Repeat the above block for more news items */}
      </div>
    </div>
  );
}
