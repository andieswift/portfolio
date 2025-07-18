import Heading from "../assets/headings/Tech-Tools.png";
const images = import.meta.glob("../assets/tools/*.png", { eager: true });

export const TechTools = () => {
  console.log(images);
  // @ts-expect-error: its fine
  const imageList = Object.values(images).map((mod) => mod.default);
  return (
    <div id="tech-tools" className="m-2">
      <img src={Heading} className="p-10 w-[75%]" alt="Tech and Tools" />
      <div className="p-2 flex flex-wrap">
        {imageList.map((src, index) => (
          <img
            key={index}
            src={src}
            className="w-[10%] h-[10%]"
            alt={`Tool ${index}`}
          />
        ))}
      </div>
    </div>
  );
};
