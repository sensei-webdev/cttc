import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const GoToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () =>
      setVisible(window.scrollY > window.innerHeight * 1.2);

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 z-50 right-6 bg-purple-600 text-white p-3 rounded-full shadow-lg transition-all duration-500 hover:bg-purple-700 ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10 pointer-events-none"
      }`}
    >
      <ArrowUp size={28} />
    </button>
  );
};

export default GoToTopButton;
