import {useEffect} from 'react'

// Animation On Scroll
import AOS from "aos";
import "aos/dist/aos.css";

// stylesheet
import "../Hero/style/Hero.scss";

// Images
import swift from "../Hero/images/swift.png";

// Nav link
import { NavLink } from "react-router-dom";

// images
import join from "../Hero/images/join.png";

const Hero = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <main className="Hero">
      <div className="hero_header" data-aos="fade-right" data-aos-duration="1000">
        <div className="hero_header_left">
          <h1>FITNESS</h1>
        </div>
        <div className="hero_header_right">
          <div className="header_right_top">
            <h3>SWIFT</h3>
            <img src={swift} alt="swift_image" />
          </div>
          <h3>EXERCISING</h3>
        </div>
      </div>
      <div className="hero_elevate" data-aos="fade-left" data-aos-duration="1000">
        <div className="elevate_left">
          <div className="marquee_text">
            <p>EXERCISE</p>
          </div>
          <div className="inner_elevate">
            <div className="inner_elevate_header">
              <h3>ELEVATE YOUR</h3>
              <h3>WORKOUT</h3>
            </div>
            <div className="inner_elevate_content">
              <p>
                Soar to new heights with our groundbreaking fitness experience.
                Elevate your workout and unleash your inner hero. Ignite your
                potential, push your limits, and ascend to greatness.
              </p>
            </div>
            <div className="join_us">
              <NavLink to="/join_now" style={{ textDecoration: "none" }}>
                <img src={join} alt="join_icon" />
              </NavLink>
              <p>Join Now</p>
            </div>
          </div>
        </div>
        <div className="elevate_right"></div>
      </div>
    </main>
  );
};

export default Hero;
