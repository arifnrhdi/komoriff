import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import Jumbotrons from "../Jumbotrons";
import BlogList from "../utils/BlogList";
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
    <div className={`${darkMode && "dark"} dark:bg-zinc-900 bg-slate-200 dark:text-gray-300 text-zinc-900 transition-colors duration-200`}>
      <nav className="sticky top-0 px-10 py-3 lg:px-auto z-50 bg-slate-200/70 backdrop-blur-xl dark:bg-zinc-900/70 dark:text-gray-300 text-zinc-900 transition-colors duration-200">
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </nav>
      <div className="container mx-auto px-5 lg:px-auto pt-24">
        <Jumbotrons />
        <div className="xl:mx-12 mx-2 mt-26">
          <div className="flex justify-between items-center">
            <p className="text-4xl font-bold">Blog</p>
            <div>
              <a className="flex items-center text-xl" href="/blog" target="_top">
                <span className="hover:underline hover:underline-offset-2">View all</span>
                <FontAwesomeIcon className="text-[18px] ms-2" icon={faArrowRight} />
              </a>
            </div>
          </div>
          <hr className="mt-5 mb-10 border-1 dark:border-gray-300" />
          <BlogList limit={3} />
        </div>
      </div>
      <footer className="container mx-auto px-5 lg:px-auto pt-24">
        <Footer />
      </footer>
      <NavbarMobile darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </div>
  );
};

export default Home;
