import { useState, useRef } from "react";
import Logo from "../assets/as-logo.svg";

export const NavBar = () => {
  const [isSelected, setSelected] = useState<string>("");
  const isManuallyScrolling = useRef(false);

  const handleClick = (id: string) => {
    setSelected(id);
    isManuallyScrolling.current = true;

    setTimeout(() => {
      isManuallyScrolling.current = false;
    }, 800);
  };

  return (
    <nav className="nav-bar" role="navigation">
      <div className="nav-left">
        <img className="logo" src={Logo} alt="Logo" />
      </div>
      <div className="nav-right">
        <ul className="nav-links">
          <li>
            <a
              href="#experience"
              onClick={() => handleClick("experience")}
              className={isSelected === "experience" ? "active" : ""}
            >
              experience
            </a>
          </li>
          <li>
            <a
              href="#tech-tools"
              onClick={() => handleClick("tech-tools")}
              className={isSelected === "tech-tools" ? "active" : ""}
            >
              tech + tools
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={() => handleClick("about")}
              className={isSelected === "about" ? "active" : ""}
            >
              about
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={() => handleClick("contact")}
              className={isSelected === "contact" ? "active" : ""}
            >
              contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
