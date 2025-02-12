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
    <div className={`${darkMode && "dark"} dark:bg-zinc-900 bg-slate-200 dark:text-gray-300 text-zinc-900 transition-colors duration-200`}>
      <nav className="sticky top-0 px-10 py-3 lg:px-auto z-50 bg-slate-200/70 backdrop-blur-xl dark:bg-zinc-900/70 dark:text-gray-300 text-zinc-900 transition-colors duration-200">
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </nav>
      <div className="container mx-auto px-5 lg:px-auto">
        <div className="mt-10 mb-12 xl:mx-12">
          <div className="lg:text-6xl text-5xl font-bold mb-2">Blog</div>
          <div className="lg:text-2xl text-xl opacity-70 font-medium">The following are some things that I have done</div>
        </div>
        <div className="xl:mx-12 mx-2">
          <BlogList />
        </div>
      </div>
      <footer className="container mx-auto px-5 lg:px-auto pt-24">
        <Footer />
      </footer>
      <NavbarMobile darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </div>
  );
};

export default Blog;
