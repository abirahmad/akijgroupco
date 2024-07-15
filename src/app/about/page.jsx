import React from 'react';

const AboutSection = () => (
    <>
        <section className="bg-gray-100 py-10">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap items-stretch justify-center">
                    <div className="xl:w-1/2 lg:w-1/2 md:w-full bg-white p-8 mb-8 md:mb-0">
                        <div className="max-w-lg mx-auto">
                            <h6 className="text-primary text-xs md:text-sm uppercase tracking-wider mb-2">Our Mission</h6>
                            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">Enhance Everyday Living Through Creativity</h1>
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
                            <h6 className="text-primary text-xs md:text-sm uppercase tracking-wider mb-2">Our Vision</h6>
                            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">To Becaome a Global Leader</h1>
                            <p className="text-lg mb-8 leading-relaxed">
                                At Akij Group, our vision is to become a global leader in the consumer products industry, renowned for our innovation, quality, and sustainability.
                                We aspire to set new standards in the manufacturing of plastic products, jute goods, plastic pipes, and matches, ensuring that our products not only meet but exceed the expectations of our customers.
                                We envision a future where our commitment to eco-friendly practices and cutting-edge technology drives positive change, contributing to a healthier planet and a better quality of life for all.
                                Through strategic growth and continuous advancement, we aim to inspire trust and loyalty among our customers, partners, and communities worldwide.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="bg-gray-100 py-8">
            <div className="container mx-auto px-4">
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
        </section>

    </>

);

export default AboutSection;
