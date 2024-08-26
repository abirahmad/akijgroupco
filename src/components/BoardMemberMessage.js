import React from "react";
import MessageSlider from "react-slick";

export default function BoardMemberMessage({ message }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div className="overflow-hidden">
      <section className="py-20 bg-gradient-to-r from-blue-200 via-white to-blue-200 overflow-hidden">
        <div className="container mx-auto overflow-hidden px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-800">
            Board Member Messages
          </h2>
          <MessageSlider {...settings}>
            {message.map((member, index) => (
              <div key={index} className="flex justify-center p-4 md:p-6">
                <div className="bg-white overflow-hidden rounded-lg shadow-xl overflow-hidden flex flex-col md:flex-row items-center text-left">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full md:w-[300px] lg:w-[400px] xl:w-[500px] 2xl:w-[550px] h-[300px] md:h-[450px] lg:h-[450px] xl:h-[550px] object-cover mx-4 my-4 rounded-lg"
                  />
                  <div className="p-4 md:p-6 flex flex-col items-center text-center md:text-left">
                    <h3 className="text-xl md:text-2xl font-bold mb-2 text-gray-800">
                      {member.name}
                    </h3>
                    <p className="text-gray-500 mb-4 italic">
                      {member.designation}
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      {member.message}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </MessageSlider>
        </div>
      </section>
    </div>
  );
}
