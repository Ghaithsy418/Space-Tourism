import { motionVariant } from "../helpers/motionsVariants";
import RoutesLayout from "./RoutesLayout";
import { motion } from "motion/react";
function Destination() {
  return (
    <motion.div
      variants={motionVariant}
      initial="hidden"
      animate="visible"
      className={`flex h-[46.6rem] flex-col items-center justify-end gap-6 bg-[url(/destination/background-destination-desktop.jpg)] bg-cover pb-16 lg:gap-20`}
    >
      <RoutesLayout num="01">Pick your destination</RoutesLayout>
    </motion.div>
  );
}

export default Destination;
