import { NavLink } from "react-router-dom";

function CrewLinks() {
  const className = "w-4 h-4 rounded-full bg-white";
  return (
    <ul className="flex items-center justify-center gap-8 text-transparent z-10">
      <NavLink
        to="/crew/crew1"
        className={({ isActive }) =>
          isActive ? className : className + " opacity-30"
        }
      >
        .
      </NavLink>
      <NavLink
        to="/crew/crew2"
        className={({ isActive }) =>
          isActive ? className : className + " opacity-30"
        }
      >
        .
      </NavLink>
      <NavLink
        to="/crew/crew3"
        className={({ isActive }) =>
          isActive ? className : className + " opacity-30"
        }
      >
        .
      </NavLink>
      <NavLink
        to="/crew/crew4"
        className={({ isActive }) =>
          isActive ? className : className + " opacity-30"
        }
      >
        .
      </NavLink>
    </ul>
  );
}

export default CrewLinks;
