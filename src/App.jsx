import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import Header from "./components/Header";
import GoToTopButton from "./components/GoToTopButton";
import Signup from "./components/Signup";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Resources from "./pages/Resources";
import Blog from "./pages/Blog";
import News from "./pages/News";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <main className="bg-[#111427] text-white overflow-x-hidden max-w-[1600px] mx-auto">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/news" element={<News />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/resources"
          element={
            <>
              <SignedIn>
                <Resources />
              </SignedIn>
              <SignedOut>
                <SignInButton>
                  <Signup/>
                </SignInButton>
              </SignedOut>
            </>
          }
        />
      </Routes>

      <Footer />
      <GoToTopButton />
    </main>
  );
};

export default App;
