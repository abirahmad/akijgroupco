import React from "react";

const logoCard = ({ logos }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
      {logos.map((logo, index) => (
        <div
          key={index}
          className="max-w-md rounded bg-white overflow-hidden hover:scale-110 transition ease-in-out delay-150 shadow-lg p-4"
        >
          <img
            className="w-[150px] object-cover "
            src={logo.image}
            alt={logo.name}
            srcSet={`${logo.image} 320w, ${logo.image} 640w, ${logo.image} 1280w`}
            sizes="(max-width: 600px) 320px, (max-width: 1200px) 640px, 100vw"
          />
        </div>
      ))}
    </div>
  );
};

export default logoCard;
