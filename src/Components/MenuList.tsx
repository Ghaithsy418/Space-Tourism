import { NavLink } from "react-router-dom";
import { motion } from "motion/react";
import { motionVariant } from "../helpers/motionsVariants";

function MenuList({ isOpen }: { isOpen: boolean }) {
  if (!isOpen) return null;
  return (
    <motion.div
      variants={motionVariant}
      initial="hidden"
      animate="visible"
      className="fixed top-0 left-0 z-40 h-full w-full place-items-center pt-[60%] md:pt-[20%] backdrop-blur-md"
    >
      <ul className="flex flex-col items-center justify-center gap-4 text-xl">
        <NavLink
          to="/home"
          className="w-38 rounded-sm bg-blue-900 px-8 py-4 text-center text-blue-300 shadow-md transition-all duration-300 hover:bg-indigo-950"
        >
          Home
        </NavLink>
        <NavLink
          to="/destination"
          className="w-38 rounded-sm bg-blue-900 px-8 py-4 text-center text-blue-300 shadow-md transition-all duration-300 hover:bg-indigo-950"
        >
          Destination
        </NavLink>
        <NavLink
          to="/crew"
          className="w-38 rounded-sm bg-blue-900 px-8 py-4 text-center text-blue-300 shadow-md transition-all duration-300 hover:bg-indigo-950"
        >
          Crew
        </NavLink>
        <NavLink
          to="/technology"
          className="w-38 rounded-sm bg-blue-900 px-8 py-4 text-center text-blue-300 shadow-md transition-all duration-300 hover:bg-indigo-950"
        >
          Technology
        </NavLink>
      </ul>
    </motion.div>
  );
}

export default MenuList;
