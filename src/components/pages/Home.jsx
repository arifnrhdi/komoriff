import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import Jumbotrons from "../Jumbotrons";
import ProjectsList from "../utils/ProjectsList";
import Footer from "../Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import NavbarMobile from "../NavbarMobile";

const Home = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    document.title = "Arif - Home";
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div
      className={`${darkMode && "dark"} bg-slate-200 text-zinc-900 transition-colors duration-200 dark:bg-zinc-900 dark:text-gray-300`}
    >
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <div className="lg:px-auto container mx-auto px-5 pt-24 lg:px-20">
        <Jumbotrons />
        <div className="mx-2 mt-26 xl:mx-12">
          <div className="flex items-center justify-between">
            <p className="text-3xl font-bold md:text-4xl">Blog</p>
            <div>
              <a
                className="group flex items-center text-lg hover:scale-100 md:text-xl"
                href="/blog"
                target="_top"
              >
                <span className="text-base group-hover:underline group-hover:underline-offset-2 md:text-[18px]">
                  View all
                </span>
                <FontAwesomeIcon
                  className="ms-2 text-sm transition-transform duration-200 group-hover:translate-x-[0.3rem] md:text-[18px]"
                  icon={faArrowRight}
                />
              </a>
            </div>
          </div>
          <hr className="mt-5 mb-8 border-1 dark:border-gray-300" />
          <ProjectsList limit={3} />
        </div>
      </div>
      <Footer />
      <NavbarMobile darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </div>
  );
};

export default Home;
