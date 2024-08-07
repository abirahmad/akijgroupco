import React from 'react';
import ProductCard from '../../components/ProductCard';

export default function Brands() {
    const brands = [
        {
            name: 'Our Companies',
            products: [
                { name: 'Akij Jute', description: 'Durable Fire Products', image: '/Group Logo-7.png' },
                { name: 'Akij Plastics', description: 'Reusable plastic bottle.', image: '/Group Logo-4.png' },
                { name: 'Akij Pipes', description: 'Quality Plumbing.', image: '/Group Logo-5.png' },
            ]
        }
    ];

    return (
        <div className="px-4 py-4 bg-gradient-to-r from-blue-200 via-white to-blue-200">
            <h1 className="text-4xl font-bold text-center my-4">Our Brands</h1>
            <h2 className="text-2xl text-center my-4">Quality Uncompromised</h2>
            <div className="container mx-auto flex flex-wrap justify-center gap-8">
                <div className="max-w-sm sm:max-w-md lg:max-w-lg rounded bg-indigo-100 overflow-hidden shadow-lg mx-2 my-2 rounded-lg">
                    <div className="px-4 text-center">
                        <h1 className="font-bold text-2xl">Plastic Products</h1>
                    </div>
                    <img className="w-full h-60 sm:h-80 object-cover mt-4" src='/plastic3.jpg' alt='Plastic Products'
                        srcSet={`/plastic3.jpg 320w, /plastic3.jpg 640w, /plastic3.jpg 1280w`}
                        sizes="(max-width: 600px) 320px, (max-width: 1200px) 640px, 100vw" />
                </div>
                <div className="max-w-sm sm:max-w-md lg:max-w-lg rounded bg-indigo-100 overflow-hidden shadow-lg mx-2 my-2 rounded-lg">
                    <div className="px-4 text-center">
                        <h1 className="font-bold text-2xl">Jute Products</h1>
                    </div>
                    <img className="w-full h-60 sm:h-80 object-cover mt-4" src='/jute3.jpg' alt='Jute Products'
                        srcSet={`/jute3.jpg 320w, /jute3.jpg 640w, /jute3.jpg 1280w`}
                        sizes="(max-width: 600px) 320px, (max-width: 1200px) 640px, 100vw" />
                </div>
                <div className="max-w-sm sm:max-w-md lg:max-w-lg rounded bg-indigo-100 overflow-hidden shadow-lg mx-2 my-2 rounded-lg">
                    <div className="px-4 text-center">
                        <h1 className="font-bold text-2xl">Plastic Pipes</h1>
                    </div>
                    <img className="w-full h-60 sm:h-80 object-cover mt-4" src='/pipe3.jpg' alt='Plastic Pipes'
                        srcSet={`/pipe3.jpg 320w, /pipe3.jpg 640w, /pipe3.jpg 1280w`}
                        sizes="(max-width: 600px) 320px, (max-width: 1200px) 640px, 100vw" />
                </div>
            </div>
            <div className="container mx-auto px-4 py-4">
                {brands.map((brand, index) => (
                    <div key={index} className="w-full max-w-4xl mx-auto mb-4">
                        <div className="flex justify-center">
                            <ProductCard products={brand.products} />
                        </div>
                    </div>
                ))}
            </div>
        </div>


    );
}

