import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { HashLink } from "react-router-hash-link";

import "swiper/css";

const linkCards = [
  {
    image:
      "https://res.cloudinary.com/dttah6xlw/image/upload/v1761700172/cd10_zhetjy.webp",
    linkto: "#basicsForBeginners",
    title: "Basics for begineers",
  },
  {
    image:
      "https://res.cloudinary.com/dttah6xlw/image/upload/v1761700173/cd8_wfmjof.webp",
    linkto: "#accountingNfinance",
    title: "Accounting & Finance",
  },
  {
    image:
      "https://res.cloudinary.com/dttah6xlw/image/upload/v1761700172/cd9_xujzuv.webp",
    linkto: "#creativeNmultimedia",
    title: "Creative & Multimedia",
  },
  {
    image:
      "https://res.cloudinary.com/dttah6xlw/image/upload/v1761700173/cd4_bz0gkn.webp",
    linkto: "#technician",
    title: "Technician",
  },
  {
    image:
      "https://res.cloudinary.com/dttah6xlw/image/upload/v1761700173/cd2_xiqcsi.webp",
    linkto: "#businessManagement",
    title: "Business Management",
  },
  {
    image:
      "https://res.cloudinary.com/dttah6xlw/image/upload/v1761700173/cd6_wogf8p.webp",
    linkto: "#educationTraining",
    title: "Education Training",
  },
  {
    image:
      "https://res.cloudinary.com/dttah6xlw/image/upload/v1761709023/af3261eb-1e76-4128-a7ba-a69d43febc62_lmxnya.png",
    linkto: "#beautician",
    title: "Beautician",
  },
  {
    image:
      "https://res.cloudinary.com/dttah6xlw/image/upload/v1761709393/tailoring_qqubeo.png",
    linkto: "#tailoring",
    title: "Tailoring",
  },
];

const Hero = () => {
  return (
    <section id="hero" className="w-4/5 px-4 py-2 mx-auto mt-10 border-2 md:p-12 rounded-2xl">
      <h1 className="bg-[#111427] relative px-8 min-[453px]:-top-6 -top-8 w-fit md:px-10 mx-auto md:text-3xl font-medium text-center  md:-top-17">
        Explore courses by job-functions
      </h1>
      <Swiper
        spaceBetween={10}
        slidesPerView={2}
        freeMode={true}
         breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 3.5,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
      >
        {linkCards.map((items, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <HashLink smooth to={items.linkto} className="space-y-4">
              <img
                src={items.image}
                alt="image"
                className="mx-auto w-52 rounded-2xl"
              />
              <span className="flex items-center justify-center text-center py-1.5">
                {items.title}
              </span>
            </HashLink>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
