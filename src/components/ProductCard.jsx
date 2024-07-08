import React from 'react'

const ProductCard = ({ products }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {products.map((product, index) => (
                <div key={index} className="max-w-xs rounded bg-white overflow-hidden shadow-lg">
                    <img className="w-full object-cover" src={product.image} alt={product.name} srcSet={`${product.image} 320w, ${product.image} 640w, ${product.image} 1280w`}
                        sizes="(max-width: 600px) 320px, (max-width: 1200px) 640px, 100vw" />
                    <div className="px-4 py-2">
                        <div className="font-bold text-lg mb-2">{product.name}</div>
                        <p className="text-gray-700 text-sm">
                            {product.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductCard;
