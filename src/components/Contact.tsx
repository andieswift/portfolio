import Heading from "../assets/headings/Contact.png";

import { ContactIcons } from "./Name";

export const Contact = () => {
  return (
    <div id="contact" className="m-3">
      <img
        src={Heading}
        className="w-3/4 sm:w-2/3 md:w-1/2 xl:w-1/3 p-4"
        alt="Contact"
      />
      <div className="m-10 mb-20 flex flex-col items-center ">
        <h1 className="text-lg sm:text-xl md:text-2xl">Let's Get In Touch!</h1>
        <div className="m-10">
          <ContactIcons />
        </div>
      </div>
    </div>
  );
};
