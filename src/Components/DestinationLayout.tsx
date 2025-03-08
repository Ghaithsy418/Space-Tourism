import React, { ReactNode } from "react";
import DestinationLinks from "./DestinationLinks";
import { motion } from "motion/react";
import { motionPlanetVariant } from "../helpers/motionsVariants";
interface DestinationTypes {
  title: string;
  children: ReactNode;
  distance: string;
  travelTime: string;
}

const DestinationLayout: React.FC<DestinationTypes> = function ({
  title,
  children,
  distance,
  travelTime,
}) {
  return (
    <div className="flex w-[80vw] flex-col items-center justify-center gap-12 lg:flex-row lg:gap-36">
      <div>
        <motion.img
          className="w-48 lg:w-96"
          src={`/destination/image-${title}.webp`}
          alt={`image of ${title}`}
          loading="lazy"
          variants={motionPlanetVariant}
          animate="visible"
          initial="hidden"
        />
      </div>
      <div className="flex w-82 sm:w-96 flex-col items-center justify-center text-center lg:text-start">
        <DestinationLinks />
        <h1 className="font-bellefair text-7xl uppercase lg:text-[90px]">
          {title}
        </h1>
        <p className="mb-6 leading-6 text-blue-300 lg:mb-10">{children}</p>
        <hr className="mb-4 w-full bg-white opacity-20 lg:mb-8" />
        <div className="font-bellefair gap-8 sm:gap-0 flex sm:w-[80%] items-center justify-between text-xl uppercase lg:text-[24px]">
          <p className="flex flex-col items-start justify-center">
            <span className="text-sm text-blue-300">Avg, Distance</span>
            {distance}
          </p>
          <p className="flex flex-col items-start justify-center">
            <span className="text-sm text-blue-300">Est. Travel Time</span>
            {travelTime}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DestinationLayout;
