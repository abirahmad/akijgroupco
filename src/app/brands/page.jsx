import React from 'react';
import ProductCard from '../../components/ProductCard';

export default function Brands() {
    const brands = [
        {
            name: 'Plastic Products',
            products: [
                { name: 'Plastic Bag', description: 'Durable plastic bag.', image: '/plastic1.jpg' },
                { name: 'Plastic Bottle', description: 'Reusable plastic bottle.', image: '/plastic2.jpg' },
                { name: 'Plastic Bottle', description: 'Reusable plastic bottle.', image: '/plastic3.jpg' },
                { name: 'Plastic Bottle', description: 'Reusable plastic bottle.', image: '/plastic4.jpg' },
            ]
        },
        {
            name: 'Jute Products',
            products: [
                { name: 'Jute Bag', description: 'Eco-friendly jute bag.', image: '/jute1.jpg' },
                { name: 'Jute Rope', description: 'Strong jute rope.', image: '/jute2.jpg' },
            ]
        },
        {
            name: 'Plastic Pipes',
            products: [
                { name: 'PVC Pipe', description: 'Durable PVC pipe.', image: '/pipes1.jpg' },
                { name: 'HDPE Pipe', description: 'High-density polyethylene pipe.', image: '/pipes2.jpg' },
            ]
        },
        {
            name: 'Matches',
            products: [
                { name: 'Safety Matches', description: 'Reliable safety matches.', image: '/match1.jpg' },
                { name: 'Wooden Matches', description: 'Traditional wooden matches.', image: '/match2.jpg' },
            ]
        }
    ];

    return (
        <div className="container mx-auto px-4 py-4">
            <h1 className="text-4xl font-bold text-center my-8">Our Brands and Products</h1>
            <div className="space-y-8">
                {brands.map((brand, index) => (
                    <div key={index} className="bg-gray-200 p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold mb-4">{brand.name}</h2>
                        <ProductCard products={brand.products} />
                    </div>
                ))}
            </div>
        </div>
    );
}

