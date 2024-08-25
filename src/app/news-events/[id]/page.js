import React from "react";
import RelatedNews from "./RelatedNews";

export default async function Home({ params }) {
  const product = await fetchProducts(params.id);
  console.log('product', product)

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
              by {product.author} on {new Date(product.created_at).toLocaleDateString()}
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
const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/news-media/${productId}`;
  console.log('apiUrl :>> ', apiUrl);
  const productsResponse = await fetch(apiUrl);

  // Check if the response is OK (status 200)
  if (!productsResponse.ok) {
    console.error(`Failed to fetch product: ${productsResponse.statusText}`);
    return null; // Handle this appropriately in your component
  }

  // Log the response for debugging
  const responseText = await productsResponse.text();
  console.log(responseText);

  try {
    return JSON.parse(responseText);
  } catch (error) {
    console.error("Failed to parse JSON:", error);
    return null; // Handle this appropriately in your component
  }
}
