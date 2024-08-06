import React from 'react';

const ListCard = ({ jobTitle, jobDescription, onViewClick }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 mb-6 flex flex-col md:flex-row justify-between items-center transform transition duration-300 hover:scale-105">
      <div className="flex-1 mb-4 md:mb-0">
        <div className="flex items-center mb-2">
          <span className="text-blue-500 mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c.8 0 1.5.2 2.1.6m-2.1-.6v-1m0 1c-.8 0-1.5-.2-2.1-.6m2.1.6V8m0 3v6m0 0v1m0-1c-.8 0-1.5-.2-2.1-.6m2.1.6h1m-1 0c.8 0 1.5-.2 2.1-.6m-2.1.6v1m0-1h-1m1 0V8m0 3v6m0-6c.8 0 1.5-.2 2.1-.6m-2.1.6h1m-1 0c-.8 0-1.5-.2-2.1-.6m2.1.6v1m0-1h-1m1 0v1" />
            </svg>
          </span>
          <h2 className="text-2xl  font-semibold text-gray-800">{jobTitle}</h2>
        </div>
        <p className="text-gray-600">{jobDescription}</p>
      </div>
      <button
        onClick={onViewClick}
        className="w-full md:w-auto ml-0 md:ml-4 px-5 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg shadow-md hover:from-blue-600 hover:to-indigo-600 transition duration-300 transform hover:scale-110"
      >
        Details
      </button>
    </div>
  );
};

export default ListCard;
