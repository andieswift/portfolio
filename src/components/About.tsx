import Heading from "../assets/headings/About.png";
import Andie from "../assets/Selfie.png";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export const About = () => {
  gsap.registerPlugin(SplitText, ScrollTrigger, useGSAP);

  const container = useRef(null);

  useGSAP(
    () => {
      const split = new SplitText(".about-text", {
        type: "chars, words",
        charsClass: "char",
        wordsClass: "word",
      });

      gsap.set(".about-text", { opacity: 1 });

      gsap.from(split.chars, {
        yPercent: () => gsap.utils.random(-150, 150),
        xPercent: () => gsap.utils.random(-150, 150),
        duration: 0.6,
        ease: "power3.out",
        stagger: {
          from: "random",
          amount: 0.6,
        },
        scrollTrigger: {
          trigger: ".about-text",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: container }
  );

  return (
    <div
      id="about"
      className="flex flex-col items-center md:items-start"
      ref={container}
    >
      <img
        src={Heading}
        className="p-4 md:p-10 sm:w-1/2 md:w-1/3 md:1/3"
        alt="About"
      />
      <div className="flex flex-col w-full md:flex-row items-center md:items-start mb-10 p-2">
        <img
          src={Andie}
          className="w-2/3 sm:w-1/2 md:w-1/3 p-4"
          alt="Andie Portrait"
        />
        <p className="about-text text-lg md:text-left md:text-[2.5rem] text-center leading-relaxed">
          Hey, thanks for checking out my website! I’m Andie, a software
          engineer who favors the frontend. Outside of dev work, you can find me
          drawing (I made all these assets), reading, starting a new craft, or
          hanging with my dog, Alaska. This site is work in progress so stay
          tuned for some fun updates.{" "}
        </p>
      </div>
    </div>
  );
};
