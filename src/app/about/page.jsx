import React from 'react';

const AboutSection = () => (
    <>
        <section className="bg-gradient-to-r from-blue-200 via-white to-blue-200 py-10">
            <div className="container mx-auto px-4">
                <h1 className="bg-white py-2 text-3xl font-bold mb-8 text-center">Our Mission & Vision</h1>
                <div className="flex flex-wrap items-stretch justify-center">
                    <div className="xl:w-1/2 lg:w-1/2 md:w-full bg-white p-8 mb-8 md:mb-0">
                        <div className="max-w-lg mx-auto">
                            <p className="text-lg mb-8 leading-relaxed">
                                At Akij Group, our mission is to enhance everyday living through the creation of high-quality, sustainable consumer products.
                                We specialize in the manufacturing of plastic products, jute goods, plastic pipes, and matches, striving to blend innovation with environmental responsibility.
                                Our commitment is to deliver exceptional value to our customers while fostering a culture of integrity, sustainability, and community engagement.
                                Through continuous improvement and dedication to excellence, we aim to be a trusted leader in the consumer products industry.
                            </p>
                        </div>
                    </div>
                    <div className="xl:w-1/2 lg:w-1/2 md:w-full bg-white p-8">
                        <div className="max-w-lg mx-auto">
                            <div className="bg-cyan-200 shadow-lg rounded-xl p-6 mb-6 flex justify-between items-center transform transition duration-300 hover:scale-105">
                                <div className="flex-1">
                                    <div className="flex items-center mb-2">
                                        <span className="text-blue-500 mr-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c.8 0 1.5.2 2.1.6m-2.1-.6v-1m0 1c-.8 0-1.5-.2-2.1-.6m2.1.6V8m0 3v6m0 0v1m0-1c-.8 0-1.5-.2-2.1-.6m2.1.6h1m-1 0c.8 0 1.5-.2 2.1-.6m-2.1.6v1m0-1h-1m1 0V8m0 3v6m0-6c.8 0 1.5-.2 2.1-.6m-2.1.6h1m-1 0c-.8 0-1.5-.2-2.1-.6m2.1.6v1m0-1h-1m1 0v1" />
                                            </svg>
                                        </span>
                                        <h2 className="text-2xl font-semibold text-gray-800">Mission</h2>
                                    </div>
                                    <p className="text-gray-600"> At Akij Group, our vision is to become a global leader in the consumer products industry, renowned for our innovation, quality, and sustainability.</p>
                                </div>
                            </div>
                            <div className="bg-cyan-200 shadow-lg rounded-xl p-6 mb-6 flex justify-between items-center transform transition duration-300 hover:scale-105">
                                <div className="flex-1">
                                    <div className="flex items-center mb-2">
                                        <span className="text-blue-500 mr-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c.8 0 1.5.2 2.1.6m-2.1-.6v-1m0 1c-.8 0-1.5-.2-2.1-.6m2.1.6V8m0 3v6m0 0v1m0-1c-.8 0-1.5-.2-2.1-.6m2.1.6h1m-1 0c.8 0 1.5-.2 2.1-.6m-2.1.6v1m0-1h-1m1 0V8m0 3v6m0-6c.8 0 1.5-.2 2.1-.6m-2.1.6h1m-1 0c-.8 0-1.5-.2-2.1-.6m2.1.6v1m0-1h-1m1 0v1" />
                                            </svg>
                                        </span>
                                        <h2 className="text-2xl font-semibold text-gray-800">Vision</h2>
                                    </div>
                                    <p className="text-gray-600"> At Akij Group, our vision is to become a global leader in the consumer products industry, renowned for our innovation, quality, and sustainability.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <section className="bg-gradient-to-r from-blue-200 via-white to-blue-200 py-8">
            <div className="container mx-auto px-4">
                <h1 className="bg-white py-2 text-3xl font-bold mb-8 text-center">Gallery</h1>
                <div className="flex flex-wrap justify-center">
                    <div className="w-full">
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                            <div className="relative overflow-hidden rounded-lg shadow-md group">
                                <img className="w-full h-auto transform scale-100 group-hover:scale-105 transition duration-300" src="/post1.jpg" alt="Gallery Image 1" loading="lazy" />
                                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300">
                                    <i className="text-white fa fa-caret-right text-3xl"></i>
                                </div>
                            </div>
                            <div className="relative overflow-hidden rounded-lg shadow-md group">
                                <img className="w-full h-auto transform scale-100 group-hover:scale-105 transition duration-300" src="/post2.jpg" alt="Gallery Image 2" loading="lazy" />
                                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300">
                                    <i className="text-white fa fa-caret-right text-3xl"></i>
                                </div>
                            </div>
                            <div className="relative overflow-hidden rounded-lg shadow-md group">
                                <img className="w-full h-auto transform scale-100 group-hover:scale-105 transition duration-300" src="/post3.jpg" alt="Gallery Image 3" loading="lazy" />
                                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300">
                                    <i className="text-white fa fa-caret-right text-3xl"></i>
                                </div>
                            </div>
                            <div className="relative overflow-hidden rounded-lg shadow-md group">
                                <img className="w-full h-auto transform scale-100 group-hover:scale-105 transition duration-300" src="/post4.jpg" alt="Gallery Image 4" loading="lazy" />
                                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300">
                                    <i className="text-white fa fa-caret-right text-3xl"></i>
                                </div>
                            </div>

                            <div className="relative overflow-hidden rounded-lg shadow-md group">
                                <img className="w-full h-auto transform scale-100 group-hover:scale-105 transition duration-300" src="/post4.jpg" alt="Gallery Image 4" loading="lazy" />
                                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300">
                                    <i className="text-white fa fa-caret-right text-3xl"></i>
                                </div>
                            </div>

                            <div className="relative overflow-hidden rounded-lg shadow-md group">
                                <img className="w-full h-auto transform scale-100 group-hover:scale-105 transition duration-300" src="/post4.jpg" alt="Gallery Image 4" loading="lazy" />
                                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300">
                                    <i className="text-white fa fa-caret-right text-3xl"></i>
                                </div>
                            </div>
                            <div className="relative overflow-hidden rounded-lg shadow-md group">
                                <img className="w-full h-auto transform scale-100 group-hover:scale-105 transition duration-300" src="/post4.jpg" alt="Gallery Image 4" loading="lazy" />
                                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300">
                                    <i className="text-white fa fa-caret-right text-3xl"></i>
                                </div>
                            </div>
                            <div className="relative overflow-hidden rounded-lg shadow-md group">
                                <img className="w-full h-auto transform scale-100 group-hover:scale-105 transition duration-300" src="/post4.jpg" alt="Gallery Image 4" loading="lazy" />
                                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300">
                                    <i className="text-white fa fa-caret-right text-3xl"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> */}

    </>

);

export default AboutSection;
