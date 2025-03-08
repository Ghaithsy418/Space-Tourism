import React, { ReactNode } from "react";
import CrewLinks from "./CrewLinks";

interface CrewTypes {
  title: string;
  name: string;
  children: ReactNode;
}
const CrewLayout: React.FC<CrewTypes> = function ({ title, name, children }) {
  return (
    <div className="mx-10 flex h-[50vh] flex-col items-center justify-center gap-4 md:mx-16 lg:mx-22 xl:mx-30 lg:flex-row xl:gap-20">
      <div className="z-10 flex h-50 max-w-[600px] flex-col items-start gap-4 xl:gap-40">
        <div>
          <h3 className="font-bellefair mb-2 text-lg sm:text-[20px] text-gray-400 uppercase lg:text-[27px]">
            {title}
          </h3>
          <h1 className="font-bellefair mb-2 sm:mb-4 text-3xl sm:text-[36px] uppercase lg:text-[48px]">
            {name}
          </h1>
          <p className="md:leading-7 text-xs sm:text-[12px] leading-6 text-blue-300">{children}</p>
        </div>
        <CrewLinks />
      </div>
      <div>
        <img
          className="w-[250px] lg:w-[400px]"
          src={`../../public/crew/image-${name.replace(" ", "-")}.webp`}
          alt={`image of ${name}`}
        />
        <div className="absolute inset-0 bottom-0 bg-gradient-to-t from-blue-900 via-transparent to-transparent"></div>{" "}
      </div>
    </div>
  );
};

export default CrewLayout;
