"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import Slider from "../components/layouts/Slider";
import AkijMessage from "../components/AkijMessage";
import BoardMemberMessage from "../components/BoardMemberMessage";
import YearWiseAchievement from "../components/YearWiseAchievement";
import Brands from "../app/brands/page";
import AboutSection from "../app/about/page";
import NewsAndEvent from "../app/news-events/page";
import Career from "../app/career/page";
import Contact from "../app/contact/page";

export default function Home({ data }) {
  const { message, banner, news, setting, logos, brands } = data;
  const [filter, setFilter] = useState("*");

  const handleFilter = (category) => {
    setFilter(category);
  };

  return (
    <>
      <Slider banner={banner} />

      <BoardMemberMessage message={message} />
      <AkijMessage setting={setting} />
      <Brands brands={brands} logos={logos} />
      <AboutSection setting={setting} />
      <section id="timeline">
        <YearWiseAchievement />
      </section>
      <NewsAndEvent news={news} />

      <Career />
      <Contact setting={setting} />
    </>
  );
}
