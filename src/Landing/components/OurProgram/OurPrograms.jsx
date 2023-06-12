import { useState } from "react";

// stylesheet
import "../OurProgram/style/OurPrograms.scss";

// react icons
import { AiOutlineArrowRight } from "react-icons/ai";

// Images
import Energize from "../OurProgram/images/energize.png";
import Play from "../OurProgram/images/Play.svg";

import yoga from "../OurProgram/images/yoga.png";
import weightLift from "../OurProgram/images/weightlift.png";
import cardio from "../OurProgram/images/cardio.png";
import flexibility from "../OurProgram/images/flexibility.png";

// Nav link
import { NavLink } from "react-router-dom";

const OurPrograms = () => {
  const [GymFeature, setGymFeature] = useState(0);
  const list = [
    {
      image: yoga,
      header: "YOGA",
      content:
        "Ignite your body and mind with our yoga experience. Unleash your inner strength, flexibility, and serenity.Discover the power of yoga and embrace a healthier, happier you",
    },
    {
      image: weightLift,
      header: "WEIGHTLIFTING",
      content:
        "Experience the transformative power of weightlifting. Our expertly designed programs and state-of-the-art equipment provide the perfect platform for you to build strength, sculpt your physique, and achieve remarkable results.",
    },
    {
      image: cardio,
      header: "CARDIO",
      content:
        "Ignite your heart and invigorate your body through cardio fitness. Our dynamic workouts and exhilarating routines will boost your endurance, torch calories, and leave you feeling energized.",
    },
    {
      image: flexibility,
      header: "FLEXIBILITY",
      content:
        "Enhance your flexibility, improve posture, and reduce the risk of injuries. Join us today and experience the freedom and fluidity that comes with increased flexibility.",
    },
  ];

  const GymFeature_styles = {
    backgroundImage: `url(${list[GymFeature].image})`,
  };

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
        <div className="program_content_right" style={GymFeature_styles}>
          <div className="content_right_top">
            <NavLink to="https://youtu.be/XIYuxAeKSM0" target="_blank">
              <img src={Play} alt="Play" />
            </NavLink>
          </div>
          <div className="content-right_bottom">
            <h1>{list[GymFeature].header}</h1>
            <p>{list[GymFeature].content}</p>
            <div className="right_navigator">
              <button onClick={()=> setGymFeature(0)}></button>
              <button onClick={()=> setGymFeature(1)}></button>
              <button onClick={()=> setGymFeature(2)}></button>
              <button onClick={()=> setGymFeature(3)}></button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default OurPrograms;
