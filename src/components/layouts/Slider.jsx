'use client'; // This directive marks the component as a Client Component

import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';

const Carousel = () => {
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
        <div id="home" className="slider-area">
            <Slider {...settings}>
                <div className="relative">
                    <Image src="/slider1.jpg" alt="Slider 2" width={1920} height={800} />
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-50">
                        <h2 className="title1 md:text-sm lg:text-4xl font-bold text-white">The Best Business Information</h2>
                        <h1 className="title2 md:text-sm lg:text-5xl font-bold text-white">We're In The Business Of Helping You Start Your Business</h1>
                        <div className="flex justify-center mt-4">
                            <a className="ready-btn right-btn page-scroll mx-2 py-2 px-4 bg-blue-500 text-white rounded" href="#services">See Services</a>
                            <a className="ready-btn page-scroll mx-2 py-2 px-4 bg-gray-500 text-white rounded" href="#about">Learn More</a>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <Image src="/slider2.jpg" alt="Slider 2" width={1920} height={1080} />
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-50">
                        <h2 className="title1 md:text-sm lg:text-4xl font-bold text-white">The Best Business Information</h2>
                        <h1 className="title2 md:text-sm lg:text-4xl font-bold text-white">We're In The Business Of Helping You Start Your Business</h1>
                        <div className="flex justify-center mt-4">
                            <a className="ready-btn right-btn page-scroll mx-2 py-2 px-4 bg-blue-500 text-white rounded" href="#services">See Services</a>
                            <a className="ready-btn page-scroll mx-2 py-2 px-4 bg-gray-500 text-white rounded" href="#about">Learn More</a>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <Image src="/slider3.jpg" alt="Slider 3" width={1920} height={1080} />
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-50">
                        <h2 className="title1 md:text-sm lg:text-4xl font-bold text-white">The Best Business Information</h2>
                        <h1 className="title2 md:text-sm lg:text-4xl font-bold text-white">We're In The Business Of Helping You Start Your Business</h1>
                        <div className="flex justify-center mt-4">
                            <a className="ready-btn right-btn page-scroll mx-2 py-2 px-4 bg-blue-500 text-white rounded" href="#services">See Services</a>
                            <a className="ready-btn page-scroll mx-2 py-2 px-4 bg-gray-500 text-white rounded" href="#about">Learn More</a>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default Carousel;
