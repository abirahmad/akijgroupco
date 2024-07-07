import React from 'react';

const AboutSection = () => (
    <>
        <section className="bg-gray-100 py-10">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap items-center">
                    <div className="xl:w-1/2 lg:w-2/3 md:w-full bg-white rounded-lg shadow-lg p-8">
                        <div className="max-w-lg">
                            <h6 className="text-primary text-xs md:text-sm uppercase tracking-wider mb-2">About Mission</h6>
                            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">A Rich Featured, Epic & Premium Work</h1>
                            <p className="text-lg mb-8 leading-relaxed">Suspendisse facilisis commodo lobortis. Nullam mollis lobortis ex vel faucibus. Proin nec viverra turpis. Nulla eget justo scelerisque, pretium purus vel, congue libero. Suspendisse potenti.</p>
                            <h5 className="text-xl font-semibold mb-4">Services Offered</h5>
                            <ul className="list-disc list-inside mb-8">
                                <li className="mb-2">Web Content</li>
                                <li className="mb-2">Website Other</li>
                                <li className="mb-2">Fashion</li>
                                <li className="mb-2">Mobile & Tablet</li>
                            </ul>
                        </div>
                    </div>
                    <div className="xl:w-1/2 lg:w-1/3 md:w-full mt-8 lg:mt-0">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="relative overflow-hidden rounded-lg shadow-md group">
                                <Image className="w-full h-auto transform scale-100 group-hover:scale-105 transition duration-300" src="/post1.jpg" alt="Gallery Image" />
                                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300">
                                    <i className="text-white fa fa-caret-right text-3xl"></i>
                                </div>
                            </div>
                            <div className="relative overflow-hidden rounded-lg shadow-md group">
                                <Image className="w-full h-auto transform scale-100 group-hover:scale-105 transition duration-300" src="/post2.jpg" alt="Gallery Image" />
                                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300">
                                    <i className="text-white fa fa-caret-right text-3xl"></i>
                                </div>
                            </div>
                            <div className="relative overflow-hidden rounded-lg shadow-md group">
                                <Image className="w-full h-auto transform scale-100 group-hover:scale-105 transition duration-300" src="/post3.jpg" alt="Gallery Image" />
                                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300">
                                    <i className="text-white fa fa-caret-right text-3xl"></i>
                                </div>
                            </div>
                            <div className="relative overflow-hidden rounded-lg shadow-md group">
                                <Image className="w-full h-auto transform scale-100 group-hover:scale-105 transition duration-300" src="/post4.jpg" alt="Gallery Image" />
                                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300">
                                    <i className="text-white fa fa-caret-right text-3xl"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="bg-gray-100 py-16">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap items-center">
                    <div className="xl:w-1/2 lg:w-1/3 md:w-full mt-8 lg:mt-0">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="relative overflow-hidden rounded-lg shadow-md group">
                                <img className="w-full h-auto transform scale-100 group-hover:scale-105 transition duration-300" src="/post1.jpg" alt="Gallery Image" />
                                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300">
                                    <i className="text-white fa fa-caret-right text-3xl"></i>
                                </div>
                            </div>
                            <div className="relative overflow-hidden rounded-lg shadow-md group">
                                <img className="w-full h-auto transform scale-100 group-hover:scale-105 transition duration-300" src="/post2.jpg" alt="Gallery Image" />
                                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300">
                                    <i className="text-white fa fa-caret-right text-3xl"></i>
                                </div>
                            </div>
                            <div className="relative overflow-hidden rounded-lg shadow-md group">
                                <img className="w-full h-auto transform scale-100 group-hover:scale-105 transition duration-300" src="/post3.jpg" alt="Gallery Image" />
                                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300">
                                    <i className="text-white fa fa-caret-right text-3xl"></i>
                                </div>
                            </div>
                            <div className="relative overflow-hidden rounded-lg shadow-md group">
                                <img className="w-full h-auto transform scale-100 group-hover:scale-105 transition duration-300" src="/post4.jpg" alt="Gallery Image" />
                                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300">
                                    <i className="text-white fa fa-caret-right text-3xl"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xl:w-1/2 lg:w-2/3 md:w-full bg-white rounded-lg shadow-lg p-8">
                        <div className="max-w-lg">
                            <h6 className="text-primary text-xs md:text-sm uppercase tracking-wider mb-2">About Mission</h6>
                            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">A Rich Featured, Epic & Premium Work</h1>
                            <p className="text-lg mb-8 leading-relaxed">Suspendisse facilisis commodo lobortis. Nullam mollis lobortis ex vel faucibus. Proin nec viverra turpis. Nulla eget justo scelerisque, pretium purus vel, congue libero. Suspendisse potenti.</p>
                            <h5 className="text-xl font-semibold mb-4">Services Offered</h5>
                            <ul className="list-disc list-inside mb-8">
                                <li className="mb-2">Web Content</li>
                                <li className="mb-2">Website Other</li>
                                <li className="mb-2">Fashion</li>
                                <li className="mb-2">Mobile & Tablet</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>

);

export default AboutSection;
