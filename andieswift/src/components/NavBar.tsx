import Star from "../assets/star-regular.svg";

export const NavBar = () => {
  return (
    <nav className="nav-bar" role="navigation">
      <div className="nav-left">
        <img className="logo" src={Star} />
      </div>
      <div className="nav-right">
        <ul className="nav-links">
          <li>
            <a href="/">experience</a>
          </li>
          <li>
            <a href="/">about</a>
          </li>
          <li>
            <a href="/">contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
