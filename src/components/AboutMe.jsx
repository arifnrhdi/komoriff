import React from "react";
import logo from "../assets/img/logo-lepkom.png";
import gwejh from "../assets/img/Me crop.jpg";

const AboutMe = () => {
  return (
    <div>
      <div className="flex flex-col-reverse lg:grid lg:grid-cols-7">
        <div className="col-start-1 col-end-4 grid gap-4 text-lg font-normal md:text-[1.27rem]">
          <div>
            Hello, I'm Arif Nurhadi usually called Arif. I'm undergraduate
            student majoring in Informatika at Gunadarma University, starting
            from September 2022.
          </div>
          <div>
            I have a interest in both front-end and back-end development, and I
            also enjoy exploring UI/UX design. These skills I developed through
            self-learning alongside my academic.
          </div>
          <div>
            My interest in Computer Science began during high school and has
            grown steadily over time. This passion motivated me to explore
            various areas in technology, deepen my knowledge and improve my
            technical abilities. Along the way, I also learned how to
            collaborate in team, solve problems, and think critically.
          </div>
          <div>
            As a person, I tend to be quiet and introvert. In my daily life,
            I enjoy listening to musics, reading comics, playing games, and
            continuously learning about full-stack development. I'm aware that I
            sometimes struggle with learning highly complex topics quickly, but
            I see this as an opportunity to grow at my own pace while focusing
            on consistent progress.
          </div>
        </div>
        <div className="col-span-3 col-end-8 mb-16 flex justify-center lg:mb-0 lg:justify-end">
          <img
            src={gwejh}
            className="h-fit w-[18rem] rounded-xl md:w-[22rem]"
          />
        </div>
      </div>
      <div className="mt-20">
        <div className="text-[26px] font-bold md:text-4xl">Experience</div>
        <div className="flex flex-col gap-20 py-4">
          <div className="flex items-center gap-8 lg:items-start">
            <img
              src={logo}
              className="h-fit w-[8rem] rounded-3xl bg-gray-100 shadow-sm transition-colors"
            />
            <div className="flex w-2/3 flex-col gap-2">
              <table className="hidden w-full text-left text-lg lg:table">
                <thead className="border-b-1">
                  <tr>
                    <th>Institution Name</th>
                    <th>Started</th>
                    <th>Finished</th>
                  </tr>
                </thead>
                <tbody className="h-10">
                  <tr>
                    <td>LepKom</td>
                    <td>October 2024</td>
                    <td>-</td>
                  </tr>
                </tbody>
              </table>
              <div className="block lg:hidden">
                <div className="text-2xl font-bold tracking-wide md:text-3xl">
                  Lepkom
                </div>
                <div className="text-sm">October 2024 - Now</div>
              </div>
              <div className="flex flex-wrap gap-2 text-xs font-semibold text-gray-50 md:gap-4 md:text-lg">
                <div className="rounded-md bg-zinc-900 p-1 md:px-2 dark:bg-slate-200 dark:text-zinc-900">
                  Course Assistant
                </div>
                <div className="rounded-md bg-zinc-900 p-1 md:px-2 dark:bg-slate-200 dark:text-zinc-900">
                  Problem Solving
                </div>
                <div className="rounded-md bg-zinc-900 p-1 md:px-2 dark:bg-slate-200 dark:text-zinc-900">
                  Team Work
                </div>
                <div className="rounded-md bg-zinc-900 p-1 md:px-2 dark:bg-slate-200 dark:text-zinc-900">
                  Instructor
                </div>
                <div className="rounded-md bg-zinc-900 p-1 md:px-2 dark:bg-slate-200 dark:text-zinc-900">
                  Web
                </div>
                <div className="rounded-md bg-zinc-900 p-1 md:px-2 dark:bg-slate-200 dark:text-zinc-900">
                  DBMS
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
