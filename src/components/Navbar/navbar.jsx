import { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`navbar ${show && "navbar--black"}`}>
      <img
        className="navbar__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
        alt="Netflix"
      />

      <ul className="navbar__links">
        <li>Home</li>
        <li>TV Shows</li>
        <li>Movies</li>
        <li>New & Popular</li>
        <li>
          <button className="logout-btn">Logout</button>
        </li>

      </ul>

      
    </div>
  );
}

export default Navbar;
