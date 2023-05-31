// import React from 'react'

// stylesheet
import "../styles/Brand.scss";

// Images
import BrandImages from "../images/brands.svg";

const Brand = () => {
  return (
    <main className="brands">
        <div>
            <img src={BrandImages} alt="BrandImages" />
        </div>
    </main>
  )
}

export default Brand