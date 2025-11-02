import {
  BookOpenCheck,
  Briefcase,
  Palette,
  School,
  Scissors,
  Sparkles,
  WalletMinimal,
  Wrench,
} from "lucide-react";

const multiCourses = [
  {
    icon: BookOpenCheck,
    style: "text-green-400",
    category: "Basics for Beginners",
    courses: [
      {
        image:
          "https://plus.unsplash.com/premium_photo-1720287601920-ee8c503af775?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29kaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
        courseName: "Introduction to Coding Fundamentals",
        description:
          "Learn the basics of programming with Python, including variables, loops, and functions for absolute beginners.",
        duration: 4,
        durationType: "weeks",
        students: "1.2k+",
        rating: 4.7,
        price: "4,999",
      },
      {
        image:
          "https://plus.unsplash.com/premium_photo-1720503965220-10ea698bf0aa?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=600",
        courseName: "Beginner Web Development",
        description:
          "Build your first website using HTML, CSS, and basic JavaScript—no prior experience needed.",
        duration: 6,
        durationType: "weeks",
        students: "892+",
        rating: 4.5,
        price: "5,999",
      },
      {
        image:
          "https://plus.unsplash.com/premium_photo-1682095924383-f4aa9387cc15?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZGlnaXRhbCUyMGxpdGVyYWN5fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
        courseName: "Digital Literacy Essentials",
        description:
          "Master everyday tech skills like email, file management, and safe online browsing.",
        duration: 2,
        durationType: "weeks",
        students: "2.1k+",
        rating: 4.8,
        price: "2,999",
      },
      {
        image:
          "https://images.unsplash.com/photo-1758874573280-bf3f15cbbf3f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbmFsJTIwcHJvZHVjdGl2aXR5fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
        courseName: "Personal Productivity with Tools",
        description:
          "Get organized using apps like Google Workspace and Trello for better time management.",
        duration: 3,
        durationType: "weeks",
        students: "1.5k+",
        rating: 4.6,
        price: "3,999",
      },
      {
        image:
          "https://images.unsplash.com/photo-1588600878108-578307a3cc9d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW5hbHlzaXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
        courseName: "Intro to Data Basics",
        description:
          "Understand spreadsheets and simple data analysis with Excel for non-techies.",
        duration: 4,
        durationType: "weeks",
        students: "1k+",
        rating: 4.4,
        price: "4,599",
      },
      {
        image:
          "https://plus.unsplash.com/premium_photo-1684444605542-93725082d214?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y3JlYXRpdmUlMjB3cml0aW5nfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
        courseName: "Creative Writing for Starters",
        description:
          "Develop storytelling skills through short exercises and feedback.",
        duration: 5,
        durationType: "weeks",
        students: "734+",
        rating: 4.9,
        price: "3,599",
      },
    ],
  },
  {
    icon: WalletMinimal,
    style: "text-amber-500",
    category: "Accounting & Finance",
    courses: [
      {
        image:
          "https://plus.unsplash.com/premium_photo-1661693617702-6ded7421dfad?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGFjY291bnRpbmclMjBwcmluY2lwbGVzfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
        courseName: "Financial Accounting Principles",
        description:
          "Dive into bookkeeping, balance sheets, and income statements for business owners.",
        duration: 8,
        durationType: "weeks",
        students: "3.5k+",
        rating: 4.6,
        price: "9,999",
      },
      {
        image:
          "https://images.unsplash.com/photo-1685038955804-3de172e7ff35?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBlcnNvbmFsJTIwZmluYW5jZSUyMG1hc3Rlcnl8ZW58MHwwfDB8fHww&auto=format&fit=crop&q=60&w=600",
        courseName: "Personal Finance Mastery",
        description:
          "Learn budgeting, saving, investing basics, and debt management for everyday life.",
        duration: 6,
        durationType: "weeks",
        students: "5.2k+",
        rating: 4.8,
        price: "7,999",
      },
      {
        image:
          "https://plus.unsplash.com/premium_photo-1661661363573-f3f537e766fa?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fG1hbmFnZXJpYWwlMjBhY2NvdW50aW5nfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
        courseName: "Managerial Accounting",
        description:
          "Explore cost analysis and decision-making tools for managers.",
        duration: 7,
        durationType: "weeks",
        students: "2.2k+",
        rating: 4.5,
        price: "8,999",
      },
      {
        image:
          "https://plus.unsplash.com/premium_photo-1742902896890-ad9449aae2dc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGludmVzdGluZ3xlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
        courseName: "Introduction to Investing",
        description:
          "Understand stocks, bonds, and ETFs to start building your portfolio.",
        duration: 5,
        durationType: "weeks",
        students: "4k+",
        rating: 4.7,
        price: "6,999",
      },
      {
        image:
          "https://images.unsplash.com/photo-1554224155-3a58922a22c3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRheHxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
        courseName: "Tax Preparation Basics",
        description:
          "Get up to speed on filing taxes, deductions, and compliance for individuals.",
        duration: 4,
        durationType: "weeks",
        students: "2k+",
        rating: 4.4,
        price: "5,999",
      },
      {
        image:
          "https://file.eloquens.com/media/thumb/0/93/93301_1_768.png",
        courseName: "Financial Modeling with Excel",
        description:
          "Build models for forecasting and valuation using advanced Excel techniques.",
        duration: 9,
        durationType: "weeks",
        students: "2.5k+",
        rating: 4.9,
        price: "11,999",
      },
    ],
  },
  {
    icon: Palette,
    style: "text-fuchsia-500",
    category: "Creative & Multimedia",
    courses: [
      {
        image:
          "https://plus.unsplash.com/premium_photo-1661313635217-d8d87c14fb66?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3JhcGhpYyUyMGRlc2lnbiUyMGZ1bmRlbWVudGFsc3xlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
        courseName: "Graphic Design Fundamentals",
        description:
          "Create stunning visuals with Adobe Photoshop and Illustrator for beginners.",
        duration: 6,
        durationType: "weeks",
        students: "2.9k+",
        rating: 4.7,
        price: "8,999",
      },
      {
        image:
          "https://images.unsplash.com/photo-1682506457554-b34c9682e985?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmlkZW8lMjBlZGl0aW5nJTIwbWFzdGVyeXxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
        courseName: "Video Editing Mastery",
        description:
          "Edit professional videos using Premiere Pro, from cuts to effects.",
        duration: 8,
        durationType: "weeks",
        students: "1.9k+",
        rating: 4.6,
        price: "10,999",
      },
      {
        image:
          "https://images.unsplash.com/photo-1650421120432-178ec62cd849?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZGlnaXRhbCUyMHBob3RvZ3JhcGh5JTIwYmFzaWNzfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
        courseName: "Digital Photography Basics",
        description:
          "Capture and edit photos with your camera or phone for creative storytelling.",
        duration: 4,
        durationType: "weeks",
        students: "3.2k+",
        rating: 4.8,
        price: "6,999",
      },
      {
        image:
          "https://images.unsplash.com/photo-1527786560821-46037fab26b3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YWZ0ZXIlMjBlZmZlY3RzfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
        courseName: "Animation with After Effects",
        description:
          "Animate logos, text, and characters for motion graphics projects.",
        duration: 7,
        durationType: "weeks",
        students: "1.6k+",
        rating: 4.5,
        price: "9,999",
      },
      {
        image:
          "https://plus.unsplash.com/premium_photo-1661678097146-997ef05ba6a6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXVkaW8lMjBwcm9kdWN0aW9ufGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
        courseName: "Audio Production Essentials",
        description:
          "Record, mix, and master podcasts or music tracks using Audacity and Logic Pro.",
        duration: 5,
        durationType: "weeks",
        students: "2.1k+",
        rating: 4.7,
        price: "7,999",
      },
      {
        image:
          "https://plus.unsplash.com/premium_photo-1661326248013-3107a4b2bd91?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dWklMjB1eHxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
        courseName: "UI/UX Design Principles",
        description:
          "Design user-friendly interfaces for apps and websites with Figma.",
        duration: 6,
        durationType: "weeks",
        students: "2.8k+",
        rating: 4.9,
        price: "9,599",
      },
    ],
  },
  {
    icon: Wrench,
    style: "text-cyan-500",
    category: "Technician",
    courses: [
      {
        image:
          "https://plus.unsplash.com/premium_photo-1682086494838-6410429123a6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGVsZWN0cmljYWwlMjB3aXJpbmd8ZW58MHwwfDB8fHww&auto=format&fit=crop&q=60&w=600",
        courseName: "Basic Electrical Wiring",
        description:
          "Learn safe installation and troubleshooting of home electrical systems.",
        duration: 5,
        durationType: "weeks",
        students: "1.6k+",
        rating: 4.6,
        price: "7,599",
      },
      {
        image:
          "https://images.unsplash.com/photo-1560700105-7a3450fd2531?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGh2YWN8ZW58MHwwfDB8fHww&auto=format&fit=crop&q=60&w=600",
        courseName: "HVAC Repair Fundamentals",
        description:
          "Understand heating, ventilation, and AC systems for entry-level techs.",
        duration: 7,
        durationType: "weeks",
        students: "2.3k+",
        rating: 4.5,
        price: "9,599",
      },
      {
        image:
          "https://plus.unsplash.com/premium_photo-1661723379706-598b81f31652?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXV0b21vdGl2ZSUyMGRpYWdub3N0aWN8ZW58MHwwfDB8fHww&auto=format&fit=crop&q=60&w=600",
        courseName: "Automotive Diagnostics",
        description:
          "Use tools to identify and fix common car engine and electrical issues.",
        duration: 6,
        durationType: "weeks",
        students: "3k+",
        rating: 4.7,
        price: "8,599",
      },
      {
        image:
          "https://images.unsplash.com/photo-1563770660941-20978e870e26?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29tcHV0ZXIlMjBoYXJkd2FyZXxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
        courseName: "Plumbing Essentials",
        description:
          "Master pipe fitting, leak repairs, and basic installations.",
        duration: 4,
        durationType: "weeks",
        students: "1.9k+",
        rating: 4.4,
        price: "6,599",
      },
      {
        image:
          "https://images.unsplash.com/photo-1563770660941-20978e870e26?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29tcHV0ZXIlMjBoYXJkd2FyZXxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
        courseName: "Computer Hardware Repair",
        description: "Assemble, troubleshoot, and upgrade PCs and laptops.",
        duration: 5,
        durationType: "weeks",
        students: "2.7k+",
        rating: 4.8,
        price: "7,099",
      },
      {
        image:
          "https://plus.unsplash.com/premium_photo-1661326248013-3107a4b2bd91?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dWklMjB1eHxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
        courseName: "Welding Techniques for Beginners",
        description:
          "Learn MIG and TIG welding for metal fabrication projects.",
        duration: 8,
        durationType: "weeks",
        students: "1.2k+",
        rating: 4.6,
        price: "10,599",
      },
    ],
  },
  {
    icon: Briefcase,
    style: "text-indigo-400",
    category: "Business Management",
    courses: [
      {
        image:
          "https://plus.unsplash.com/premium_photo-1723579262605-bea45b9f5e1b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YnVzaW5lc3MlMjBwbGFuaW5nfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
        courseName: "Strategic Business Planning",
        description:
          "Develop long-term goals, SWOT analysis, and execution strategies.",
        duration: 6,
        durationType: "weeks",
        students: "2.5k+",
        rating: 4.7,
        price: "8,999",
      },
      {
        image:
          "https://plus.unsplash.com/premium_photo-1664474657823-328705da2bbf?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxlYWRlcnNoaXB8ZW58MHwwfDB8fHww&auto=format&fit=crop&q=60&w=600",
        courseName: "Leadership and Team Building",
        description:
          "Enhance skills in motivating teams, conflict resolution, and delegation.",
        duration: 5,
        durationType: "weeks",
        students: "3.8k+",
        rating: 4.8,
        price: "7,999",
      },
      {
        image:
          "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvamVjdCUyMG1hbmFnZW1lbnR8ZW58MHwwfDB8fHww&auto=format&fit=crop&q=60&w=600",
        courseName: "Project Management Basics",
        description:
          "Use Agile and Scrum to plan, track, and deliver projects on time.",
        duration: 7,
        durationType: "weeks",
        students: "4.1k+",
        rating: 4.6,
        price: "9,999",
      },
      {
        image:
          "https://plus.unsplash.com/premium_photo-1661284857549-21bba6eda0b8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHNtYWxsJTIwYnVzaW5lc3MlMjBtYXJrZXRpbmd8ZW58MHwwfDB8fHww&auto=format&fit=crop&q=60&w=600",
        courseName: "Marketing for Small Businesses",
        description:
          "Create effective campaigns using social media and email strategies.",
        duration: 4,
        durationType: "weeks",
        students: "2.9k+",
        rating: 4.5,
        price: "6,999",
      },
      {
        image:
          "https://plus.unsplash.com/premium_photo-1682129536759-7bc426c129ac?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8b3BlcmF0aW9ucyUyMG1hbmFnZW1lbnR8ZW58MHwwfDB8fHww&auto=format&fit=crop&q=60&w=600",
        courseName: "Operations Management",
        description:
          "Optimize processes, supply chains, and efficiency in daily operations.",
        duration: 8,
        durationType: "weeks",
        students: "2k+",
        rating: 4.7,
        price: "10,999",
      },
      {
        image:
          "https://images.unsplash.com/photo-1555859230-93d6c47fe787?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZW50ZXJwcmVuZXVyc2hpcCUyMGVzc2VudGlhbHN8ZW58MHwwfDB8fHww&auto=format&fit=crop&q=60&w=600",
        courseName: "Entrepreneurship Essentials",
        description:
          "From idea validation to launching your startup successfully.",
        duration: 6,
        durationType: "weeks",
        students: "3.5k+",
        rating: 4.9,
        price: "9,599",
      },
    ],
  },
  {
    icon: School,
    style: "text-blue-400",
    category: "Education Training",
    courses: [
      {
        image:
          "https://images.unsplash.com/photo-1555859230-93d6c47fe787?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZW50ZXJwcmVuZXVyc2hpcCUyMGVzc2VudGlhbHN8ZW58MHwwfDB8fHww&auto=format&fit=crop&q=60&w=600",
        courseName: "Teaching Methods for K-12",
        description:
          "Explore interactive lesson plans, classroom management, and student engagement.",
        duration: 6,
        durationType: "weeks",
        students: "1.8k+",
        rating: 4.7,
        price: "8,599",
      },
      {
        image:
          "https://plus.unsplash.com/premium_photo-1666299729298-c45849643135?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b25saW5lJTIwdGVhY2hpbmd8ZW58MHwwfDB8fHww&auto=format&fit=crop&q=60&w=600",
        courseName: "Online Course Creation",
        description:
          "Design and deliver engaging e-learning content using platforms like Moodle.",
        duration: 5,
        durationType: "weeks",
        students: "2.3k+",
        rating: 4.6,
        price: "7,599",
      },
      {
        image:
          "https://plus.unsplash.com/premium_photo-1661324498792-0fe8977062b7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y3VycmljdWx1bXxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
        courseName: "Curriculum Development",
        description:
          "Build effective syllabi aligned with learning objectives and assessments.",
        duration: 7,
        durationType: "weeks",
        students: "1.6k+",
        rating: 4.8,
        price: "9,599",
      },
      {
        image:
          "https://plus.unsplash.com/premium_photo-1661324498792-0fe8977062b7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y3VycmljdWx1bXxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
        courseName: "Special Education Strategies",
        description:
          "Support diverse learners with IEPs and inclusive teaching techniques.",
        duration: 4,
        durationType: "weeks",
        students: "2.1k+",
        rating: 4.5,
        price: "6,599",
      },
      {
        image:
          "https://images.unsplash.com/photo-1627691329038-1f850597fd26?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGVkdWNhdGlvbmFsJTIwdGVjaG5vbG9neSUyMHRvb2xzfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
        courseName: "Educational Technology Tools",
        description:
          "Integrate apps, VR, and AI into modern classrooms for better outcomes.",
        duration: 6,
        durationType: "weeks",
        students: "3k+",
        rating: 4.7,
        price: "8,999",
      },
      {
        image:
          "https://plus.unsplash.com/premium_photo-1664304019469-42280c6aaedb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YWR1bHQlMjBsZWFybmluZyUyMGFuZCUyMHRyYWluaW5nfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
        courseName: "Adult Learning and Training",
        description:
          "Facilitate workshops and corporate training with andragogy principles.",
        duration: 5,
        durationType: "weeks",
        students: "1.5k+",
        rating: 4.9,
        price: "7,999",
      },
    ],
  },
  {
    icon: Sparkles,
    style: "text-rose-400",
    category: "Beautician",
    courses: [
      {
        image:
          "https://images.unsplash.com/photo-1520173043194-dc6b2a237fee?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFrZXVwJTIwYXJ0aXN0JTIwYmFzaWNzfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
        courseName: "Makeup Artistry Basics",
        description:
          "Master foundation, contouring, and bridal looks with professional techniques.",
        duration: 4,
        durationType: "weeks",
        students: "2.1k+",
        rating: 4.8,
        price: "6,999",
      },
      {
        image:
          "https://images.unsplash.com/photo-1728949202477-bad2935775cb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2tpbmNhcmUlMjBhbmQlMjBmYWNpYWwlMjB0cmVhdG1lbnRzfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
        courseName: "Skincare and Facial Treatments",
        description:
          "Learn cleansing routines, masks, and anti-aging therapies for glowing skin.",
        duration: 5,
        durationType: "weeks",
        students: "1.8k+",
        rating: 4.6,
        price: "7,999",
      },
      {
        image:
          "https://images.unsplash.com/photo-1625038032200-648fbcd800d0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGFpcnN0eWxpbmclMjBlc3NlbnRpYWxzfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600png",
        courseName: "Hair Styling Essentials",
        description:
          "From cuts and colors to updos for everyday and event styling.",
        duration: 6,
        durationType: "weeks",
        students: "3.5k+",
        rating: 4.7,
        price: "8,999",
      },
      {
        image:
          "https://images.unsplash.com/photo-1625038032200-648fbcd800d0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGFpcnN0eWxpbmclMjBlc3NlbnRpYWxzfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
        courseName: "Nail Art and Manicure",
        description:
          "Design intricate nails, gel applications, and pedicure services.",
        duration: 3,
        durationType: "weeks",
        students: "2.9k+",
        rating: 4.5,
        price: "5,999",
      },
      {
        image:
          "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2Fsb29ufGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
        courseName: "Salon Business Management",
        description:
          "Run your beauty business, from client booking to marketing.",
        duration: 7,
        durationType: "weeks",
        students: "1.2k+",
        rating: 4.7,
        price: "9,999",
      },
      {
        image:
          "https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3BhfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
        courseName: "Advanced Esthetics",
        description:
          "Explore waxing, threading, and body treatments for full spa services.",
        duration: 5,
        durationType: "weeks",
        students: "2k+",
        rating: 4.9,
        price: "8,599",
      },
    ],
  },
  {
    icon: Scissors,
    style: "text-emerald-400",
    category: "Tailoring",
    courses: [
      {
        image:
          "https://images.unsplash.com/photo-1635790073975-ac99496914e3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2V3aW5nJTIwcGF0dGVybiUyMG1ha2luZ3xlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
        courseName: "Pattern Making Fundamentals",
        description:
          "Create custom patterns for dresses, shirts, and pants from measurements.",
        duration: 6,
        durationType: "weeks",
        students: "1.5k+",
        rating: 4.6,
        price: "7,999",
      },
      {
        image:
          "https://images.unsplash.com/photo-1533758488827-1ed0f9b03899?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2V3aW5nJTIwbWFjaGluZXxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
        courseName: "Sewing Machine Mastery",
        description:
          "Operate machines for straight seams, hems, and alterations efficiently.",
        duration: 4,
        durationType: "weeks",
        students: "2.3k+",
        rating: 4.7,
        price: "5,999",
      },
      {
        image:
          "https://plus.unsplash.com/premium_photo-1676586309272-a71efe476d4b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZHJlc3MlMjBtYWtpbmd8ZW58MHwwfDB8fHww&auto=format&fit=crop&q=60&w=600",
        courseName: "Dressmaking Techniques",
        description:
          "Construct full garments with zippers, collars, and linings.",
        duration: 7,
        durationType: "weeks",
        students: "1.8k+",
        rating: 4.5,
        price: "8,999",
      },
      {
        image:
          "https://plus.unsplash.com/premium_photo-1677695581031-504f432621f0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmFicmljJTIwc2VsbGVjdGlvbnxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
        courseName: "Fabric Selection and Care",
        description:
          "Choose materials, understand weaves, and maintain finished pieces.",
        duration: 3,
        durationType: "weeks",
        students: "3k+",
        rating: 4.8,
        price: "4,999",
      },
      {
        image:
          "https://plus.unsplash.com/premium_photo-1673535091134-c68006e40d3a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2V3aW5nJTIwYWx0ZXJhdGlvbnN8ZW58MHwwfDB8fHww&auto=format&fit=crop&q=60&w=600",
        courseName: "Custom Alterations",
        description:
          "Fit and modify ready-to-wear clothes for perfect tailoring.",
        duration: 5,
        durationType: "weeks",
        students: "2.1k+",
        rating: 4.6,
        price: "6,999",
      },
      {
        image:
          "https://images.unsplash.com/photo-1580657018950-c7f7d6a6d990?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHN1aXQlMjBkZXNpZ25pbmd8ZW58MHwwfDB8fHww&auto=format&fit=crop&q=60&w=600",
        courseName: "Advanced Couture Design",
        description:
          "Design bespoke outfits with embroidery and sustainable practices.",
        duration: 8,
        durationType: "weeks",
        students: "1.2k+",
        rating: 4.9,
        price: "10,999",
      },
    ],
  },
];

export default multiCourses;
