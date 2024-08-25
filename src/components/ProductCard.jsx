import React from 'react'

const ProductCard = ({ products }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {products.map((product, index) => (
                <div key={index} className="max-w-md rounded bg-white overflow-hidden hover:scale-110 transition ease-in-out delay-150 shadow-lg p-4">
                    <img className="w-[150px] object-cover " src={product.image} alt={product.name} srcSet={`${product.image} 320w, ${product.image} 640w, ${product.image} 1280w`}
                        sizes="(max-width: 600px) 320px, (max-width: 1200px) 640px, 100vw" />
                </div>
            ))}
        </div>


    );
};

export default ProductCard;
