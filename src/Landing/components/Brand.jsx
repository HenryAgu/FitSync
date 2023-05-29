// import React from 'react'

// stylesheet
import "../styles/Brand.scss";

// Images
import BrandImages from "../images/brands.svg";

const Brand = () => {
  return (
    <main className="brands">
        <marquee>
            <img src={BrandImages} alt="BrandImages" />
        </marquee>
    </main>
  )
}

export default Brand