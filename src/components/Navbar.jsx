import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <a href="#" className="text-[43px] font-bold">
          Komoriff.
        </a>
        <div className="flex items-center gap-16">
          <div className="hidden md:flex gap-10 text-[22px] font-semibold">
            <Link to={"/"} target="_top" className="hover:opacity-70">
              Home
            </Link>
            <Link to={"/about"} target="_top" className="hover:opacity-70">
              About
            </Link>
            <Link to={"/blog"} target="_top" className="hover:opacity-70">
              Blog
            </Link>
          </div>
          <div className="hover:bg-slate-400/60 dark:hover:bg-zinc-600 flex items-center rounded cursor-pointer" onClick={toggleDarkMode}>
            {darkMode ? <FontAwesomeIcon icon={faSun} className="text-2xl p-3 px-[13px]" /> : <FontAwesomeIcon icon={faMoon} className="text-2xl p-3 px-4" />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
