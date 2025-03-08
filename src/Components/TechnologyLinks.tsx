import { NavLink } from "react-router-dom";

function TechnologyLinks() {
  const className =
    "flex w-12 h-12 lg:h-16 lg:w-16 justify-center items-center text-center rounded-full border-1 border-gray-600";
  return (
    <ul className="font-bellefair flex flex-col items-center justify-center gap-5 text-xl lg:text-[24px] mr-4">
      <NavLink
        to="/technology/tech1"
        className={({ isActive }) =>
          isActive ? className + " bg-white text-blue-900" : className
        }
      >
        1
      </NavLink>
      <NavLink
        to="/technology/tech2"
        className={({ isActive }) =>
          isActive ? className + " bg-white text-blue-900" : className
        }
      >
        2
      </NavLink>
      <NavLink
        to="/technology/tech3"
        className={({ isActive }) =>
          isActive ? className + " bg-white text-blue-900" : className
        }
      >
        3
      </NavLink>
    </ul>
  );
}

export default TechnologyLinks;
