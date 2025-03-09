import { motionVariant } from "../helpers/motionsVariants";
import RoutesLayout from "./RoutesLayout";
import { motion } from "motion/react";
function Destination() {
  return (
    <motion.div
      variants={motionVariant}
      initial="hidden"
      animate="visible"
      className={`flex h-[46.6rem] flex-col items-center justify-center gap-6 lg:gap-20 bg-[url(/destination/background-destination-desktop.jpg)] bg-cover`}
    >
      <RoutesLayout num="01">Pick your destination</RoutesLayout>
    </motion.div>
  );
}

export default Destination;
