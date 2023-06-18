
// stylsheet
import "../Membership/style/Membership.scss";

// components
import Plans from "./components/Plans";

const Membership = () => {

  return (
    <main className="membership">
      <div className="membership_content">
        <div className="membership_slide">
          <div className="membership_marquee_slide">
            <div className="slide_content">
              <h1>MEMBERSHIP PLAN</h1>
              <h1>MEMBERSHIP PLAN</h1>
              <h1>MEMBERSHIP PLAN</h1>
              <h1>MEMBERSHIP PLAN</h1>
            </div>
          </div>
        </div>
        <div className="membership_header">
          <h3>MEMBERSHIP PRICING</h3>
          <h4>
            Join our exclusive membership today and gain access to a world of
            fitness opportunities
          </h4>
        </div>
        <Plans/>
      </div>
    </main>
  );
};

export default Membership;
