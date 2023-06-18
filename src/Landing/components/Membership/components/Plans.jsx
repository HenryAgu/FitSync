import { useEffect } from "react";

// Animation On Scroll
import AOS from "aos";
import "aos/dist/aos.css";

// stylesheet
import "../style/Plans.scss";

// images
import bullet from "../images/Bullets.svg";
import bullet2 from "../images/Bullet2.svg";
import star from "../images/star.svg";

// Nav link
import { NavLink } from "react-router-dom";

const Plans = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <main className="plan" data-aos="flip-left">
      <div className="plan_card">
        <div className="plan_header">
          <h1>
            $0<span>/Month</span>
          </h1>
          <h4>Basic Plan</h4>
        </div>
        <div className="content">
          <div className="plan_content">
            <div className="plan_content_point">
              <img src={bullet} alt="bullet_icon" />
              <p>3 classes per month</p>
            </div>
          </div>
          <div className="plan_content">
            <div className="plan_content_point">
              <img src={bullet} alt="bullet_icon" />
              <p>Access to online classes</p>
            </div>
          </div>
          <div className="plan_content">
            <div className="plan_content_point">
              <img src={bullet} alt="bullet_icon" />
              <p>15 Health & Fitness Guidelines</p>
            </div>
          </div>
          <div className="plan_content">
            <div className="plan_content_point">
              <img src={bullet} alt="bullet_icon" />
              <p>Unlimited access to facilities</p>
            </div>
          </div>
        </div>
        <div className="plan_button">
          <NavLink to="/programs">
            <button>Choose Basic Plan</button>
          </NavLink>
        </div>
      </div>
      <div className="plan_card standard_card">
        <div className="plan_header standard_header">
          <div className="recommended">
            <img src={star} alt="star" />
            <p>Recommended</p>
          </div>
          <h1>
            $50<span>/Month</span>
          </h1>
          <h4 style={{color: "#ffffff"}}>Standard Plan</h4>
        </div>
        <div className="content standard_content">
          <div className="plan_content">
            <div className="plan_content_point">
              <img src={bullet2} alt="bullet_icon" />
              <p>All benefits of Basic Plan</p>
            </div>
          </div>
          <div className="plan_content">
            <div className="plan_content_point">
              <img src={bullet2} alt="bullet_icon" />
              <p>Priority access to group classes</p>
            </div>
          </div>
          <div className="plan_content">
            <div className="plan_content_point">
              <img src={bullet2} alt="bullet_icon" />
              <p>Access to major sessions</p>
            </div>
          </div>
          <div className="plan_content">
            <div className="plan_content_point">
              <img src={bullet2} alt="bullet_icon" />
              <p>Additional perks or services</p>
            </div>
          </div>
        </div>
        <div className="plan_button standard_button">
          <NavLink to="/programs">
            <button>Choose Standard Plan</button>
          </NavLink>
        </div>
      </div>
      <div className="plan_card">
        <div className="plan_header">
          <h1>
            $90<span>/Month</span>
          </h1>
          <h4>Premium Plan</h4>
        </div>
        <div className="content">
          <div className="plan_content">
            <div className="plan_content_point">
              <img src={bullet} alt="bullet_icon" />
              <p>All benefits of Premium Plan</p>
            </div>
          </div>
          <div className="plan_content">
            <div className="plan_content_point">
              <img src={bullet} alt="bullet_icon" />
              <p>Assistance with goal setting</p>
            </div>
          </div>
          <div className="plan_content">
            <div className="plan_content_point">
              <img src={bullet} alt="bullet_icon" />
              <p>Corporate wellness programs</p>
            </div>
          </div>
          <div className="plan_content">
            <div className="plan_content_point">
              <img src={bullet} alt="bullet_icon" />
              <p>Personalized workout plans</p>
            </div>
          </div>
        </div>
        <div className="plan_button">
          <NavLink to="/programs">
            <button>Choose Premium Plan</button>
          </NavLink>
        </div>
      </div>
    </main>
  );
};

export default Plans;
