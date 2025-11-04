import { motion } from "framer-motion";

const HamburgerMenu = ({ isOpen, toggleMenu }) => {
  return (
    <div
      onClick={toggleMenu}
      className="w-12 h-12 flex flex-col justify-center items-center gap-1.5 cursor-pointer"
    >
      <motion.span
        animate={isOpen ? { rotate: 45, y: 10 } : { rotate: 0, y: 0 }}
        transition={{ type: "spring", stiffness: 160, damping: 8, mass: 0.4 }}
        className="block w-8 h-1 bg-white rounded-full"
      ></motion.span>

      <motion.span
        animate={{ opacity: isOpen ? 0 : 1 }}
        transition={{ duration: 0.2 }}
        className="block w-8 h-1 bg-white rounded-full"
      ></motion.span>

      <motion.span
        animate={isOpen ? { rotate: -45, y: -10 } : { rotate: 0, y: 0 }}
        transition={{ type: "spring", stiffness: 160, damping: 8, mass: 0.4 }}
        className="block w-8 h-1 bg-white rounded-full"
      ></motion.span>
    </div>
  );
};

export default HamburgerMenu;
