import React from "react";
import gundar from "../assets/img/gunadarma.jpeg";
import { Link } from "react-router-dom";

const AboutGunadarma = () => {
  return (
    <div className="flex flex-col-reverse lg:grid lg:grid-cols-7">
      <div className="col-start-1 col-end-4 text-[1.27rem] font-semibold">
        <div className="mb-2 text-[26px] font-bold opacity-90 md:text-3xl">
          Sejarah
        </div>
        <div className="mb-8 font-normal">
          Universitas Gunadarma, yang lebih dikenal dengan sebutan Gunadarma,
          adalah salah satu perguruan tinggi swasta ternama di Indonesia.
          Didirikan pada tahun 1981 dengan nama awal Program Pendidikan Ilmu
          Komputer (PPIK), universitas ini berkembang pesat hingga resmi menjadi
          Universitas Gunadarma pada tahun 1996.
        </div>
        <div className="my-2 text-[26px] font-bold opacity-90 md:text-3xl">
          Lokasi dan Fasilitas
        </div>
        <div className="mb-8 font-normal">
          Gunadarma memiliki beberapa kampus yang tersebar di berbagai lokasi di
          Jabodetabek, termasuk Depok, Jakarta, Bekasi, dan Tangerang. Kampus
          ini dilengkapi dengan berbagai fasilitas modern seperti laboratorium
          komputer, perpustakaan digital, pusat penelitian, serta berbagai ruang
          kuliah yang nyaman.
        </div>
        <div className="my-2 text-[26px] font-bold opacity-90 md:text-3xl">
          Keunggulan Universitas Gunadarma
        </div>
        <div className="mb-8 font-normal">
          <ol className="list-disc space-y-4 pl-5">
            <li>
              <span className="font-semibold">
                Fokus pada Teknologi dan Inovasi
              </span>
              <p>
                Universitas ini dikenal sebagai salah satu kampus yang unggul
                dalam bidang teknologi dan bisnis. Dengan kurikulum yang
                berbasis teknologi, lulusan Gunadarma memiliki daya saing tinggi
                di dunia kerja.
              </p>
            </li>
            <li>
              <span className="font-semibold">Akreditasi dan Prestasi</span>
              <p>
                Universitas Gunadarma telah mendapatkan akreditasi{" "}
                <span className="font-bold">A</span> dari BAN-PT serta meraih
                berbagai penghargaan nasional dan internasional dalam bidang
                riset dan inovasi.
              </p>
            </li>
            <li>
              <span className="font-semibold">Kerja Sama dengan Industri</span>
              <p>
                Gunadarma menjalin kerja sama dengan berbagai perusahaan besar,
                baik dalam maupun luar negeri, untuk memberikan kesempatan
                magang dan kerja bagi mahasiswanya.
              </p>
            </li>
          </ol>
        </div>
        <div className="my-2 text-[26px] font-bold opacity-90 md:text-3xl">
          Informasi Lebih Lanjut
        </div>
        <div className="font-normal">
          <div className="mb-1">
            Informasi lebih lanjut mengenai Universitas Gunadarma:
          </div>
          <ol className="grid list-inside list-disc gap-1">
            <li>
              <Link
                className="underline"
                to="https://www.gunadarma.ac.id/"
                target="_blank"
              >
                Official Website
              </Link>
            </li>
            <li>
              <Link
                className="underline"
                to="https://www.gunadarma.ac.id/"
                target="_blank"
              >
                Studentsite
              </Link>
            </li>
            <li>
              <Link
                className="underline"
                to="https://www.gunadarma.ac.id/"
                target="_blank"
              >
                BAAK
              </Link>
            </li>
          </ol>
        </div>
      </div>
      <div className="col-span-3 col-end-8 mb-16 flex justify-center lg:mb-0 lg:justify-self-end">
        <img src={gundar} className="h-fit w-[36rem] rounded-xl" />
      </div>
    </div>
  );
};

export default AboutGunadarma;
