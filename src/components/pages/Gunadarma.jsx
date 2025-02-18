import React, { useEffect } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import AboutGunadarma from "../AboutGunadarma";
import NavbarMobile from "../NavbarMobile";
import DarkMode from "../utils/DarkMode";

const Gunadarma = () => {
  const { darkMode, toggleDarkMode } = DarkMode();

  useEffect(() => {
    document.title = "Arif - Gunadarma University";
  }, []);

  return (
    <div
      className={`${darkMode && "dark"} bg-slate-200 text-zinc-900 transition-colors duration-200 dark:bg-zinc-900 dark:text-gray-300`}
    >
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <div className="lg:px-auto container mx-auto px-5 lg:px-20">
        <div className="mt-10 mb-12 xl:mx-12">
          <div className="mb-2 text-4xl font-bold lg:text-5xl">
            Gunadarma University
          </div>
        </div>
        <div className="xl:mx-12">
          <AboutGunadarma />
        </div>
      </div>
      <Footer />
      <NavbarMobile darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </div>
  );
};

export default Gunadarma;
