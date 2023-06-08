// import React from "react";

// components
import Brand from "./components/Brand/Brand";
import Hero from "./components/Hero/Hero";
import Membership from "./components/Membership/Membership";
import OurPrograms from "./components/OurProgram/OurPrograms";
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
      </main>
    </>
  );
};

export default index;
