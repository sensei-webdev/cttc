import React from "react";
import { Clock4, IndianRupee, Star, Users } from "lucide-react";

const courses = [
  {
    image:
      "https://res.cloudinary.com/dttah6xlw/image/upload/v1761569601/cttc-Excel_xrxzku.webp",
    h1: "Advanced Excel Mastery",
    p: "Master formulas, analytics and automation for office excellence.",
    duration: "6 months",
    students: "3.1k",
    rating: "4.8",
    price: "11,980",
    link: "#",
  },
  {
    image:
      "https://res.cloudinary.com/dttah6xlw/image/upload/v1761569555/EnglishTyping_g7txdz.webp",
    h1: "English Typing Pro",
    p: "Boost speed, accuracy and confidence with guided typing drills.",
    duration: "3 months",
    students: "2.0k",
    rating: "4.7",
    price: "2,480",
    link: "#",
  },
  {
    image:
      "https://res.cloudinary.com/dttah6xlw/image/upload/v1761569584/GraphicDesign_ur5fta.webp",
    h1: "Graphic Design & Branding",
    p: "Design posters, logos and ads using Photoshop and Illustrator.",
    duration: "9 months",
    students: "4.4k",
    rating: "4.9",
    price: "19,980",
    link: "#",
  },
];

const FeatureSection = () => {
  return (
    <section className="flex flex-col items-center w-full h-full gap-5 py-10 bg-black/20">
      <h1 className="text-5xl font-bold">Popular Courses</h1>
      <p className="mb-5 text-xl text-gray-400">
        Start your journey with our most popular programs
      </p>

      {/* Container */}
      <div className="flex gap-20 m-5">
        {/* Cards */}

        {courses.map((items, index) => (
          <div
            key={index}
            className="duration-300 ease-in-out w-96 rounded-2xl bg-white/5 hover:scale-105"
          >
            <img src={items.image} alt="Image" className="rounded-t-2xl" />
            <div className="flex flex-col gap-2 p-5">
              <h1 className="text-2xl font-bold">{items.h1}</h1>
              <p className="text-gray-400">{items.p}</p>
              <div className="flex justify-between mt-3 mb-3 text-gray-400">
                <span className="flex gap-1.5">
                  <Clock4 />
                  {items.duration}
                </span>
                <span className="flex gap-1.5">
                  <Users />
                  {items.students}
                </span>
                <span className="flex gap-1.5">
                  <Star />
                  {items.rating}
                </span>
              </div>
              <div className="flex gap-2 mb-3 text-3xl font-bold text-blue-500">
                <span className="flex items-center justify-center">
                  <IndianRupee size={28} className="font-bold"/>
                </span>
                <span>{items.price}</span>
              </div>
              <div className="flex gap-2 text-xl font-medium text-center text-white">
                <a
                  href={items.link}
                  className="w-full py-3 bg-blue-600 rounded-xl"
                >
                  Enroll Now
                </a>
                <button className="w-full bg-white/10 rounded-xl">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <a
        href="#"
        className="inline-flex items-center px-8 py-4 mt-10 text-lg font-semibold text-white transition-all duration-300 rounded-full bg-linear-to-r from-blue-600 to-purple-600 hover:scale-105 active:scale-90"
      >
        Browse All Courses
      </a>
    </section>
  );
};

export default FeatureSection;
