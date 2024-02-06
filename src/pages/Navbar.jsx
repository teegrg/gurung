import { Link as ScrollLink } from "react-scroll";
import { useState, useEffect } from "react";
import "../style/navbar.css";
import logo from "./pic/logo.png";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div>
        <ScrollLink to="home" smooth={true} offset={-50}>
          <img className="logo" src={logo} alt="logo" />
        </ScrollLink>
      </div>
      <div className="nav__side">
        <ScrollLink to="home" smooth={true} offset={-50}>
          <div className="nav__home">Home</div>
        </ScrollLink>
        <ScrollLink to="about" smooth={true} offset={-50}>
          <div className="nav__about">About</div>
        </ScrollLink>
        <div className="nav__contact">
          <a
            href="https://docs.google.com/document/d/1sLeu8KKqFF4cGS-zL7xrqLFb4uryli55/edit?usp=sharing&ouid=110595949783449698615&rtpof=true&sd=true"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
