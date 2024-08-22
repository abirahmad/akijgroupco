"use client";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import Slider from "react-slick";

const Carousel = ({banner}) => {


;
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
    <div id="home" className="slider-area overflow-hidden">
      <Slider {...settings}>
        {banner.map((item,i) => (
          <div key={i}  className="relative">
            {/* <Image src="/slider1.jpg" alt="Slider 2" width={1920} height={800} className="w-full h-full" /> */}
            <img
              className="w-full h-auto transform scale-100 group-hover:scale-105 transition duration-300"
              src={item.image}
              alt={item.slug}
              loading="lazy"
              srcSet={item.image}
              sizes="(max-width: 600px) 320px, (max-width: 1200px) 640px, 1280px"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-50">
              {/* <h2 className="title1 md:text-sm lg:text-4xl font-bold text-white">
                {item.description}
              </h2> */}
              <h1 className="title2 md:text-sm lg:text-5xl font-bold text-white">
                        {item.title}
                        {/* <div dangerouslySetInnerHTML={{ __html: item.description }} /> */}

              </h1>
              <div className="flex justify-center mt-4">
                <a
                  className="ready-btn right-btn page-scroll mx-2 py-2 px-4 bg-blue-500 text-white rounded"
                  href="#services"
                >
                  See Services
                </a>
                <a
                  className="ready-btn page-scroll mx-2 py-2 px-4 bg-gray-500 text-white rounded"
                  href="#about"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        ))}
      
      </Slider>
    </div>
  );
};

export default Carousel;
