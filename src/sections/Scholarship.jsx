import { Award, CircleCheckBig, GraduationCap, Users, TrendingUp } from "lucide-react";
import React from "react";

const scholarships = [
  {
    Icon: Award,
    style: "w-16 h-16 rounded-xl bg-linear-to-br from-yellow-500 to-orange-500 flex items-center justify-center mb-6",
    title: "Merit Scholarship",
    subtitle: "For outstanding academic achievers",
    coverage: "Up to 100%",
    coverageP: "tuition coverage",
    eligibility: [
      "Minimum 3.5 GPA",
      "Strong academic record",
      "Entrance test score 85%+",
      "Letter of recommendation",
    ],
  },
  {
    Icon: Users,
    style: "w-16 h-16 rounded-xl bg-linear-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-6",
    title: "Need-Based Scholarship",
    subtitle: "Supporting students with financial constraints",
    coverage: "Up to 75%",
    coverageP: "tuition coverage",
    eligibility: [
      "Family income verification",
      "Academic potential",
      "Personal statement",
      "Community involvement",
    ],
  },
  {
    Icon: TrendingUp,
    style: "w-16 h-16 rounded-xl bg-linear-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-6",
    title: "Career Advancement",
    subtitle: "For career switchers and professionals",
    coverage: "Up to 50%",
    coverageP: "tuition coverage",
    eligibility: [
      "2+ years work experience",
      "Career transition plan",
      "Professional references",
      "Portfolio or project work",
    ],
  },
];

const Scholarship = () => {
  return (
    <section className="h-full w-full flex flex-col items-center gap-5 py-10">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-linear-to-br from-blue-500 to-purple-500 mb-4">
        <GraduationCap size={32} />
      </div>
      <h1 className="text-5xl font-bold">Scholarship Programs</h1>
      <p className="text-xl md:w-2/3 text-center text-gray-400">
        We believe education should be accessible to everyone. Apply for our
        scholarship programs and get financial support for your learning
        journey.
      </p>
      <main className="w-4/5 flex gap-4">
        {scholarships.map((items, index) => (
          <div key={index} className="bg-white/5 p-8 flex flex-1 flex-col gap-1.5 rounded-xl">
            <div>
              <span className={items.style}>
                <items.Icon size={32} />
              </span>
              <span className="text-2xl font-semibold">{items.title}</span>
            </div>
            <p className="text-gray-500 text-sm">
              {items.subtitle}
            </p>
            <div className="flex gap-1 items-center my-3">
              <span className="text-3xl font-bold">{items.coverage}</span>
              <span className="text-gray-400">{items.coverageP}</span>
            </div>
            <div>
              <p className="mb-2">Eligibility Criteria:</p>
              <ul className="text-gray-400 text-sm space-y-2.5">
                {items.eligibility.map((point,i) => (
                    <li key={i} className="flex gap-2 ml-1.5">
                        <CircleCheckBig size={16} className="text-green-500" />
                        <span>{point}</span>
                    </li>
                )
                )}
              </ul>
            </div>
            <a
              href="/"
              className="mt-4 w-full text-center bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-lg font-semibold transition-all"
            >
              Apply Now
            </a>
          </div>
        ))}
      </main>
    </section>
  );
};

export default Scholarship;
