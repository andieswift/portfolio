import Heading from "../assets/headings/About.png";
import Andie from "../assets/Selfie.png";

export const About = () => {
  return (
    <div id="about" className="">
      <img src={Heading} className="p-10 w-1/3" alt="About" />
      <div className="flex mb-10 p-2">
        <img src={Andie} className="w-1/3 h-1/3" alt="About" />
        <h1 className="text-left">
          Hey! Blah Blah Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. In scelerisque egestas rutrum. Maecenas eu rutrum ex. Cras
          vehicula enim viverra.{" "}
        </h1>
      </div>
    </div>
  );
};
