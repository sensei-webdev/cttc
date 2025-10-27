import { CodeXml, Flame, GraduationCap, Rocket, Lightbulb,Clock4, Trophy, Users } from "lucide-react";
import React from "react";
import '../assets/styles/hero.css'

const icons = [
  { Icon: CodeXml, color: "text-purple-400" },
  { Icon: Flame, color: "text-orange-400" },
  { Icon: GraduationCap, color: "text-green-400" },
  { Icon: Lightbulb, color: "text-yellow-400" },
  { Icon: Rocket, color: "text-blue-400" },
];

const cards = [
  {Icon: Clock4,
    h1: "10k+",
    p: "Active Students",
    color: "text-blue-400"
  },
  {Icon: Trophy,
    h1: "95%",
    p: "Success Rate",
    color: "text-purple-400"
  },
  {Icon: Users,
    h1: "500h+",
    p: "Course Hours",
    color: "text-green-400"

  }
]

const HeroSection = () => {
  return (
  <>
  <div id="colorLayer" className="w-full h-full absolute top-0 right-0 blur-[6rem] md:blur-[15rem] z-10">
    <div className="circle1 bg-blue-400 w-32 h-16 md:w-[16rem] md:h-64 shadow-3xl absolute top-32 left-0 md:top-0"></div>
    <div className="circle2 bg-purple-400 w-32 h-16 md:w-64 md:h-64 shadow-3xl absolute bottom-52 right-0 md:bottom-0"></div>
  </div>

    <section className="h-full w-full flex flex-col gap-6 relative overflow-hidden z-20 pb-5">
      <div id="spacing" className="flex mx-auto w-3/4 justify-between h-40 items-center z-30">
        {icons.map((item, index) => (
          <item.Icon key={index} size={48} className={item.color} />
        ))}
      </div>

      <h1 className="text-8xl font-semibold mx-auto leading-snug">
        Welcome to CT Training Centre
      </h1>

      <h3 className="text-2xl mx-auto text-gray-400 text-center">
        Pakur ka Apna Computer प्रशिक्षण केंद्र <br /> Sikho aur aage badho
      </h3>

      <div class="flex flex-col md:flex-row gap-2 md:gap-4 mx-auto">
                <a href="#"
                    class="bg-linear-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg inline-flex items-center hover:scale-105 duration-300 transition-all active:scale-90">Explore
                    Courses</a>
                <a href="#"
                    class="border-2  border-blue-600 text-blue-200 px-8 py-4 rounded-full font-semibold text-lg inline-flex backdrop-blur-sm items-center hover:scale-105 active:scale-90 transition-all duration-300">
                    See Placement
                </a>
            </div>

            <div className="flex flex-wrap w-fit mx-auto gap-2 md:gap-10 justify-center">
              {cards.map((item, index) => (
                <span key={index} className="flex flex-col gap-3 justify-center items-center rounded-xl px-10 py-5 min-w-32 bg-[rgba(255,255,255,0.1)] backdrop-blur-2xl">
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
