'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function Home() {

    const [filter, setFilter] = useState('*');

    const handleFilter = (category) => {
        setFilter(category);
    };

    const portfolioItems = [
        { id: 1, category: 'akijjute', title: 'Business City', image: '/jute1.jpg', description: 'Akij Jute' },
        { id: 2, category: 'akijjute', title: 'Business City', image: '/jute2.jpg', description: 'Akij Jute' },
        { id: 3, category: 'akijpipes', title: 'Blue Sea', image: '/pipes1.jpg', description: 'Akij Pipes' },
        { id: 4, category: 'akijpipes', title: 'Blue Sea', image: '/pipes2.jpg', description: 'Akij Pipes' },
        { id: 5, category: 'akijplastics', title: 'Beautiful Nature', image: '/plastic1.jpg', description: 'Akij Plastics' },
        { id: 6, category: 'akijplastics', title: 'Beautiful Nature', image: '/plastic2.jpg', description: 'Akij Plastics' },
    ];

    const filteredItems = filter === '*' ? portfolioItems : portfolioItems.filter(item => item.category.includes(filter));
    return (
        <>
            <div className="bg-gray-200 py-8">
                <div className="container mx-auto">
                    <div className="text-center mb-8">
                        <p className="text-2xl font-semibold underline">Our Management</p>
                    </div>
                    <ul className="flex flex-wrap justify-between">
                        <li className="w-full sm:w-1/2 md:w-1/4 p-4">
                            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                                <a href="#" className="block overflow-hidden">
                                    <Image src="/user2.webp" alt="A. Doe" width={300} height={300} className="w-full" />
                                </a>
                                <div className="p-4 text-center">
                                    <strong>A. Doe</strong>
                                    <em className="block text-gray-500">Job Title Here</em>
                                </div>
                            </div>
                        </li>
                        <li className="w-full sm:w-1/2 md:w-1/4 p-4">
                            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                                <a href="#" className="block overflow-hidden">
                                    <Image src="/user2.webp" alt="A. Doe" width={300} height={300} className="w-full" />
                                </a>
                                <div className="p-4 text-center">
                                    <strong>B. Doe</strong>
                                    <em className="block text-gray-500">Job Title Here</em>
                                </div>
                            </div>
                        </li>
                        <li className="w-full sm:w-1/2 md:w-1/4 p-4">
                            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                                <a href="#" className="block overflow-hidden">
                                    <Image src="/user2.webp" alt="A. Doe" width={300} height={300} className="w-full" />
                                </a>
                                <div className="p-4 text-center">
                                    <strong>C. Doe</strong>
                                    <em className="block text-gray-500">Job Title Here</em>
                                </div>
                            </div>
                        </li>
                        <li className="w-full sm:w-1/2 md:w-1/4 p-4">
                            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                                <a href="#" className="block overflow-hidden">
                                    <Image src="/user2.webp" alt="A. Doe" width={300} height={300} className="w-full" />
                                </a>
                                <div className="p-4 text-center">
                                    <strong>D. Doe</strong>
                                    <em className="block text-gray-500">Job Title Here</em>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Portfolio */}
            <div id="portfolio" className="bg-gray-100 py-12">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-semibold">Our Portfolio</h2>
                    </div>
                    <div className="flex justify-center mb-8">
                        <ul className="flex space-x-4">
                            <li>
                                <button
                                    className={`px-4 py-2 rounded-full transition-colors duration-300 ${filter === '*' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-blue-500 hover:bg-blue-500 hover:text-white'
                                        }`}
                                    onClick={() => handleFilter('*')}
                                >
                                    All
                                </button>
                            </li>
                            <li>
                                <button
                                    className={`px-4 py-2 rounded-full transition-colors duration-300 ${filter === 'akijjute' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-blue-500 hover:bg-blue-500 hover:text-white'
                                        }`}
                                    onClick={() => handleFilter('akijjute')}
                                >
                                    Akij Jute
                                </button>
                            </li>
                            <li>
                                <button
                                    className={`px-4 py-2 rounded-full transition-colors duration-300 ${filter === 'akijplastics' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-blue-500 hover:bg-blue-500 hover:text-white'
                                        }`}
                                    onClick={() => handleFilter('akijplastics')}
                                >
                                    Akij Plastics
                                </button>
                            </li>
                            <li>
                                <button
                                    className={`px-4 py-2 rounded-full transition-colors duration-300 ${filter === 'akijpipes' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-blue-500 hover:bg-blue-500 hover:text-white'
                                        }`}
                                    onClick={() => handleFilter('akijpipes')}
                                >
                                    Akij Pipes
                                </button>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-wrap -mx-4">
                        {filteredItems.map(item => (
                            <div key={item.id} className={`w-full sm:w-1/2 md:w-1/4 p-4 ${item.category}`}>
                                <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                                    <div className="relative overflow-hidden pb-[100%]"> {/* 1:1 Aspect Ratio */}
                                        <a href="#">
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                layout="fill"
                                                objectFit="cover"
                                                className="absolute inset-0 w-full h-full"
                                            />
                                        </a>
                                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                                            <div className="text-center text-white">
                                                <a className="venobox" data-gall="myGallery" href={item.image}>
                                                    <h4>{item.title}</h4>
                                                    <span>{item.description}</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <section className="recent-posts py-8 bg-blue-100">
                <div className="container mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-semibold">About Our Units</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Post 1 */}
                        <div className="p-6 bg-white rounded-lg shadow-md flex flex-col md:flex-row md:items-center">
                            <div className="md:w-1/3 mb-4 md:mb-0">
                                <img className="w-full h-auto rounded-lg shadow-lg" src="/company1.png" alt="Post 1" />
                            </div>
                            <div className="md:w-2/3 md:pl-6">
                                <time className="block text-gray-500 mb-2" dateTime="2019-04-06T13:53">15 Oct, 2019</time>
                                <h3 className="text-xl font-semibold mb-2"><a href="#" className="hover:text-blue-500">Proudly for us to build stylish</a></h3>
                                <p className="text-gray-700 mb-4">
                                    <a href="#" className="hover:text-blue-500">Seanding</a>,
                                    <a href="#" className="hover:text-blue-500">Website</a>,
                                    <a href="#" className="hover:text-blue-500">E-commerce</a>
                                </p>
                                <a href="#" className="btn btn-primary bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300">
                                    Read More <i className="fa fa-arrow-right ml-2"></i>
                                </a>
                            </div>
                        </div>

                        {/* Post 2 */}
                        <div className="p-6 bg-white rounded-lg shadow-md flex flex-col md:flex-row md:items-center">
                            <div className="md:w-1/3 mb-4 md:mb-0">
                                <img className="w-full h-auto rounded-lg shadow-lg" src="/company2.png" alt="Post 2" />
                            </div>
                            <div className="md:w-2/3 md:pl-6">
                                <time className="block text-gray-500 mb-2" dateTime="2019-04-06T13:53">15 Oct, 2019</time>
                                <h3 className="text-xl font-semibold mb-2"><a href="#" className="hover:text-blue-500">Remind me to water the plants</a></h3>
                                <p className="text-gray-700 mb-4">
                                    <a href="#" className="hover:text-blue-500">Seanding</a>,
                                    <a href="#" className="hover:text-blue-500">Website</a>,
                                    <a href="#" className="hover:text-blue-500">E-commerce</a>
                                </p>
                                <a href="#" className="btn btn-primary bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300">
                                    Read More <i className="fa fa-arrow-right ml-2"></i>
                                </a>
                            </div>
                        </div>

                        {/* Post 3 */}
                        <div className="p-6 bg-white rounded-lg shadow-md flex flex-col md:flex-row md:items-center">
                            <div className="md:w-1/3 mb-4 md:mb-0">
                                <img className="w-full h-auto rounded-lg shadow-lg" src="/company3.png" alt="Post 3" />
                            </div>
                            <div className="md:w-2/3 md:pl-6">
                                <time className="block text-gray-500 mb-2" dateTime="2019-04-06T13:53">15 Oct, 2019</time>
                                <h3 className="text-xl font-semibold mb-2"><a href="#" className="hover:text-blue-500">Add apples to the grocery list</a></h3>
                                <p className="text-gray-700 mb-4">
                                    <a href="#" className="hover:text-blue-500">Seanding</a>,
                                    <a href="#" className="hover:text-blue-500">Website</a>,
                                    <a href="#" className="hover:text-blue-500">E-commerce</a>
                                </p>
                                <a href="#" className="btn btn-primary bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300">
                                    Read More <i className="fa fa-arrow-right ml-2"></i>
                                </a>
                            </div>
                        </div>

                        {/* Post 4 */}
                        <div className="p-6 bg-white rounded-lg shadow-md flex flex-col md:flex-row md:items-center">
                            <div className="md:w-1/3 mb-4 md:mb-0">
                                <img className="w-full h-auto rounded-lg shadow-lg" src="/company4.png" alt="Post 4" />
                            </div>
                            <div className="md:w-2/3 md:pl-6">
                                <time className="block text-gray-500 mb-2" dateTime="2019-04-06T13:53">15 Oct, 2019</time>
                                <h3 className="text-xl font-semibold mb-2"><a href="#" className="hover:text-blue-500">Make it warmer downstairs</a></h3>
                                <p className="text-gray-700 mb-4">
                                    <a href="#" className="hover:text-blue-500">Seanding</a>,
                                    <a href="#" className="hover:text-blue-500">Website</a>,
                                    <a href="#" className="hover:text-blue-500">E-commerce</a>
                                </p>
                                <a href="#" className="btn btn-primary bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300">
                                    Read More <i className="fa fa-arrow-right ml-2"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* See More Button */}
                    <div className="text-center mt-8">
                        <a href="#" className="btn btn-primary bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300">
                            See More <i className="fa fa-arrow-right ml-2"></i>
                        </a>
                    </div>
                </div>
            </section>
        </>

    )
}
