import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Cards = (props) => {
  return (
    <a
      href={props.href}
      target={props.target}
      className="group relative cursor-pointer overflow-hidden rounded-2xl border border-zinc-900/10 shadow-lg transition-transform hover:scale-[1.03] dark:border-zinc-800"
    >
      <div>
        <div className="absolute flex h-[16rem] w-full items-center justify-center rounded-xl bg-black/40 text-2xl font-semibold text-gray-100 opacity-0 transition-all duration-200 group-hover:opacity-100 md:h-[25rem]">
          <div className="flex items-center">
            <span>View blog</span>
            <FontAwesomeIcon icon={faArrowRight} className="ms-2 text-lg" />
          </div>
        </div>
        <img
          src={props.image}
          alt={props.alt}
          className="h-[16rem] w-full rounded-xl object-cover md:h-[25rem]"
        />
      </div>
      <div className="p-4">
        <div className="text-2xl font-semibold">{props.judul}</div>
        <div className="mt-3 text-base opacity-80 md:text-xl">
          {props.children}
        </div>
      </div>
    </a>
  );
};

export default Cards;
