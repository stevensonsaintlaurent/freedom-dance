import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.jpg";
import { Link } from "react-scroll";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <div className="logo-title">
        <div>
          <img src={logo} alt="" className="logo" />
        </div>
        <div>
          <h1>Freedom Dance Vegas</h1>
        </div>
      </div>

      <ul>
        <li>
          <Link to="hero" smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="hero" smooth={true} offset={0} duration={500}>
            Program
          </Link>
        </li>
        <li>
          <Link to="hero" smooth={true} offset={0} duration={500}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="hero" smooth={true} offset={0} duration={500}>
            Classes
          </Link>
        </li>
        <li>
          <Link to="hero" smooth={true} offset={0} duration={500}>
            Testimonials
          </Link>
        </li>
        <li>
          <Link
            to="hero"
            smooth={true}
            offset={0}
            duration={500}
            className="btn"
          >
            Contact us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
