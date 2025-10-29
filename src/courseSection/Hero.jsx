import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";

const linkCards = [
  {
    image:
      "https://res.cloudinary.com/dttah6xlw/image/upload/v1761700172/cd10_zhetjy.webp",
    linkto: "#",
    title: "Basics for begineers",
  },
  {
    image:
      "https://res.cloudinary.com/dttah6xlw/image/upload/v1761700173/cd8_wfmjof.webp",
    linkto: "#",
    title: "Accounting & Finance",
  },
  {
    image:
      "https://res.cloudinary.com/dttah6xlw/image/upload/v1761700172/cd9_xujzuv.webp",
    linkto: "#",
    title: "Creative & Multimedia",
  },
  {
    image:
      "https://res.cloudinary.com/dttah6xlw/image/upload/v1761700173/cd4_bz0gkn.webp",
    linkto: "#",
    title: "Technician",
  },
  {
    image:
      "https://res.cloudinary.com/dttah6xlw/image/upload/v1761700173/cd2_xiqcsi.webp",
    linkto: "#",
    title: "Business Management",
  },
  {
    image:
      "https://res.cloudinary.com/dttah6xlw/image/upload/v1761700173/cd6_wogf8p.webp",
    linkto: "#",
    title: "Education Training",
  },
];

const Hero = () => {
  return (
    <section className="w-4/5 p-12 mx-auto mt-10 border-2 rounded-2xl">
      <h1 className="bg-[#111427] relative w-fit px-10 mx-auto text-3xl font-medium text-center -top-17">
        Explore courses by job-functions
      </h1>
      <Swiper
        spaceBetween={50}
        slidesPerView={5}
        freeMode={true}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {linkCards.map((items, index) => (
          <SwiperSlide
            key={index}
            className="flex justify-center"
          >
            <Link to={items.linkto} className="space-y-4">
              <img
                src={items.image}
                alt="image"
                className="mx-auto w-52 rounded-2xl"
              />
              <span className="flex items-center justify-center py-1.5">
                {items.title}
              </span>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
