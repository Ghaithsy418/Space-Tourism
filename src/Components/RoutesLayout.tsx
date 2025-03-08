import React, { ReactNode } from "react";
import { Outlet } from "react-router-dom";
import { motion } from "motion/react";
import { motionChildrenTop } from "../helpers/motionsVariants";

const RoutesLayout: React.FC<{
  num: string;
  children: ReactNode;
}> = function ({ num, children }) {
  return (
    <>
      <motion.h2
        variants={motionChildrenTop}
        initial="hidden"
        animate="visible"
        className="mr-[80px] text-xl tracking-wider uppercase sm:mr-[250px] md:mr-[450px] lg:mr-[650px]"
      >
        <span className="mr-4 text-2xl font-bold text-gray-500">{num}</span>
        {children}
      </motion.h2>
      <Outlet />
    </>
  );
};

export default RoutesLayout;
