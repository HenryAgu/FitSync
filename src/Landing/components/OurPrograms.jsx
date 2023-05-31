// import React from 'react'

// stylesheet
import "../styles/OurPrograms.scss";

// react icons
import { AiOutlineArrowRight } from "react-icons/ai";

// Images
import Energize from "../images/energize.svg";

// Nav link
import { NavLink } from "react-router-dom";

const OurPrograms = () => {
  return (
    <main className="programs">
      <div className="program_header">
        <h3>OUR PROGRAMS</h3>
        <p>
          Discover your full potential with our diverse range of fitness
          programs
        </p>
      </div>
      <div className="program_content">
        <div className="program_content_left">
          <div className="energize_section">
            <div className="energize_top">
              <h1>Always Energize </h1>
              <h1>your Mind, Body </h1>
              <h1>& Soul</h1>
            </div>
            <div className="energize_img">
              <img src={Energize} alt="Energize" />
            </div>
            <NavLink to="" style={{ textDecoration: "none" }}>
              <div className="energize_button">
                <p>Join Now</p>
                <AiOutlineArrowRight className="button_arrow" />
              </div>
            </NavLink>
          </div>
          <div className="challenge_program">
            <div className="challenge_left"></div>
            <div className="challenge_right">
              <h1>200+</h1>
              <h3>Challenges &</h3>
              <h3>Programs</h3>
              <NavLink to="" style={{ textDecoration: "none" }}>
                <div className="challenge_button">
                  <p>Learn More</p>
                  <AiOutlineArrowRight className="button_arrow" />
                </div>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="program_content_right"></div>
      </div>
    </main>
  );
};

export default OurPrograms;
