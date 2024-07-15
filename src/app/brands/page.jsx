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
                { name: 'Akij City', description: 'An Entertainment Center Of Akij Group.', image: '/Group Logo-6.png' },
                { name: 'Akij Match', description: 'An Entertainment Center Of Akij Group.', image: '/Group Logo-2.png' },
            ]
        }
    ];

    return (
        <div className="container mx-auto px-4 py-4">
            <h1 className="text-4xl font-bold text-center my-4">Our Brands</h1>
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

