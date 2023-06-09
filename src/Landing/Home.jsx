// import React from "react";

// components
import Brand from "./components/Brand/Brand";
import Community from "./components/Community/Community";
import Hero from "./components/Hero/Hero";
import Membership from "./components/Membership/Membership";
import OurPrograms from "./components/OurProgram/OurPrograms";
import Team from "./components/Team/Team";
import Testimonial from "./components/Testimonial/Testimonial";


const index = () => {
  return (
    <>
      <main>
        <Hero/>
        <Brand/>
        <OurPrograms/>
        <Membership/>
        <Testimonial/>
        <Community/>
        <Team/>
      </main>
    </>
  );
};

export default index;
