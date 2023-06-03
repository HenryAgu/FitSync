// import React from "react";

// components
import Brand from "./components/Brand/Brand";
import Hero from "./components/Hero/Hero";
import Membership from "./components/Membership/Membership";
import OurPrograms from "./components/OurProgram/OurPrograms";


const index = () => {
  return (
    <>
      <main>
        <Hero/>
        <Brand/>
        <OurPrograms/>
        <Membership/>
      </main>
    </>
  );
};

export default index;
