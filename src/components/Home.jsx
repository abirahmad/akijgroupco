"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import Slider from "../components/layouts/Slider";
import AkijMessage from "../components/AkijMessage";
import BoardMemberMessage from "../components/BoardMemberMessage";
import Brands from "../app/brands/page";
import AboutSection from "../app/about/page";
import NewsAndEvent from "../app/news-events/page";
import Career from "../app/career/page";
import Contact from "../app/contact/page";

export default function Home({ data }) {
  const { message, banner, news, setting } = data;
  const [filter, setFilter] = useState("*");

  const handleFilter = (category) => {
    setFilter(category);
  };

  return (
    <>
      <Slider banner={banner} />

      <BoardMemberMessage message={message} />
      <AkijMessage />
      <Brands />
      <AboutSection setting={setting} />
      <NewsAndEvent news={news} />
      <Career />
      <Contact setting={setting} />
    </>
  );
}
