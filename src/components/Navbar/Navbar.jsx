// import React from "react";

// stylesheet
import "../../styles/Navbar.scss";

// react icons
import { AiOutlineClose } from "react-icons/ai";

// Import Use Ref
import { useRef } from "react";

// Nav link
import { NavLink } from "react-router-dom";

// Images
import Logo from "../Navbar/images/Logo.svg";
import MobileLogo from "../Navbar/images/MobileLogo.svg";
import point from "../Navbar/images/point.svg";
import menu from "../Navbar/images/menu.svg";

const Navbar = () => {
  // Navbar open and close function
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.add("responsive_nav");
  };

  const closeNavbar = () => {
    navRef.current.classList.remove("responsive_nav");
  };

  return (
    <div className="Navbar">
      <div className="container">
        <header>
          <NavLink to="/" style={{ textDecoration: "none" }}>
            <div className="logo">
              <img src={Logo} alt="Logo" />
            </div>
            <div className="mobile_logo">
              <img src={MobileLogo} alt="MobileLogo" />
            </div>
          </NavLink>
          <nav ref={navRef}>
            <NavLink to="/" onClick={closeNavbar}>HOME</NavLink>
            <img src={point} alt="point" />
            <NavLink to="/services" onClick={closeNavbar}>SERVICES</NavLink>
            <img src={point} alt="point" />
            <NavLink to="/programs" onClick={closeNavbar}>PROGRAMS</NavLink>
            <img src={point} alt="point" />
            <NavLink to="/about_us" onClick={closeNavbar}>ABOUT US</NavLink>
            <img src={point} alt="point" />
            <NavLink to="/pricing" onClick={closeNavbar}>PRICING</NavLink>
            <img src={point} alt="point" className="last_point" />
            <NavLink to="/join_now" onClick={closeNavbar}>
              <button className="mobile_join_us">Join Now</button>
            </NavLink>
            <button
              className="nav-btn nav-close-btn"
              onClick={closeNavbar}
              style={{ color: "white", fontSize: "32px" }}
            >
              <AiOutlineClose />
            </button>
          </nav>
          <NavLink to="/join_now">
            <div className="join_now">
              <button>Join Now</button>
            </div>
          </NavLink>

          <button className="nav-btn" onClick={showNavbar}>
            <img src={menu} alt="menu" />
          </button>
        </header>
      </div>
    </div>
  );
};

export default Navbar;
