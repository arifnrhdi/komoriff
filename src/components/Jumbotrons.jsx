import React from "react";
import gwejh from "../assets/img/tes.jpg";
import { Link } from "react-router-dom";

const Jumbotrons = () => {
  return (
    <div className="xl:grid xl:grid-flow-col xl:grid-cols-12 xl:gap-28 items-center flex flex-col text-center">
      <div className="xl:col-start-1 xl:col-end-7">
        <img src={gwejh} className="rounded-3xl xl:ms-52 border-5 border-slate-50 xl:w-[26rem] w-[18rem]" />
      </div>
      <div className="xl:col-start-7 xl:col-span-5 font-semibold mt-7 xl:mt-0">
        <div className="text-[34px] font-normal hidden xl:block xl:text-start">Hello, i'm</div>
        <div className="xl:text-6xl text-5xl xl:text-start font-extrabold tracking-wide mb-2">Arif Nurhadi</div>
        <div className="xl:text-3xl text-2xl xl:text-start mb-4 font-light">
          A student at Gunadarma University majoring in Informatika who likes everything related to technology development.
        </div>
        <div className="xl:text-start justify-center xl:justify-start flex flex-row items-center xl:gap-12 gap-8">
          <Link to={'/about'} className="bg-zinc-900 text-gray-200 dark:bg-slate-200 dark:text-zinc-900 rounded-lg lg:px-6 px-4 py-1 text-2xl hover:opacity-85">About me</Link>
        </div>
      </div>
    </div>
  );
};

export default Jumbotrons;
