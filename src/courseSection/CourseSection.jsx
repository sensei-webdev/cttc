import React from "react";
import CourseCard from "../components/CourseCard";
import courseBundle from "./courseBundle.js";
const CourseSection = () => {
  return (
    <main className="w-4/5 mx-auto space-y-8">
      {courseBundle.map((items, index) => (
        <section key={index}>
          <h1 className="pb-6 mt-10 text-4xl font-semibold">{items.category}</h1>
          <div className="flex flex-wrap gap-8">
            {items.courses.map((courses, idx) => (
              <CourseCard key={idx} {...courses} />
            ))}
          </div>
        </section>
      ))}
    </main>
  );
};

export default CourseSection;
