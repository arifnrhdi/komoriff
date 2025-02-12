import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import BlogList from "../utils/BlogList";
import NavbarMobile from "../NavbarMobile";

const Blog = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    document.title = "Arif - Blog";
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div
      className={`${darkMode && "dark"} bg-slate-200 text-zinc-900 transition-colors duration-200 dark:bg-zinc-900 dark:text-gray-300`}
    >
      <nav className="lg:px-auto sticky top-0 z-50 bg-slate-200/70 px-10 py-3 text-zinc-900 backdrop-blur-xl transition-colors duration-200 dark:bg-zinc-900/70 dark:text-gray-300">
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </nav>
      <div className="lg:px-auto container mx-auto px-5">
        <div className="mt-10 mb-12 xl:mx-12">
          <div className="mb-2 text-5xl font-bold lg:text-6xl">Blog</div>
          <div className="text-xl font-medium opacity-70 lg:text-2xl">
            The following are some things that I have done
          </div>
        </div>
        <div className="mx-2 xl:mx-12">
          <BlogList />
        </div>
      </div>
      <footer className="lg:px-auto container mx-auto px-5 pt-24">
        <Footer />
      </footer>
      <NavbarMobile darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </div>
  );
};

export default Blog;
