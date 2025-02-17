import React from "react";
import gwejh from "../assets/img/tes.jpg";

const Jumbotrons = () => {
  return (
    <div className="flex flex-col items-center text-center xl:grid xl:grid-flow-col xl:grid-cols-12 xl:gap-28">
      <div className="xl:col-start-1 xl:col-end-7">
        <img
          src={gwejh}
          className="w-[18rem] rounded-3xl border-5 border-slate-50 xl:float-end xl:me-16 xl:w-[22rem]"
        />
      </div>
      <div className="mt-7 font-semibold xl:col-span-5 xl:col-start-7 xl:mt-0">
        <div className="hidden text-[33px] font-normal xl:block xl:text-start">
          Hello, i'm
        </div>
        <div className="mb-2 text-4xl font-extrabold tracking-wide md:text-6xl xl:text-start">
          Arif Nurhadi
        </div>
        <div className="mb-4 text-xl font-light md:text-2xl xl:text-start">
          A student at Gunadarma University majoring in Informatika who likes
          everything related to technology development.
        </div>
        <div className="flex flex-row items-center justify-center gap-8 xl:justify-start xl:gap-12 xl:text-start">
          <a
            href="/about"
            className="rounded-lg bg-zinc-900 px-4 py-1 text-xl text-gray-50 hover:opacity-85 lg:px-6 xl:mb-3 dark:bg-slate-200 dark:text-zinc-900"
          >
            About me
          </a>
        </div>
      </div>
    </div>
  );
};

export default Jumbotrons;
