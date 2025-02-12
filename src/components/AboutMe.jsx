import React from "react";
import logo from "../assets/img/logo-lepkom.png";
import gwejh from "../assets/img/tes.jpg";

const AboutMe = () => {
  return (
    <div>
      <div className="lg:grid lg:grid-cols-7 flex flex-col-reverse">
        <div className="col-start-1 col-end-4 text-[1.27rem] font-normal grid gap-4">
          <div>
            Halo, saya Arif, saya lahir di Tangerang pada 5 Oktober 2003. Saya adalah Mahasiswa Sarjana S1 jurusan Informatika pada Universitas Gunadarma, saya memulai
            kuliah saya pada September 2022 hingga sekarang.
          </div>
          <div>Saya memiliki kemampuan front-end development dan back-end development serta desain grafis UI UX yang saya pelajari secara otodidak selama kuliah.</div>
          <div>
            Saat menjalani sekolah menengah akhir, saya menemukan ketertarikan yang besar pada bidang IT. Minat ini terus tumbuh seiring berjalannya waktu dan mendorong
            saya untuk mengetahui pengetahuan seputar IT. Melalui kegiatan-kegiatan tersebut, saya tidak hanya mengembangkan pengetahuan dan keterampilan, tetapi juga
            belajar untuk bekerja sama dalam tim, menyelesaikan masalah, dan berpikir kritis.
          </div>
          <div>
            Dalam kehidupan sehari-hari, saya adalah pribadi yang sedikit pendiam. Saya senang mendengarkan musik, membaca komik, bermain game, dan belajar seputar
            full-stack development. Ada beberapa kekurangan yang saya miliki, salah satunya tidak suka belajar hal yang sangat kompleks yang membuat saya sulit untuk
            berkembang dengan cepat.
          </div>
        </div>
        <div className="col-span-3 col-end-8 flex lg:justify-end justify-center lg:mb-0 mb-16">
          <img src={gwejh} className="rounded-3xl border-5 border-slate-50 h-fit w-[22rem]" />
        </div>
      </div>
      <div className="mt-20">
        <div className="text-3xl font-bold mb-4">Experience</div>
        <div className="py-4 flex flex-col gap-20">
          <div className="flex gap-8 lg:items-start items-center">
            <img src={logo} className="rounded-3xl h-fit w-[8rem] bg-gray-100 shadow-sm transition-colors" />
            <div className="flex flex-col gap-2 w-2/3">
              <table className="lg:table hidden w-full text-left text-xl">
                <thead className="border-b-1">
                  <tr>
                    <th>Institusion Name</th>
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
              <div className="lg:hidden block">
                <div className="text-3xl font-bold tracking-wide">Lepkom</div>
                <div className="text-sm ">October 2024 - Now</div>
              </div>
              <div className="flex gap-4 lg:text-xl text-base flex-wrap">
                <div className="font-semibold p-1 px-2 rounded-md bg-zinc-900 dark:bg-slate-200 dark:text-zinc-900 text-gray-200">Assistant</div>
                <div className="font-semibold p-1 px-2 rounded-md bg-zinc-900 dark:bg-slate-200 dark:text-zinc-900 text-gray-200">Problem Solving</div>
                <div className="font-semibold p-1 px-2 rounded-md bg-zinc-900 dark:bg-slate-200 dark:text-zinc-900 text-gray-200">Team Work</div>
                <div className="font-semibold p-1 px-2 rounded-md bg-zinc-900 dark:bg-slate-200 dark:text-zinc-900 text-gray-200">Instructor</div>
                <div className="font-semibold p-1 px-2 rounded-md bg-zinc-900 dark:bg-slate-200 dark:text-zinc-900 text-gray-200">Web</div>
                <div className="font-semibold p-1 px-2 rounded-md bg-zinc-900 dark:bg-slate-200 dark:text-zinc-900 text-gray-200">DBMS</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
