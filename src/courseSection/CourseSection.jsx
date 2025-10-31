import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import CourseCard from "../components/CourseCard";
import courseBundle from "./courseBundle.js";

import "swiper/css";
import "swiper/css/scrollbar";

const CourseSection = () => {
  return (
    <main className="px-6 mx-auto space-y-8 md:px-8 lg:px-0 lg:w-4/5">
      {courseBundle.map((items, index) => (
        <section key={index}>
          <div className="flex items-center gap-2 pb-6 mt-10">
            <items.icon size={32} className={items.style} />
            <h1 className="text-xl font-semibold md:text-2xl lg:text-4xl">
              {items.category}
            </h1>
          </div>
          <Swiper
            spaceBetween={1}
            slidesPerView={1.01}
            freeMode={true}
            scrollbar={{ draggable: true, hide: false }}
            breakpoints={{
              360: {
                slidesPerView: 1.17,
                spaceBetween: 5,
              },
              640: {
                slidesPerView: 1.7,
                spaceBetween: 5,
              },
              768: {
                slidesPerView: 2.2,
                spaceBetween: 5,
              },
              1024: {
                slidesPerView: 2.2,
                spaceBetween: 20,
              },
              1440: {
                slidesPerView: 3.05,
                spaceBetween: 10,
              },
            }}
          >
            {items.courses.map((courses, idx) => (
              <SwiperSlide key={idx} className="mb-4">
                <CourseCard {...courses} />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      ))}
    </main>
  );
};

export default CourseSection;
