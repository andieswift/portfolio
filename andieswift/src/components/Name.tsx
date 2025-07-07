import Heading from "../assets/headings/Andie.png";

export const Name = () => {
  return (
    <div id="name" className="flex my-10">
      <img src={Heading} className="p-10 w-1/2" />
      <div className="my-30 mx-10 ">
        <h1>SOFTWARE ENGINEER</h1>
        <h2 className="mt-4 text-2xl">combining art and code since 2020</h2>
        <div></div>
      </div>
    </div>
  );
};
