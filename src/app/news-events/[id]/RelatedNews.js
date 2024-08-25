"use client";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
export default function RelatedNews() {
  const [relatedNews, setRelatedNews] = useState([]);
  useEffect(() => {
    getmembers();
  }, []);

  const getmembers = async () => {
    const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/news-media`;

    await axios
      .get(apiUrl)
      .then((res) => setRelatedNews(res.data))
      .catch((err) => console.log("err", err));
  };

  const handleGoToDetails = (id) => {
    window.location.href = "/news-events/" + id;
  };
  return (
    <div className="bg-white p-4 rounded-lg shadow-md md:col-span-4">
      <h3 className="text-2xl font-bold mb-4">Other News</h3>
      <ul>
        {relatedNews.map((item,i) => (
          <li key={i}  className="border-b border-gray-200 shadow-md p-2 mb-4" onClick={()=>handleGoToDetails(item.id)}>
            <img
              src={item.image}
              alt="Main News Image"
              className="w-full h-32 object-cover rounded-lg mb-4"
            />
            <p
          
              className="text-xl font-semibold text-blue-600 hover:underline"
            >
              {item.title}
            </p>
            <p className="text-gray-600 text-sm">
            {item.short_description}
            </p>
          </li>
        ))}
        
        {/* <li className="border-b border-gray-200 shadow-md p-2 mb-4">
          <img
            src="https://today.thefinancialexpress.com.bd/uploads/1510675443.jpg"
            alt="Main News Image"
            className="w-full h-32 object-cover rounded-lg mb-4"
          />
          <a
            href="link-to-news-1"
            className="text-xl font-semibold text-blue-600 hover:underline"
          >
            Other News Title 1
          </a>
          <p className="text-gray-600 text-sm">
            A brief description of other news article 1.
          </p>
        </li>
        <li className="border-b border-gray-200 shadow-md p-2 mb-4">
          <img
            src="https://today.thefinancialexpress.com.bd/uploads/1510675443.jpg"
            alt="Main News Image"
            className="w-full h-32 object-cover rounded-lg mb-4"
          />
          <a
            href="link-to-news-1"
            className="text-xl font-semibold text-blue-600 hover:underline"
          >
            Other News Title 1
          </a>
          <p className="text-gray-600 text-sm">
            A brief description of other news article 1.
          </p>
        </li> */}
      </ul>
    </div>
  );
}
