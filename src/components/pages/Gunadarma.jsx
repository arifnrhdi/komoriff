import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import AboutGunadarma from "../AboutGunadarma";
import NavbarMobile from "../NavbarMobile";

const Gunadarma = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    document.title = "Arif - Gunadarma University";
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={`${darkMode && "dark"} dark:bg-zinc-900 bg-slate-200 dark:text-gray-300 text-zinc-900 transition-colors duration-200`}>
      <nav className="sticky top-0 px-10 py-3 lg:px-auto z-50 bg-slate-200/70 backdrop-blur-xl dark:bg-zinc-900/70 dark:text-gray-300 text-zinc-900 transition-colors duration-200">
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </nav>
      <div className="container mx-auto px-5 lg:px-auto">
        <div className="mt-10 mb-12 xl:mx-12">
          <div className="lg:text-6xl text-5xl font-bold mb-2">Universitas Gunadarma</div>
        </div>
        <div className="xl:mx-12 mx-2">
          <AboutGunadarma />
        </div>
      </div>
      <footer className="container mx-auto px-5 lg:px-auto pt-24">
        <Footer />
      </footer>
      <NavbarMobile darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </div>
  );
};

export default Gunadarma;
