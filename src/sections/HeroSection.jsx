import React from "react";
import { NavLink } from "react-router-dom";
import { CodeXml, Flame, GraduationCap, Rocket, Lightbulb,Clock4, Trophy, Users } from "lucide-react";
import '../assets/styles/hero.css'

const icons = [
  { Icon: CodeXml, color: "text-purple-400" },
  { Icon: Flame, color: "text-orange-400" },
  { Icon: GraduationCap, color: "text-green-400" },
  { Icon: Lightbulb, color: "text-yellow-400" },
  { Icon: Rocket, color: "text-blue-400" },
];

const cards = [
  {Icon: Users,
    h1: "10k+",
    p: "Active Students",
    color: "text-blue-400"
  },
  {Icon: Trophy,
    h1: "95%",
    p: "Success Rate",
    color: "text-purple-400"
  },
  {Icon: Clock4,
    h1: "500h+",
    p: "Course Hours",
    color: "text-green-400"

  }
]

const HeroSection = () => {
  return (
  <>
  <div id="colorLayer" className="w-full h-full absolute top-20 right-0 blur-[6rem] md:blur-[12rem]">
    <div className="circle1 bg-blue-400 w-32 h-16 md:w-[16rem] md:h-64 shadow-3xl absolute top-32 left-0 md:top-0"></div>
    <div className="absolute right-0 w-32 h-16 bg-purple-400 circle2 md:w-64 md:h-64 shadow-3xl bottom-1/3 md:bottom-0"></div>
  </div>

    <section className="relative z-20 flex flex-col w-full h-full gap-6 pb-10 overflow-hidden">
      <div id="spacing" className="z-30 flex items-center justify-between w-3/4 h-32 mx-auto">
        {icons.map((item, index) => (
          <item.Icon key={index} size={48} className={item.color} />
        ))}
      </div>

      <h1 className="mx-auto text-3xl font-semibold leading-snug text-center lg:text-5xl md:text-4xl">
        Welcome to CT Training Centre
      </h1>

      <h3 className="mx-auto text-[1rem] md:text-xl text-center text-gray-400 lg:text-2xl">
        Pakur ka Apna Computer प्रशिक्षण केंद्र <br /> Sikho aur aage badho
      </h3>

      <div class="flex flex-col md:flex-row gap-2 md:gap-4 mx-auto">
                <NavLink to="/courses"
                    className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white transition-all duration-300 rounded-full bg-linear-to-r from-blue-600 to-purple-600 hover:scale-105 active:scale-90">Explore
                    Courses</NavLink>
                <NavLink to="/blog"
                    className="inline-flex items-center px-8 py-4 text-lg font-semibold text-blue-200 transition-all duration-300 border-2 border-blue-600 rounded-full backdrop-blur-sm hover:scale-105 active:scale-90">
                    See Placement
                </NavLink>
            </div>

            <div className="flex flex-wrap justify-center w-4/5 gap-4 mx-auto mt-4 sm:gap-2 sm:w-fit md:gap-12">
              {cards.map((item, index) => (
                <span key={index} className="flex flex-col items-center justify-center gap-2 px-5 py-2 bg-white/10 rounded-xl sm:px-10 sm:py-6 sm:min-w-32 backdrop-blur-2xl">
                  <item.Icon size={36} className={item.color} />
                  <h1 className="text-2xl font-bold">{item.h1}</h1>
                  <p>{item.p}</p>
                </span>
                ))}
            </div>
    </section>
  </>
  );
};

export default HeroSection;
