import Heading from "../assets/headings/Contact.png";

import { ContactIcons } from "./Name";

export const Contact = () => {
  return (
    <div id="contact" className="m-3">
      <img src={Heading} className="mb-2 p-5 w-1/2" alt="Contact" />
      <div className="m-10 mb-20 flex flex-col items-center ">
        <h1>Let's Get In Touch!</h1>
        <div className="m-10">
          <ContactIcons />
        </div>
      </div>
    </div>
  );
};
