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
      className="fixed top-0 left-0 z-40 h-full w-full place-items-center pt-[45%] backdrop-blur-md md:pt-[20%]"
    >
      <ul className="flex flex-col items-center justify-center gap-8 text-xl">
        {links.map((link) => (
          <li key={link}>
            <NavLink
              to={`/${link.toLowerCase()}`}
              className="block w-38 rounded-sm bg-blue-900 px-8 py-4 text-center text-blue-300 shadow-md transition-all duration-300 hover:bg-indigo-950"
            >
              {link}
            </NavLink>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

const links = ["Home", "Destination", "Crew", "Technology"];

export default MenuList;
