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
  {
    image:
      "https://res.cloudinary.com/dttah6xlw/image/upload/v1761709023/af3261eb-1e76-4128-a7ba-a69d43febc62_lmxnya.png",
    linkto: "#",
    title: "Beautician",
  },
  {
    image:
      "https://res.cloudinary.com/dttah6xlw/image/upload/v1761709393/tailoring_qqubeo.png",
    linkto: "#",
    title: "Tailoring",
  },
];

const Hero = () => {
  return (
    <section className="w-4/5 px-4 py-2 mx-auto mt-10 border-2 md:p-12 rounded-2xl">
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
            <Link to={items.linkto} className="space-y-4">
              <img
                src={items.image}
                alt="image"
                className="mx-auto w-52 rounded-2xl"
              />
              <span className="flex items-center justify-center text-center py-1.5">
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
