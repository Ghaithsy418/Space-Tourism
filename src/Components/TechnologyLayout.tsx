import React, { ReactNode, useEffect, useRef, useState } from "react";
import TechnologyLinks from "./TechnologyLinks";

interface TechnologyProps {
  name: string;
  children: ReactNode;
}

const TechnologyLayout: React.FC<TechnologyProps> = function ({
  name,
  children,
}) {
  const windowWidth = useRef<number>(window.innerWidth);
  const [image, setImage] = useState(
    `../../public/technology/image-${name.replace(" ", "-")}-portrait.jpg`,
  );

  useEffect(() => {
    const handleResize = () => {
      windowWidth.current = window.innerWidth;
      if (windowWidth.current <= 1269) {
        setImage(
          `/technology/image-${name.replace(" ", "-")}-landscape.jpg`,
        );
      } else {
        setImage(
          `/technology/image-${name.replace(" ", "-")}-portrait.jpg`,
        );
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [name]);
  return (
    <div className="ml-0 flex h-[25rem] flex-col-reverse items-center justify-center gap-4 sm:ml-8 md:ml-16 lg:ml-24 xl:ml-30 xl:flex-row">
      <div className="flex items-center justify-center gap-4 sm:gap-10">
        <TechnologyLinks />
        <div className="w-[70%] sm:w-[27rem]">
          <h3 className="font-bellefair mb-2 text-lg sm:text-xl lg:text-[26px] text-gray-500 uppercase">
            The terminology...
          </h3>
          <h1 className="font-bellefair mb-4 text-2xl sm:text-3xl lg:text-[48px] uppercase">{name}</h1>
          <p className="lg:leading-7 leading-6 text-xs sm:text-sm lg:text-base text-blue-300">{children}</p>
        </div>
      </div>
      <div>
        <img
          src={image}
          alt={`image of ${name}`}
          className="rounded-sm w-[350px] h-[150px] sm:w-[400px] sm:h-[200px] md:w-[600px] xl:w-[450px] xl:h-[550px] md:h-[300px] object-fill lg:object-cover"
        />
      </div>
    </div>
  );
};

export default TechnologyLayout;
