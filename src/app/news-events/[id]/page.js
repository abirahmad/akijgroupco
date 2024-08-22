import React from "react";
import RelatedNews from "./RelatedNews";

export default async function Home({ params }) {
  const product = await fetchProducts(params.id);

  return (
    <>
      <div className="bg-gray-100 text-gray-800 w-full mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 mt-2 p-4">
        <div className="md:col-span-8">
          {/* Main News Article */}
          <article className="bg-white p-6 rounded-lg shadow-md mb-6">
            <img
              src={product.image}
              alt="Main News Image"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h2 className="text-3xl font-bold mb-2">{product.title}</h2>
            <p className="text-gray-600 mb-4 text-xs">
              by Author Name on 2024-07-02
            </p>
            <p className="leading-relaxed mb-4 text-sm">
              {product.short_description}
            </p>
            <span className="leading-relaxed text-sm text-justify">
              <div
                dangerouslySetInnerHTML={{ __html: product.long_description }}
              />
            </span>
          </article>
          {/* Other News List */}
        </div>

        <RelatedNews />
      </div>
    </>
  );
}

async function fetchProducts(productId) {
  // const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/product/${productId}`;
  const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/news-media/${productId}`;
  const productsResponse = await fetch(apiUrl);
  return productsResponse.json();
}

// Metadata fetching should be done within the Home function or a separate function, not globally
export async function generateMetadata({ params }) {
  const product = await fetchProducts(params.id);
  return {
    title: product.name,
    description: product.description,
  };
}
