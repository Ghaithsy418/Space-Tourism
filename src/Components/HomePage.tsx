import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import {
  motionVariant,
  motionChildrenBottom,
  motionChildrenLeft,
} from "../helpers/motionsVariants";

function HomePage() {
  const navigate = useNavigate();

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={motionVariant}
      className="flex h-[100vh] w-[100vw] items-center justify-center bg-[url(/home/background-home-mobile.jpg)] md:bg-[url(/home/background-home-tablet.jpg)] bg-cover bg-center bg-no-repeat text-center lg:items-end lg:bg-[url(/home/background-home-desktop.jpg)] lg:text-start"
    >
      <div className="mx-40 mb-0 flex flex-col items-center justify-center lg:mb-26 lg:flex-row lg:justify-between">
        <motion.div
          variants={motionChildrenLeft}
          className="w-[80vw] md:w-[70%] lg:w-[40%] text-center lg:text-start"
        >
          <h2 className="mb-4 text-md sm:text-[18px] md:text-[20px] tracking-wide text-blue-300 uppercase lg:mb-6 xl:text-2xl">
            So, you want to travel to
          </h2>
          <h1 className="font-bellefair mb-2 text-7xl md:text-[96px] lg:mb-6 xl:text-9xl">
            SPACE
          </h1>
          <p className="mb-10 text-sm leading-6 text-blue-300 md:text-[14px] lg:mb-0 lg:leading-7">
            Let's face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we'll give you a truly out of this
            world experience!
          </p>
        </motion.div>
        <motion.div variants={motionChildrenBottom}>
          <button
            onClick={() => navigate("/destination")}
            className="relative z-10 h-48 w-48 cursor-pointer rounded-full bg-white text-center text-2xl text-blue-900 uppercase after:absolute after:top-[-60px] after:left-[-60px] after:z-[-10] after:h-78 after:w-78 after:rounded-full after:bg-transparent after:opacity-0 after:transition-all after:duration-400 after:content-[''] hover:after:bg-white hover:after:opacity-30 lg:h-56 lg:w-56 lg:after:h-86 lg:after:w-86"
          >
            Explore
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default HomePage;
