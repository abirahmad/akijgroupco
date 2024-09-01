import React from "react";

const LogoCard = ({ logos }) => {
  return (
    <div className="bg-gradient-to-r from-blue-200 via-white to-blue-200 p-2">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 w-[80%] mx-auto mt-4  rounded-lg shadow-md">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="flex justify-center items-center p-3 bg-white rounded-md shadow-sm hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={logo.image}
              alt={`logo-${index}`}
              className="object-contain w-[100px] custom-img"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoCard;
