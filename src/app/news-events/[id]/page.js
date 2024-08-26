import React from "react";
import RelatedNews from "./RelatedNews";

export default async function Home({ params }) {
  const newsDetails = await fetchNewsDetails(params.id);
  console.log('newsDetails :>> ', newsDetails);

  // Extract date formatting logic
  const options = { day: '2-digit', month: 'long', year: 'numeric' };
  const formattedDate = new Intl.DateTimeFormat('en-GB', options).format(new Date(newsDetails.created_at));

  return (
    <>
      <div className="bg-gray-100 text-gray-800 w-full mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 mt-2 p-4">
        <div className="md:col-span-8">
          {/* Main News Article */}
          <article className="bg-white p-6 rounded-lg shadow-md mb-6">
            <img
              src={newsDetails.image}
              alt="Main News Image"
              className="w-full h-full object-cover rounded-lg mb-4"
            />
            <h2 className="text-3xl font-bold mb-2">{newsDetails.title}</h2>
            <p className="text-gray-600 mb-4 text-xs">
              Published on {formattedDate}
            </p>
            <p className="leading-relaxed mb-4 text-sm">
              {newsDetails.short_description}
            </p>
            <span className="leading-relaxed text-sm text-justify">
              <div
                dangerouslySetInnerHTML={{ __html: newsDetails.long_description }}
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

async function fetchNewsDetails(newsId) {
  const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/news-media/${newsId}`;
  console.log('apiUrl :>> ', apiUrl);
  const response = await fetch(apiUrl);

  // Check if the response is OK (status 200)
  if (!response.ok) {
    console.error(`Failed to fetch news details: ${response.statusText}`);
    return null; // Handle this appropriately in your component
  }

  // Log the response for debugging
  const responseText = await response.text();
  console.log(responseText);

  try {
    return JSON.parse(responseText);
  } catch (error) {
    console.error("Failed to parse JSON:", error);
    return null; // Handle this appropriately in your component
  }
}
