import React from 'react';

const ListCard = ({ jobTitle, jobDescription, onViewClick }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-4 flex justify-between items-center">
      <div className="flex-1">
        <h2 className="text-xl font-bold mb-2">{jobTitle}</h2>
        <p className="text-gray-700">{jobDescription}</p>
      </div>
      <button
        onClick={onViewClick}
        className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
      >
        View
      </button>
    </div>
  );
};

export default ListCard;
