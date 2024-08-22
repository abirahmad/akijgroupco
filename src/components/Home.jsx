"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import Slider from "../components/layouts/Slider";
import MessageSlider from "react-slick";
import Brands from "../app/brands/page";
import AboutSection from "../app/about/page";
import NewsAndEvent from "../app/news-events/page";
import Career from "../app/career/page";
import Contact from "../app/contact/page";

export default function Home({ data }) {
  const { message, banner, news ,setting} = data;
  const [filter, setFilter] = useState("*");

  const handleFilter = (category) => {
    setFilter(category);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <>
      <Slider banner={banner} />
      <section className="py-20 bg-gradient-to-r from-blue-200 via-white to-blue-200">
        <div className="container mx-auto overflow-hidden px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-800">
            Board Member Messages
          </h2>
          <MessageSlider {...settings}>
            {message.map((member, index) => (
              <div key={index} className="flex justify-center p-4 md:p-6">
                <div className="bg-white rounded-lg shadow-xl overflow-hidden flex flex-col md:flex-row items-center text-left">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full md:w-[300px] lg:w-[400px] xl:w-[500px] 2xl:w-[550px] h-[300px] md:h-[450px] lg:h-[450px] xl:h-[550px] object-cover mx-4 my-4 rounded-lg"
                  />
                  <div className="p-4 md:p-6 flex flex-col items-center text-center md:text-left">
                    <h3 className="text-xl md:text-2xl font-bold mb-2 text-gray-800">
                      {member.name}
                    </h3>
                    <p className="text-gray-500 mb-4 italic">
                      {member.designation}
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      {member.message}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </MessageSlider>
        </div>
      </section>

      <section
        id="content"
        className="py-12 bg-gray-100 shadow-lg bg-gradient-to-r from-blue-200 via-white to-blue-200"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap md:flex-nowrap">
            <div className="w-full md:w-1/2 md:mb-0 p-2">
              <h2 className="text-3xl font-bold text-gray-800">
                Founder <strong>Message</strong>
              </h2>
              <p className="mt-4 text-gray-600 text-justify">
                Ei mel semper vocent persequeris, nominavi patrioque vituperata
                id vim, cu eam gloriatur philosophia deterruisset. Meliore
                perfecto repudiare ea nam, ne mea duis temporibus. Id quo
                accusam consequuntur, eum ea debitis urbanitas. Nibh reformidans
                vim ne.
              </p>
              <p className="mt-4 text-gray-600 text-justify">
                Iudico definiebas eos ea, dicat inermis hendrerit vel ei,
                legimus copiosae quo at. Per utinam corrumpit prodesset te,
                liber praesent eos an. An prodesset neglegentur qui, usu
                ancillae posidonium in, mea ex eros animal scribentur. Et simul
                fabellas sit. Populo inimicus ne est.
              </p>
              <p className="mt-4 text-gray-600 text-justify">
                Alii wisi phaedrum quo te, duo cu alia neglegentur. Quo nonumy
                detraxit cu, viderer reformidans ut eos, lobortis euripidis
                posidonium et usu. Sed meis bonorum minimum cu, stet aperiam
                qualisque eu vim, vide luptatum ei nec. Ei nam wisi labitur
                mediocrem. Nam saepe appetere ut, veritus graecis minimum no
                vim. Vidisse impedit id per.
              </p>
            </div>
            <div className="w-full md:w-1/2 flex justify-center items-center md:items-start">
              <div className="flex flex-col items-center md:items-end w-full px-2 mb-4">
                <img
                  src="/akijuddin.jpg"
                  alt="Founders Image"
                  className="w-full rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Brands />
      <AboutSection setting={setting} />
      <NewsAndEvent news={news} />
      <Career />
      <Contact setting={setting}/>
    </>
  );
}
