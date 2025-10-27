import { Book, Globe, Headphones, Medal, TrendingUp, Zap } from "lucide-react";
import React from "react";

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
    <section className="h-full w-full flex flex-col items-center gap-5 bg-black/20 py-10">
      <h1 className="text-5xl font-bold">Why Choose Us?</h1>
      <p className="text-xl text-gray-400 mb-5">
        Everything you need to succeed in your tech career
      </p>
      {/* Cards Grid */}
      <div className="w-4/5 grid grid-cols-3 gap-8">
        {/* cards */}
        {cards.map((items, index) => (
          <div key={index} className="bg-white/5 p-8 rounded-2xl flex flex-col gap-3">
            <span className="flex flex-col">
              <span className="bg-white/10 p-4 w-fit rounded-xl mb-2">
                <items.icon size={36} className={items.color} />
              </span>
              <h1 className="text-2xl font-semibold">{items.title}</h1>
            </span>
            <p className="text-lg text-gray-400 leading-6">
              {items.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyUs;
