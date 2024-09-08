import React from "react";
import ProductCard from "../../components/ProductCard";
import YearWiseAchievement from "../../components/YearWiseAchievement";

export default function Brands({ brands, logos }) {
  return (
    <div>
      <div
        className="px-5 py-6 bg-gradient-to-r from-blue-100 via-white to-blue-100"
        id="brands"
      
      >
        <h1 className="text-5xl font-extrabold text-center text-gray-800 mb-6">
          Our Brands
        </h1>
        <h2 className="text-xl text-center text-gray-600 mb-8">
          Quality Uncompromised
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-6 mx-auto max-w-6xl">
          {brands.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-40 object-contain"
                />
              </div>
              <div className="bg-blue-500 p-4 text-center">
                <h3 className="text-white text-lg font-semibold">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ProductCard logos={logos} />
      <div className="mt-4 bg-white">
        <div className="w-[80%] mx-auto">
          <div className="row pb-5 flex flex-wrap justify-center">
            <div className="lg:w-1/4 w-full mb-5 mt-5">
              <div className="text-center pt-3 pb-2 px-5 transform transition-transform duration-300 hover:scale-105 border border-transparent hover:border-blue-500 animate-grow">
                <img
                  className="mx-auto w-20 h-16" // Set the same width and height for all images
                  src="/icon/home.png"
                  alt="Achievement"
                />
                <p className="mt-3 mb-2 text-base">Since</p>
                <p className="text-3xl">1950</p>
              </div>
            </div>
            <div className="lg:w-1/4 w-full mb-5 mt-5">
              <div className="text-center pt-3 pb-2 transform transition-transform duration-300 hover:scale-105 border border-transparent hover:border-blue-500 animate-grow">
                <img
                  className="mx-auto w-20 h-16"
                  src="/icon/fact.png"
                  alt="Achievement"
                />
                <p className="mt-3 mb-2 text-base">Units</p>
                <p className="text-3xl">6</p>
              </div>
            </div>
            <div className="lg:w-1/4 w-full mb-5 mt-5">
              <div className="text-center pt-5 pb-1 transform transition-transform duration-300 hover:scale-105 border border-transparent hover:border-blue-500 animate-grow">
                <img
                  className="mx-auto w-20 h-16"
                  src="/icon/user.png"
                  alt="Achievement"
                />
                <p className="mt-3 mb-2 text-base">Employees</p>
                <p className="text-3xl">35053</p>
              </div>
            </div>
            <div className="lg:w-1/4 w-full mb-5 mt-5">
              <div className="text-center pt-5 pb-1 transform transition-transform duration-300 hover:scale-105 border border-transparent hover:border-blue-500 animate-grow">
                <img
                  className="mx-auto w-20 h-16"
                  src="/icon/achi.png"
                  alt="Achievement"
                />
                <p className="mt-3 mb-2 text-base">National Achievements</p>
                <p className="text-3xl">25</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
