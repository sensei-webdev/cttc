import React from "react";
import { Clock4, Star, Users } from "lucide-react";

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
    <section className="h-full w-full flex flex-col items-center gap-5">
      <h1 className="text-5xl font-bold">Popular Courses</h1>
      <p className="text-xl text-gray-400">
        Start your journey with our most popular programs
      </p>

      {/* Container */}
      <div className="flex gap-20 m-5">
        {/* Cards */}

        {courses.map((items, index) => (
          <div
            key={index}
            className="w-96 rounded-2xl bg-white/5 hover:scale-105 duration-300 ease-in-out"
          >
            <img src={items.image} alt="Image" className="rounded-t-2xl" />
            <div className="p-5 flex flex-col gap-2">
              <h1 className="font-bold text-2xl">{items.h1}</h1>
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
              <div className="text-3xl text-blue-600 font-bold flex gap-2 mb-3">
                <span>₹</span>
                <span>{items.price}</span>
              </div>
              <div className="text-center text-xl font-medium text-white flex gap-2">
                <a
                href={items.link}
                className="bg-blue-600 py-3 rounded-xl w-full"
              >
                Enroll Now
              </a>
              <button className="bg-white/10 w-full rounded-xl">View Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <a
        href="#"
        className="mt-10 bg-linear-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg inline-flex items-center hover:scale-105 duration-300 transition-all active:scale-90"
      >
        Browse All Courses
      </a>
    </section>
  );
};

export default FeatureSection;
