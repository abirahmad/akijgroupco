"use client";
import { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./globals.css";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";
import Loading from "../components/Loading";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/sites`;
        const productsResponse = await fetch(apiUrl);
        if (!productsResponse.ok) {
          throw new Error("Failed to fetch products");
        }
        const productsData = await productsResponse.json();
        setProducts(productsData);
      } catch (error) {
        console.error("Failed to fetch products", error);
        setError(error.message);
      }
    }

    fetchProducts();
  }, []);

  if (error) {
    return (
      <html lang="en">
        <body className={inter.className}>
          <Header />
          <div>Error: {error}</div>
          <Footer />
        </body>
      </html>
    );
  }

  if (!products) {
    return (
      <html lang="en">
        <body className={inter.className}>
         <Loading/>
        </body>
      </html>
    );
  }
  const { setting } = products;

  return (
    <html lang="en">
      <head>
        <title>Akij Group</title>
        <meta name="description" content="Quality First" />
      </head>
      <body className={inter.className}>
        <Header setting={setting} />
        {children}
        <Footer setting={setting} />
      </body>
    </html>
  );
}
