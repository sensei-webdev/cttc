import {
  Award,
  CircleCheckBig,
  GraduationCap,
  Users,
  TrendingUp,
} from "lucide-react";
import React from "react";

const scholarships = [
  {
    Icon: Award,
    style:
      "w-16 h-16 rounded-xl bg-linear-to-br from-yellow-500 to-orange-500 flex items-center justify-center mb-6",
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
    style:
      "w-16 h-16 rounded-xl bg-linear-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-6",
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
    style:
      "w-16 h-16 rounded-xl bg-linear-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-6",
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
    <>
      <section className="flex flex-col items-center w-full h-full gap-5 py-10">
        <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-linear-to-br from-blue-500 to-purple-500">
          <GraduationCap size={32} />
        </div>
        <h1 className="text-4xl font-bold text-center lg:text-5xl">Scholarship Programs</h1>
        <p className="w-5/6 mb-10 text-xl text-justify text-gray-400 md:w-2/3">
          We believe education should be accessible to everyone. Apply for our
          scholarship programs and get financial support for your learning
          journey.
        </p>
        <main className="flex flex-col w-5/6 gap-4 md:w-4/5 lg:flex-row">
          {scholarships.map((items, index) => (
            <div
              key={index}
              className="bg-white/5 p-8 flex flex-1 flex-col gap-1.5 rounded-xl"
            >
              <div>
                <span className={items.style}>
                  <items.Icon size={32} />
                </span>
                <span className="text-2xl font-semibold">{items.title}</span>
              </div>
              <p className="text-sm text-gray-500">{items.subtitle}</p>
              <div className="flex items-center gap-2 my-3">
                <span className="text-xl font-bold md:text-3xl">{items.coverage}</span>
                <span className="text-sm text-gray-400">{items.coverageP}</span>
              </div>
              <div>
                <p className="mb-2">Eligibility Criteria:</p>
                <ul className="text-gray-400 text-sm space-y-2.5">
                  {items.eligibility.map((point, i) => (
                    <li key={i} className="flex gap-2 ml-1.5">
                      <CircleCheckBig size={16} className="text-green-500" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href="/"
                className="w-full py-3 mt-4 font-semibold text-center text-white transition-all rounded-lg bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                Apply Now
              </a>
            </div>
          ))}
        </main>
      </section>

      <div className="flex flex-col w-4/5 gap-4 p-8 mx-auto text-center border bg-linear-to-r from-blue-600/20 to-purple-600/20 border-blue-500/30 rounded-2xl opacity-80">
        <span>Application Process</span>
        <p className="mx-auto text-sm tracking-wide text-justify text-gray-400 md:w-2/3 lg:w-1/2">
          Applications are reviewed on a rolling basis. Submit your application
          along with required documents, and our scholarship committee will
          review within 2 weeks. Selected candidates will be notified via email.
        </p>
        <ul className="flex flex-col gap-3 mx-auto text-sm text-gray-400 md:flex-row">
          <li>• Application Deadline: Rolling</li>
          <li>• Review Period: 2 weeks</li>
          <li>• Award Notification: Email</li>
        </ul>
      </div>
    </>
  );
};

export default Scholarship;
