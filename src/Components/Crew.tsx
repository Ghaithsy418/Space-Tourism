import { motionVariant } from "../helpers/motionsVariants";
import RoutesLayout from "./RoutesLayout";
import { motion } from "motion/react";
function Crew() {
  return (
    <motion.div
      variants={motionVariant}
      initial="hidden"
      animate="visible"
      className={`flex h-[100vh] flex-col items-center justify-center gap-30 bg-[url(/crew/background-crew-desktop.jpg)] bg-cover`}
    >
      <RoutesLayout num="02">Meet your crew</RoutesLayout>
    </motion.div>
  );
}

export default Crew;
