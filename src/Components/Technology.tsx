import { motionVariant } from "../helpers/motionsVariants";
import RoutesLayout from "./RoutesLayout";
import { motion } from "motion/react";

function Technology() {
  return (
    <motion.div
      variants={motionVariant}
      initial="hidden"
      animate="visible"
      className={`flex h-[100vh] flex-col items-center justify-center gap-20 bg-[url(/technology/background-technology-desktop.jpg)] bg-cover`}
    >
      <RoutesLayout num="03">Space lunch 101</RoutesLayout>
    </motion.div>
  );
}

export default Technology;
