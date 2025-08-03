import Heading from "../assets/headings/Tech-Tools.png";
import gsap from "gsap";
import { InertiaPlugin } from "gsap/InertiaPlugin";
import { useRef, useEffect } from "react";

gsap.registerPlugin(InertiaPlugin);

const images = import.meta.glob("../assets/tools/*.png", { eager: true });

export const TechTools = () => {
  // @ts-expect-error: it's fine
  const imageList = Object.values(images).map((mod) => mod.default);

  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, dx: 0, dy: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { x, y } = mouseRef.current;
      mouseRef.current.dx = e.clientX - x;
      mouseRef.current.dy = e.clientY - y;
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const mediaEls = container.querySelectorAll(".media");

    mediaEls.forEach((el) => {
      const img = el.querySelector("img");
      if (!img) return;

      el.addEventListener("mouseenter", () => {
        const { dx, dy } = mouseRef.current;

        // @ts-expect-error: it's fine
        const tl = gsap.timeline({ onComplete: () => tl.kill() });
        tl.timeScale(1.2);

        tl.to(img, {
          inertia: {
            x: { velocity: dx * 30, end: 0 },
            y: { velocity: dy * 30, end: 0 },
          },
        });

        tl.fromTo(
          img,
          { rotate: 0 },
          {
            duration: 0.4,
            rotate: (Math.random() - 0.5) * 30,
            yoyo: true,
            repeat: 1,
            ease: "power1.inOut",
          },
          "<"
        );
      });
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div id="tech-tools" className="m-2" ref={containerRef}>
      <img
        src={Heading}
        className="p-10 w-full sm:w-3/4 md:w-3/5 xl:w-1/2"
        alt="Tech and Tools"
      />
      <div className="columns-3 md:columns-5 gap-4 mx-10 p-10 mwg_effect000">
        {imageList.map((src, index) => (
          <div
            key={index}
            className="mb-4 break-inside-avoid flex justify-center media"
          >
            <img
              src={src}
              className="w-[50%] h-[50%] object-cover rounded transition-transform duration-200"
              alt={`Tool ${index}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
