import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Cards = (props) => {
  return (
    <a href={props.href} target={props.target} className="relative overflow-hidden border border-zinc-900/10 dark:border-zinc-800 shadow-lg rounded-2xl hover:scale-[1.03] transition-transform group cursor-pointer">
      <div>
        <div className="flex absolute w-full h-[25rem] justify-center items-center bg-black/40 text-gray-100 font-semibold opacity-0 group-hover:opacity-100 duration-200 transition-all text-2xl rounded-xl">
          <div className="flex items-center">
            <span>View blog</span>
            <FontAwesomeIcon icon={faArrowRight} className="text-lg ms-2" />
          </div>
        </div>
        <img src={props.image} alt={props.alt} className="rounded-xl h-[25rem] w-full object-cover" />
      </div>
      <div className="p-4">
        <div className="text-2xl font-semibold">{props.judul}</div>
        <div className="text-xl mt-3 opacity-80">{props.children}</div>
      </div>
    </a>
  );
};

export default Cards;
