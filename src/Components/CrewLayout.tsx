import React, { ReactNode } from "react";
import CrewLinks from "./CrewLinks";

interface CrewTypes {
  title: string;
  name: string;
  children: ReactNode;
}
const CrewLayout: React.FC<CrewTypes> = function ({ title, name, children }) {
  return (
    <div className="mx-10 flex h-[23rem] flex-col items-center justify-center gap-4 md:mx-16 lg:mx-22 lg:flex-row xl:mx-30 xl:gap-20">
      <div className="z-10 flex h-50 max-w-[600px] flex-col items-start gap-4 xl:gap-40">
        <div>
          <h3 className="font-bellefair mb-2 text-lg text-gray-400 uppercase sm:text-[20px] lg:text-[27px]">
            {title}
          </h3>
          <h1 className="font-bellefair mb-2 text-3xl uppercase sm:mb-4 sm:text-[36px] lg:text-[48px]">
            {name}
          </h1>
          <p className="text-xs leading-6 text-blue-300 sm:text-[12px] md:leading-7">
            {children}
          </p>
        </div>
        <CrewLinks />
      </div>
      <div>
        <div className="w-[250px] lg:w-[400px]">
          <img
            src={`/crew/image-${name.replace(" ", "-")}.webp`}
            alt={`image of ${name}`}
          />
        </div>
        <div className="fixed inset-0 bottom-0 z-10 bg-gradient-to-t from-blue-900 via-transparent to-transparent"></div>
      </div>
    </div>
  );
};

export default CrewLayout;
