import { Book, Globe, Headphones, Medal, TrendingUp, Zap } from "lucide-react";
import React from "react";
import { FaQuestion } from "react-icons/fa";

const cards = [
  {
    title: "Learn at Your Pace",
    description:
      "Access courses anytime, anywhere with lifetime access to all materials",
    icon: Zap,
    color: "text-yellow-400",
  },
  {
    title: "Industry Certificates",
    description:
      "Earn recognized certifications to boost your professional profile",
    icon: Medal,
    color: "text-blue-400",
  },
  {
    title: "Hands-on Projects",
    description: "Build real-world projects to showcase in your portfolio",
    icon: Book,
    color: "text-purple-400",
  },
  {
    title: "Expert Support",
    description: "Get help from instructors and mentors whenever you need it",
    icon: Headphones,
    color: "text-green-400",
  },
  {
    title: "Global Community",
    description: "Connect with thousands of learners from around the world",
    icon: Globe,
    color: "text-pink-400",
  },
  {
    title: "Career Growth",
    description: "Access job placement assistance and career guidance",
    icon: TrendingUp,
    color: "text-cyan-400",
  },
];

const WhyUs = () => {
  return (
    <section className="flex flex-col w-full h-full gap-5 py-10 lg:items-center">
      <h1 className="flex ml-8 text-4xl font-bold lg:text-5xl">
        Why Choose Us <FaQuestion fill="magenta" />
      </h1>
      <p className="mb-5 ml-8 text-xl text-gray-400">
        Everything you need to succeed in your tech career
      </p>
      {/* Cards Grid */}
      <div className="grid grid-cols-1 gap-8 px-4 lg:w-4/5 md:grid-cols-2 lg:grid-cols-3">
        {/* cards */}
        {cards.map((items, index) => (
          <div
            key={index}
            className="flex flex-col gap-3 p-8 bg-white/5 rounded-2xl"
          >
            <span className="flex items-center gap-6 lg:mb-2">
              <span className="p-4 mb-2 bg-white/10 w-fit rounded-xl">
                <items.icon size={36} className={items.color} />
              </span>
              <h1 className="text-xl font-semibold lg:text-2xl">
                {items.title}
              </h1>
            </span>
            <p className="text-lg leading-6 text-justify text-gray-400">
              {items.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyUs;
