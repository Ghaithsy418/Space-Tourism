import { NavLink } from "react-router-dom";

function CrewLinks() {
  const className = "w-4 h-4 inline-block rounded-full bg-white";
  return (
    <ul className="z-10 flex items-center justify-center gap-8 text-transparent">
      <li>
        <NavLink
          to="/crew/crew1"
          className={({ isActive }) =>
            isActive ? className : className + " opacity-30"
          }
        >
          .
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/crew/crew2"
          className={({ isActive }) =>
            isActive ? className : className + " opacity-30"
          }
        >
          .
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/crew/crew3"
          className={({ isActive }) =>
            isActive ? className : className + " opacity-30"
          }
        >
          .
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/crew/crew4"
          className={({ isActive }) =>
            isActive ? className : className + " opacity-30"
          }
        >
          .
        </NavLink>
      </li>
    </ul>
  );
}

export default CrewLinks;
