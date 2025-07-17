import Heading from "../assets/headings/About.png";

export const About = () => {
  return (
    <div id="about" className="h-screen">
      <img src={Heading} className="p-10 w-1/3" alt="About" />
      <div className="mock-div"></div>
    </div>
  );
};
