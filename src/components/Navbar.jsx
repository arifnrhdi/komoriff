import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`lg:px-auto sticky top-0 z-50 px-5 py-4 text-zinc-900 backdrop-blur-2xl transition-colors duration-200 md:px-10 dark:text-gray-300 ${isScrolled ? "bg-slate-200/70 dark:bg-zinc-800/70" : "bg-slate-200/70 dark:bg-zinc-900/70"}`}
    >
      <div className="flex items-center justify-between">
        <a href="/" className="text-3xl font-bold md:text-[40px]">
          Komoriff.
        </a>
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
                className="p-3 px-[13px] text-xl md:text-2xl"
              />
            ) : (
              <FontAwesomeIcon
                icon={faMoon}
                className="p-3 px-4 text-xl md:text-2xl"
              />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
