import React from "react";
import { NavLink } from "react-router-dom";
import { Clock4, IndianRupee, Star, Users } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import CourseCard from "../components/CourseCard";
import { FreeMode } from "swiper/modules";


import "swiper/css";

const courses = [
  {
    image:
      "https://res.cloudinary.com/dttah6xlw/image/upload/v1761569601/cttc-Excel_xrxzku.webp",
    courseName: "Advanced Excel Mastery",
    description:
      "Master formulas, analytics and automation for office excellence.",
    duration: 6,
    durationType: "months",
    students: "3.1k",
    rating: "4.8",
    price: "11,980",
    link: "#",
  },
  {
    image:
      "https://res.cloudinary.com/dttah6xlw/image/upload/v1761569555/EnglishTyping_g7txdz.webp",
    courseName: "English Typing Pro",
    description:
      "Boost speed, accuracy and confidence with guided typing drills.",
    duration: "3 months",
    students: "2.0k",
    rating: "4.7",
    price: "2,480",
    link: "#",
  },
  {
    image:
      "https://res.cloudinary.com/dttah6xlw/image/upload/v1761569584/GraphicDesign_ur5fta.webp",
    courseName: "Graphic Design & Branding",
    description:
      "Design posters, logos and ads using Photoshop and Illustrator.",
    duration: "9 months",
    students: "4.4k",
    rating: "4.9",
    price: "19,980",
    link: "#",
  },
];

const FeatureSection = () => {
  return (
    <section className="w-full h-full px-6 py-10 mx-auto space-y-5 bg-black/20">
      <h1 className="text-3xl font-bold lg:text-5xl">Popular Courses</h1>
      <p className="mb-5 text-xl text-gray-400">
        Start your journey with our most popular programs
      </p>

      {/* Container */}
      <Swiper
      modules={[FreeMode]}
        spaceBetween={1}
        slidesPerView={1.2}
        freeMode={true}
        scrollbar={{ draggable: true, hide: false }}
        breakpoints={{
          360: {
            slidesPerView: 1.2,
            spaceBetween: 5,
          },
          640: {
            slidesPerView: 1.4,
            spaceBetween: 5,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 5,
          },
          1024: {
            slidesPerView: 2.2,
            spaceBetween: 20,
          },
          1440: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
      >
        {/* Cards */}
        {courses.map((items, index) => (
          <SwiperSlide key={index}>
            <CourseCard {...items} />
          </SwiperSlide>
        ))}
      </Swiper>

      <NavLink
        to="/courses"
        className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white transition-all duration-300 rounded-full bg-linear-to-r from-blue-600 to-purple-600 hover:scale-105 active:scale-90"
      >
        Browse All Courses
      </NavLink>
    </section>
  );
};

export default FeatureSection;
