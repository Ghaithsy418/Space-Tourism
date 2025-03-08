import { NavLink } from "react-router-dom";
import React from "react";

interface ButtonLinksProps {
  num: string;
  children: React.ReactNode;
  to: string;
}

const ButtonLink: React.FC<ButtonLinksProps> = function ({
  num,
  children,
  to,
}) {
  return (
    <NavLink
      className={({ isActive }) =>
        isActive
          ? `border-b-2 py-2 text-sm lg:text-md uppercase transition-all duration-100 hover:border-b-1`
          : `border-b-1 border-transparent py-2 text-sm uppercase transition-all duration-100 hover:border-white`
      }
      to={to}
    >
      <span className={`font-bold ${num ? "mr-0 md:mr-2" : ""}`}>{num}</span> {children}
    </NavLink>
  );
};

export default ButtonLink;
