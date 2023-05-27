// stylesheet
import "../../styles/Navbar.scss";

// react icons
import { GrClose } from "react-icons/gr";

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
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
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
            <NavLink to="/">HOME</NavLink>
            <img src={point} alt="point" />
            <NavLink to="/services">SERVICES</NavLink>
            <img src={point} alt="point" />
            <NavLink to="/programs">PROGRAMS</NavLink>
            <img src={point} alt="point" />
            <NavLink to="about_us">ABOUT US</NavLink>
            <img src={point} alt="point" />
            <NavLink to="/pricing">PRICING</NavLink>
            <img src={point} alt="point" className="last_point"/>
            <NavLink to="/">
               <button className="mobile_join_us">Join Now</button>
            </NavLink>
            <button className="nav-btn nav-close-btn" onClick={showNavbar}>
              <GrClose style={{color: "#ff5c00", fontSize: "32px"}} />
            </button>
          </nav>
          <NavLink to="">
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
