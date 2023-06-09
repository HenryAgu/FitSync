// import React from 'react'

// stylesheet
import "./style/Community.scss";

// Nav link
import { NavLink } from "react-router-dom";

// Images
import Image1 from "./images/community1.svg";
import Image2 from "./images/community2.svg";
import Image3 from "./images/community3.svg";

const Community = () => {
  return (
    <main className="community">
      <div className="inner_community">
        <div className="inner_community_left">
          <div className="left_header">
            <h2>JOIN THE COMMUNITY</h2>
            <p>
              Join Our Fitness Community Today. Embrace a supportive fitness
              community
            </p>
          </div>
          <div className="left_button">
            <NavLink to="/">
              <button>Join Now</button>
            </NavLink>
          </div>
        </div>
        <div className="inner_community_right">
          <div className="right_images">
            <img src={Image1} alt="Image" className="first_image"/>
            <img src={Image2} alt="Image" className="second_image"/>
            <img src={Image3} alt="Image" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Community;
