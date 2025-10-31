import { Quote } from "lucide-react";
import React from "react";
import StarRating from "../components/StarRating";

const cards = [
  {
    img: "https://images.unsplash.com/photo-1633625576932-348e73c45e82?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fG1hbGUlMjBwcm9maWxlfGVufDB8MnwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
    name: "Sohail Ansari",
    placement: "Web Developer at TechNova",
    description:
      "The training boosted my confidence and taught me how to build real projects from scratch. The support team always helped whenever I got stuck. I secured my first internship just a few weeks after completing the course!",
  },
  {
    img: "https://images.unsplash.com/photo-1584997159889-8bb96d0a2217?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmVtYWxlJTIwc3R1ZGVudCUyMHByb2ZpbGV8ZW58MHwyfDB8fHww&auto=format&fit=crop&q=60&w=600",
    name: "Riya Khan",
    placement: "UI/UX Designer at PixelWorks",
    description:
      "The instructors explained design concepts in a very simple way. I got hands-on practice with Figma and real client cases. It completely changed the way I think about user experience and creativity!",
  },
  {
    img: "https://images.unsplash.com/photo-1722926323079-0836a07d2340?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fG1hbGUlMjBwcm9maWxlfGVufDB8MnwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
    name: "Arjun Mehta",
    placement: "Data Specialist at DigiCorp",
    description:
      "A wonderful learning experience. Every topic was taught step-by-step, making complex tools feel easy. This course helped me build practical skills that I now use daily in my job!",
  },
];

const Testimonials = () => {
  return (
    <section className="flex flex-col items-center w-full h-full gap-5 py-10 bg-black/20">
      <h1 className="text-5xl font-bold">Success Stories</h1>
      <p className="mb-8 text-xl text-gray-400">
        Hear from our graduates who are now thriving in tech
      </p>
      <div className="flex flex-col justify-between gap-6 px-5 mt-5 lg:flex-row lg:w-4/5">
        {cards.map((items, index) => (
          <div key={index} className="flex flex-col flex-1 gap-4 p-5 bg-white/10 rounded-2xl">
            <div className="flex items-center gap-0.5 lg:gap-3">
              <img
                src={items.img}
                alt="img"
                className="rounded-full w-15 h-15"
              />
              <div className="flex flex-col gap-1">
                <h1 className="text-xl font-semibold">{items.name}</h1>
                <p className="text-sm text-gray-400">{items.placement}</p>
              </div>
              <div className="ml-auto text-gray-700">
                <Quote size={48} />
              </div>
            </div>
            <StarRating rating={5} />
            <p className="text-gray-400 ">{items.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
