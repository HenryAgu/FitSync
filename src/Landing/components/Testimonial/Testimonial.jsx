// import React from 'react'

// stylsheet
import Slider from "../Testimonial/components/Slider";
import "./style/Testimonial.scss";

const Testimonial = () => {
  return (
    <main className="testimonial">
        <div className="testimonial_header">
            <h1>WHAT THEY SAY</h1>
            <h4>What customers are saying about the Life-Changing Fitness Platform.</h4>
        </div>
        <Slider/>
    </main>
  )
}

export default Testimonial