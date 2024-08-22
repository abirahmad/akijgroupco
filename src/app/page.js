"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Index from "../components/Home";
import Loading from "../components/Loading";

export default function Home() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/sites`;
        const response = await axios.get(apiUrl);
        console.log("response.data :>> ", response.data);
        setData(response.data);
      } catch (error) {
        console.error("Failed to fetch data", error);
        setError(error.message);
      }
    }

    fetchData();
  }, []);

  console.log("data-", data);
  if (!data) {
    return (
     <Loading/>
    );
  }
  return (
    <>
      <Index data={data} />
    </>
  );
}
