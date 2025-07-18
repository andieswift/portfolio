import Heading from "../assets/headings/Andie.png";
import PhoneIcon from "../assets/icons/phone.png";
import LinkedInIcon from "../assets/icons/linkedIn.png";
import EmailIcon from "../assets/icons/email.png";
import GitHubIcon from "../assets/icons/git.png";
import ResumeIcon from "../assets/icons/file-download.png";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export const ContactIcons = () => (
  <div className="flex mt-3">
    <button
      type="button"
      className="text-white cursor-pointer focus:ring-4 focus:outline-none focus:ring-green-300 rounded-lg p-2.5 text-center "
    >
      <img src={PhoneIcon} className="w-[50px]" alt="phoneIcon" />
    </button>

    <button
      type="button"
      className="text-white cursor-pointer focus:ring-4 focus:outline-none focus:ring-green-300 rounded-lg p-2.5 text-center "
    >
      <img src={EmailIcon} className="w-[50px]" alt="phoneIcon" />
    </button>

    <button
      type="button"
      className="text-white cursor-pointer focus:ring-4 focus:outline-none focus:ring-green-300 rounded-lg p-2.5 text-center "
    >
      <img src={LinkedInIcon} className="w-[50px]" alt="phoneIcon" />
    </button>

    <button
      type="button"
      className="text-white cursor-pointer focus:ring-4 focus:outline-none focus:ring-green-300 rounded-lg p-2.5 text-center "
    >
      <img src={GitHubIcon} className="w-[50px]" alt="phoneIcon" />
    </button>

    <button
      type="button"
      className="text-white cursor-pointer focus:ring-4 focus:outline-none focus:ring-green-300 rounded-lg p-2.5 text-center "
    >
      <img src={ResumeIcon} className="w-[50px]" alt="phoneIcon" />
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
    <div id="name" className="flex my-10" ref={container}>
      <img
        src={Heading}
        className="nameImg p-10 w-1/2 cursor-pointer"
        alt="Andie Swift"
      />
      <div className="flex flex-col items-center my-30 mx-10">
        <h1>SOFTWARE ENGINEER</h1>
        <ContactIcons />
      </div>
    </div>
  );
};
