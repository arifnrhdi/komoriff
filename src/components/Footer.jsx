import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faDiscord,
  faWhatsapp,
  faLinkedin,
  faGithub,
  faSpotify,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="lg:px-auto container mx-auto px-5 pt-24 lg:px-20">
      <div className="mx-2 xl:mx-12">
        <div className="border-y-2 py-16 dark:border-y-gray-300">
          <div className="cols-1 grid gap-20 text-center lg:flex lg:justify-around">
            <div className="my-auto flex flex-col">
              <p className="mb-1 text-3xl font-bold tracking-normal md:text-4xl">
                Arif.
              </p>
              <p className="text-lg md:text-[22px]">
                Tangerang, Banten, Indonesia
              </p>
            </div>
            <div className="my-auto">
              <p className="mb-2 text-3xl font-bold md:text-4xl">
                Let's Connect!
              </p>
              <div className="flex items-center justify-center text-lg md:text-xl">
                <p className="rounded-xl bg-zinc-900 px-4 py-1 text-gray-50 lg:px-6 dark:bg-slate-200 dark:text-zinc-900">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="me-2 text-lg md:text-[20px]"
                  />
                  arfnrhdi17@gmail.com
                </p>
              </div>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-6 lg:justify-evenly">
                <a
                  href="https://www.instagram.com/arfnrhdi__?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  title="Instagram"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="text-2xl hover:scale-110 hover:transition-transform md:text-3xl"
                  />
                </a>
                <a
                  href="https://discord.gg/7f2EF23kjB"
                  title="Server Discord"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={faDiscord}
                    className="text-[22px] hover:scale-110 hover:transition-transform md:text-[26px]"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/arif-nurhadii/"
                  title="LinkedIn"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="text-2xl hover:scale-110 hover:transition-transform md:text-[28px]"
                  />
                </a>
                <a
                  href="https://github.com/arifnrhdi"
                  title="GitHub"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="text-2xl hover:scale-110 hover:transition-transform md:text-[28px]"
                  />
                </a>
                <a
                  href="https://open.spotify.com/user/31rnjzdyyru4sghceam24jhdyizu?si=dd5cea48ac2f4fbd"
                  title="Spotify"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={faSpotify}
                    className="text-2xl hover:scale-110 hover:transition-transform md:text-[28px]"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="py-6">
          <p className="text-center text-base md:text-lg">
            copyright © 2025 komoriff.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
