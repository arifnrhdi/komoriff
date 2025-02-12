import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faDiscord, faWhatsapp, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="xl:mx-12 mx-2">
      <div className="border-y-2 py-16 dark:border-y-gray-300">
        <div className="lg:flex lg:justify-around grid cols-1 gap-20 text-center">
          <div className="flex flex-col my-auto">
            <p className="text-4xl font-bold mb-2">Arif.</p>
            <p className="text-[22px]">Perumahan Griya Karawaci Blok C1 no 24</p>
            <p className="text-[22px]">Tangerang, Banten, Indonesia</p>
          </div>
          <div className="my-auto">
            <p className="text-4xl font-bold mb-2">Contact Me!</p>
            <div className="text-xl flex items-center justify-center">
              <p className="bg-zinc-900 text-gray-200 dark:bg-slate-200 dark:text-zinc-900 rounded-3xl lg:px-10 px-4 py-2">
                <FontAwesomeIcon icon={faEnvelope} className="me-2 text-[20px]" />
                arfnrhdi17@gmail.com
              </p>
            </div>
            <div className="mt-4 flex lg:justify-evenly items-center justify-center lg:gap-0 gap-8">
              <a href="https://www.instagram.com/arfnrhdi__?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" title="Instagram" target="_blank">
                <FontAwesomeIcon icon={faInstagram} className="text-3xl hover:scale-110 hover:transition-transform" />
              </a>
              <a href="https://discord.gg/7f2EF23kjB" title="Server Discord" target="_blank">
                <FontAwesomeIcon icon={faDiscord} className="text-[26px] hover:scale-110 hover:transition-transform" />
              </a>
              <a href="https://wa.me/6282114597915" title="Whatapp" target="_blank">
                <FontAwesomeIcon icon={faWhatsapp} className="text-3xl hover:scale-110 hover:transition-transform" />
              </a>
              <a href="https://www.linkedin.com/in/arif-nurhadii/" title="LinkedIn" target="_blank">
                <FontAwesomeIcon icon={faLinkedin} className="text-3xl hover:scale-110 hover:transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="py-6">
        <p className="text-center text-lg">copyright © 2025 komoriff.</p>
      </div>
    </div>
  );
};

export default Footer;
