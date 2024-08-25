import React from "react";

const AboutSection = ({ setting }) => (
  <div
    data-aos="zoom-in"
    data-aos-duration="1000"
    className="bg-gradient-to-r from-blue-200 via-white to-blue-200 py-10"
    id="about"
  >
    <div className="container mx-auto px-4">
      <h1 className="bg-white py-2 text-3xl font-bold mb-8 text-center">
        Our Mission & Vision
      </h1>
      <div className="flex flex-wrap items-stretch justify-center">
        <div className="xl:w-1/2 lg:w-1/2 md:w-full bg-white p-8 mb-8 md:mb-0  flex justify-center items-center">
          <div className="max-w-lg mx-auto ">
            <p className="text-lg mb-8 leading-relaxed text-justify ">
              {setting.about_mission_vision}
            </p>
          </div>
        </div>
        <div className="xl:w-1/2 lg:w-1/2 md:w-full bg-white p-8">
          <div className="max-w-lg mx-auto">
            <div className="bg-cyan-200 shadow-lg rounded-xl p-6 mb-6 flex justify-between items-center transform transition duration-300 hover:scale-105">
              <div className="flex-1">
                <div className="flex items-center mb-2">
                  <span className="text-blue-500 mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 11c.8 0 1.5.2 2.1.6m-2.1-.6v-1m0 1c-.8 0-1.5-.2-2.1-.6m2.1.6V8m0 3v6m0 0v1m0-1c-.8 0-1.5-.2-2.1-.6m2.1.6h1m-1 0c.8 0 1.5-.2 2.1-.6m-2.1.6v1m0-1h-1m1 0V8m0 3v6m0-6c.8 0 1.5-.2 2.1-.6m-2.1.6h1m-1 0c-.8 0-1.5-.2-2.1-.6m2.1.6v1m0-1h-1m1 0v1"
                      />
                    </svg>
                  </span>
                  <h2 className="text-2xl font-semibold text-gray-800">
                    Mission
                  </h2>
                </div>
                <p className="text-gray-600 text-justify"  > {setting.mission}</p>
              </div>
            </div>
            <div className="bg-cyan-200 shadow-lg rounded-xl p-6 mb-6 flex justify-between items-center transform transition duration-300 hover:scale-105">
              <div className="flex-1">
                <div className="flex items-center mb-2">
                  <span className="text-blue-500 mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 11c.8 0 1.5.2 2.1.6m-2.1-.6v-1m0 1c-.8 0-1.5-.2-2.1-.6m2.1.6V8m0 3v6m0 0v1m0-1c-.8 0-1.5-.2-2.1-.6m2.1.6h1m-1 0c.8 0 1.5-.2 2.1-.6m-2.1.6v1m0-1h-1m1 0V8m0 3v6m0-6c.8 0 1.5-.2 2.1-.6m-2.1.6h1m-1 0c-.8 0-1.5-.2-2.1-.6m2.1.6v1m0-1h-1m1 0v1"
                      />
                    </svg>
                  </span>
                  <h2 className="text-2xl font-semibold text-gray-800">
                    Vision
                  </h2>
                </div>
                <p className="text-gray-600 text-justify"> {setting.vision}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AboutSection;
