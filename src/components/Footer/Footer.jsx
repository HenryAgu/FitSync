// import React from 'react'

// stylesheet
import "../../styles/Footer.scss";

// Nav link
import { NavLink } from "react-router-dom";

// Images
import FooterLogo from "../Footer/images/FooterLogo.svg";
import Twitter from "../Footer/images/Twitter.svg";
import Instagram from "../Footer/images/Instagram.svg";
// import Youtube from "../Footer/images/YouTube.svg";
import LinkedIn from "../Footer/images/LinkedIn.svg";
import Facebook from "../Footer/images/Facebook.svg";

const Footer = () => {
  return (
    <footer>
      <div className="footer_left">
        <img src={FooterLogo} alt="Logo" />
        <h4>
          At FitSync, we are dedicated to transforming lives through fitness
        </h4>
        <div className="left_social_icons">
          <NavLink to="">
            <img src={Twitter} alt="Twitter" />
          </NavLink>
          <NavLink to=""><img src={Instagram} alt="Instagram" /></NavLink>
          {/* <NavLink to=""><img src={Youtube} alt="Youtube" /></NavLink> */}
          <NavLink to=""><img src={LinkedIn} alt="LinkedIn" /></NavLink>
          <NavLink to=""><img src={Facebook} alt="Facebook" /></NavLink>
        </div>
      </div>
      <div className="footer_middle">
        <div className="inner_middle">
          <NavLink to="" style={{ textDecoration: "none" }}>
            <p>Programs</p>
          </NavLink>
          <NavLink to="" style={{ textDecoration: "none" }}>
            <p>Testimonials</p>
          </NavLink>
          <NavLink to="" style={{ textDecoration: "none" }}>
            <p>Blog</p>
          </NavLink>
          <NavLink to="" style={{ textDecoration: "none" }}>
            <p>Store</p>
          </NavLink>
        </div>
        <div className="inner_middle">
          <NavLink to="" style={{ textDecoration: "none" }}>
            <p>Membership</p>
          </NavLink>
          <NavLink to="" style={{ textDecoration: "none" }}>
            <p>Community</p>
          </NavLink>
          <NavLink to="" style={{ textDecoration: "none" }}>
            <p>Contact Us</p>
          </NavLink>
          <NavLink to="" style={{ textDecoration: "none" }}>
            <p>FAQs</p>
          </NavLink>
        </div>
      </div>
      <div className="footer_right">
        <h3>JOIN US TODAY</h3>
        <p>Join us today and embark on a transformative fitness journey.</p>
        <NavLink to="">
          <button>Join Now</button>
        </NavLink>
      </div>
    </footer>
  );
};

export default Footer;
