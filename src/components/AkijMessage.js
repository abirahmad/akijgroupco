import React from "react";

export default function AkijMessage({ setting }) {
  return (
    <div  data-aos="fade-up"
    data-aos-duration="2000"
      id="content"
      className="py-12 mb-4 bg-gray-100 shadow-lg bg-gradient-to-r from-blue-200 via-white to-blue-200"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap md:flex-nowrap">
          <div className="w-full md:w-1/2 md:mb-0 p-2" >
            <h2 className="text-3xl font-bold text-gray-800">
              Founder <strong>Message</strong>
            </h2>
            <p
             
              className="mt-4 text-gray-600 text-justify p-1 "
            >
              {setting.custom7}
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center items-center md:items-start">
            <div className="flex flex-col items-center md:items-end w-full px-2 mb-4">
              <img
                src="/akijuddin.jpg"
                alt="Founders Image"
                className="w-full rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
