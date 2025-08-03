import { useState, useRef } from "react";
import Logo from "../assets/as-logo.svg";

export const NavBar = () => {
  const [isSelected, setSelected] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);
  const isManuallyScrolling = useRef(false);

  const handleClick = (id: string) => {
    setSelected(id);
    setIsOpen(false);
    isManuallyScrolling.current = true;

    setTimeout(() => {
      isManuallyScrolling.current = false;
    }, 800);
  };

  const navLinks = [
    { id: "experience", label: "experience" },
    { id: "tech-tools", label: "tech + tools" },
    { id: "about", label: "about" },
    { id: "contact", label: "contact" },
  ];

  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 sticky top-0 bg-[#A748D6] text-white z-50 ">
      <div className="flex items-center">
        <img src={Logo} alt="Logo" className="h-10" />
      </div>

      <ul className="hidden md:flex space-x-8 text-sm uppercase tracking-wider font-bold">
        {navLinks.map((link) => (
          <li key={link.id}>
            <a
              href={`#${link.id}`}
              onClick={() => handleClick(link.id)}
              className={`hover:text-green-400 transition ${
                isSelected === link.id ? "text-black" : ""
              }`}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden focus:outline-none"
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-[#A748D6] flex flex-col items-center justify-center space-y-8 z-40 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => handleClick(link.id)}
              className={`text-xl uppercase tracking-widest hover:text-green-400 transition ${
                isSelected === link.id ? "text-green-400" : ""
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};
