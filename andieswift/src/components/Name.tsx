import Heading from "../assets/headings/Andie.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

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
      <div className="my-30 mx-10 ">
        <h1>SOFTWARE ENGINEER</h1>

        <div></div>
      </div>
    </div>
  );
};
