import { Clock4, IndianRupee, Star, Users } from "lucide-react";
import React from "react";

const CourseCard = (elem) => {
  return (
    <div className="duration-300 ease-in-out w-90 rounded-2xl bg-white/5 hover:scale-105">
      <img src={elem.image} alt="Image" className="h-48 rounded-t-2xl" />
      <div className="flex flex-col gap-2 p-5">
        <h1 className="text-xl font-bold line-clamp-1">{elem.courseName}</h1>
        <p className="text-gray-400 line-clamp-2">{elem.description}</p>
        <div className="flex justify-between mt-3 mb-3 text-sm text-gray-400">
          <span className="flex gap-1.5 ">
            <Clock4 size={16} />
            {elem.duration} {elem.durationType}
          </span>
          <span className="flex gap-1.5">
            <Users size={16} />
            {elem.students}
          </span>
          <span className="flex gap-1.5">
            <Star size={16} />
            {elem.rating}
          </span>
        </div>
        <div className="flex justify-between gap-2 my-1.5">
          <div className="flex gap-2 mb-3 text-2xl font-bold text-blue-500">
            <span className="flex items-center justify-center">
              <IndianRupee size={24} className="font-bold" />
            </span>
            <span>{elem.price}</span>
          </div>
          <span className="flex gap-2 mt-1.5 text-sm text-gray-400">
            <IndianRupee size={16} />
            <span>
              {Math.round(
                parseInt(elem.price.replace(/,/g, "")) / parseInt(elem.duration)
              )}
              /month
            </span>
          </span>
        </div>
        <div className="flex gap-3 font-medium text-center text-white text-md">
          <a href={elem.link} className="w-full py-2 bg-blue-600 rounded-xl">
            Enroll Now
          </a>
          <button className="w-full bg-white/10 rounded-xl">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
