import Heading from "../assets/headings/Andie.png";
import PhoneIcon from "../assets/icons/phone.png";
import LinkedInIcon from "../assets/icons/linkedIn.png";
import EmailIcon from "../assets/icons/email.png";
import GitHubIcon from "../assets/icons/git.png";
import ResumeIcon from "../assets/icons/file-download.png";
import Resume from "../assets/Andie-Swift-Resume-2025.pdf";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export const ContactIcons = () => (
  <div className="flex flex-wrap justify-center gap-4 mt-3 m-10">
    <button
      type="button"
      onClick={() => window.open("tel:+19494397264")}
      className="text-white cursor-pointer focus:ring-4 hover:scale-105 transition-transform focus:outline-none focus:ring-green-300 rounded-lg p-2.5 text-center"
    >
      <img src={PhoneIcon} className="w-[50px]" alt="Phone icon" />
    </button>

    <button
      type="button"
      onClick={() => window.open("mailto:andieswift5@gmail.com")}
      className="text-white cursor-pointer focus:ring-4 focus:outline-none hover:scale-105 transition-transform focus:ring-green-300 rounded-lg p-2.5 text-center"
    >
      <img src={EmailIcon} className="w-[50px]" alt="Email icon" />
    </button>

    <button
      type="button"
      onClick={() =>
        window.open("https://www.linkedin.com/in/andieswift", "_blank")
      }
      className="text-white cursor-pointer focus:ring-4 focus:outline-none hover:scale-105 transition-transform focus:ring-green-300 rounded-lg p-2.5 text-center"
    >
      <img src={LinkedInIcon} className="w-[50px]" alt="LinkedIn icon" />
    </button>

    <button
      type="button"
      onClick={() => window.open("https://github.com/andieswift", "_blank")}
      className="text-white cursor-pointer focus:ring-4 focus:outline-none hover:scale-105 transition-transform focus:ring-green-300 rounded-lg p-2.5 text-center"
    >
      <img src={GitHubIcon} className="w-[50px]" alt="GitHub icon" />
    </button>

    <button
      type="button"
      onClick={() => window.open(Resume, "_blank")}
      className="text-white cursor-pointer focus:ring-4 focus:outline-none hover:scale-105 transition-transform focus:ring-green-300 rounded-lg p-2.5 text-center"
    >
      <img src={ResumeIcon} className="w-[50px]" alt="Resume icon" />
    </button>
  </div>
);

export const Name = () => {
  gsap.registerPlugin(useGSAP);
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.from(".nameImg", {
        duration: 2,
        rotate: 15,
        opacity: 0,
        ease: "bounce.out",
      });
    },
    { scope: container }
  );

  return (
    <div
      id="name"
      ref={container}
      className="flex flex-col lg:flex-row items-center justify-center my-10 xl:mx-32 mx-4 space-y-8 xl:space-y-0 xl:space-x-10"
    >
      <img
        src={Heading}
        className="nameImg w-3/4 sm:w-2/3 md:w-1/2 xl:w-1/2 p-4 cursor-pointer"
        alt="Andie Swift"
      />

      <div className="flex flex-col items-center text-center">
        <h1 className="text-lg sm:text-xl md:text-2xl font-semibold">
          SOFTWARE ENGINEER
        </h1>
        <ContactIcons />
      </div>
    </div>
  );
};
