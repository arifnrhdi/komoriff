import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import ProjectsList from "../utils/ProjectsList";
import ArticlesList from "../utils/ArticlesList";
import NavbarMobile from "../NavbarMobile";
import DarkMode from "../utils/DarkMode";

const Blog = () => {
  const { darkMode, toggleDarkMode } = DarkMode();

  useEffect(() => {
    document.title = "Arif - Blog";
  }, []);

  return (
    <div
      className={`${darkMode && "dark"} bg-slate-200 text-zinc-900 transition-colors duration-200 dark:bg-zinc-900 dark:text-gray-300`}
    >
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <div className="lg:px-auto container mx-auto px-5 lg:px-20">
        <div className="mt-10 mb-12 xl:mx-12">
          <div className="mb-2 text-4xl font-bold lg:text-5xl">Blog</div>
          <div className="text-base font-medium opacity-70 md:text-xl">
            The following are some things that I have done
          </div>
        </div>
        <div className="xl:mx-12">
          <div>
            <p className="text-3xl font-bold md:text-4xl">Projects</p>
            <hr className="mt-5 mb-8 border-1 dark:border-gray-300" />
            <ProjectsList />
          </div>
          <div className="mt-12">
            <p className="text-3xl font-bold md:text-4xl">Articles</p>
            <hr className="mt-5 mb-8 border-1 dark:border-gray-300" />
            <ArticlesList />
          </div>
        </div>
      </div>
      <Footer />
      <NavbarMobile darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </div>
  );
};

export default Blog;
