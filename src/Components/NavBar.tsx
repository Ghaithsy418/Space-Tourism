import { useNavigate } from "react-router-dom";
import ButtonLink from "./ButtonLink";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import MenuList from "./MenuList";

function NavBar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="absolute top-0 left-10 z-20 flex w-[90vw] items-center justify-between gap-4 p-6 md:p-0 lg:top-8 lg:left-20">
      <div className="cursor-pointer">
        <img
          src="/shared/logo.svg"
          alt="Logo Star"
          className="w-12"
          onClick={() => navigate("/home")}
        />
      </div>
      <ul className="hidden h-20 items-center justify-center gap-12 rounded-sm pr-8 pl-20 lg:pl-50 shadow-xl backdrop-blur-xl before:absolute before:left-[-400px] before:hidden before:h-[0.1px] before:w-[500px] before:bg-white before:opacity-30 before:content-[''] md:flex before:xl:block">
        <ButtonLink num="00" to="/home">
          Home
        </ButtonLink>
        <ButtonLink num="01" to="/destination">
          Destination
        </ButtonLink>
        <ButtonLink num="02" to="/crew">
          Crew
        </ButtonLink>
        <ButtonLink num="03" to="/technology">
          Technology
        </ButtonLink>
      </ul>
      <div
        className="block cursor-pointer md:hidden z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <HiX className="h-10 w-10" />
        ) : (
          <HiMenu className="h-10 w-10" />
        )}
      </div>
      <MenuList isOpen={isOpen} />
    </nav>
  );
}

export default NavBar;
