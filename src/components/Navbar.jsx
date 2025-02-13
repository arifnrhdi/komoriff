import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <Link to={"/"} className="text-3xl font-bold md:text-[40px]">
          Komoriff.
        </Link>
        <div className="flex items-center gap-16">
          <div className="hidden gap-10 text-[20px] font-semibold md:flex">
            <a href="/" className="hover:opacity-70">
              Home
            </a>
            <a href="/about" className="hover:opacity-70">
              About
            </a>
            <a href="/blog" className="hover:opacity-70">
              Blog
            </a>
          </div>
          <div
            className="flex cursor-pointer items-center rounded hover:bg-slate-400/60 dark:hover:bg-zinc-600"
            onClick={toggleDarkMode}
          >
            {darkMode ? (
              <FontAwesomeIcon
                icon={faSun}
                className="p-3 px-[13px] text-2xl"
              />
            ) : (
              <FontAwesomeIcon icon={faMoon} className="p-3 px-4 text-2xl" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
