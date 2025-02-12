import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBlog, faCircleInfo, faHouse } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const NavbarMobile = () => {
  return (
    <div className="md:hidden flex justify-center gap-2 items-center sticky bottom-2 mx-10 z-50">
      <div className="px-4 py-3 rounded-xl bg-slate-300/70 backdrop-blur-2xl dark:bg-zinc-800/70 dark:text-gray-300 text-zinc-900 transition-colors duration-200">
        <div className="xl:text-start justify-center xl:justify-start flex flex-row items-center gap-20">
          <Link to="/" target="_top" title="Home">
            <FontAwesomeIcon className="p-3 text-2xl rounded hover:bg-slate-400/60 dark:hover:bg-zinc-600 cursor-pointer" icon={faHouse} />
          </Link>
          <Link to="/about" target="_top" title="About">
            <FontAwesomeIcon className="p-3 text-2xl rounded hover:bg-slate-400/60 dark:hover:bg-zinc-600 cursor-pointer" icon={faCircleInfo} />
          </Link>
          <Link to="/blog" target="_top" title="Blog">
            <FontAwesomeIcon className="p-3 text-xl rounded hover:bg-slate-400/60 dark:hover:bg-zinc-600 cursor-pointer" icon={faBlog} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavbarMobile;
