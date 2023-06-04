// import React from 'react'

// stylesheet
import "../Brand/style/Brand.scss";

// Images
import Adidas from "../Brand/images/Adidas.svg";
import Puma from "../Brand/images/Puma.svg";
import Nike from "../Brand/images/Nike.svg";
import Rebook from "../Brand/images/Rebook.svg";
import NewBalance from "../Brand/images/NewBalance.svg";

const Brand = () => {
  return (
    <main className="brands">
        <div className="logos">
            <div className="logos_slide">
              <img src={Adidas} alt="adidas logo" />
              <img src={Puma} alt="puma logo" />
              <img src={Nike} alt="Nike logo" />
              <img src={Rebook} alt="Rebook logo" />
              <img src={NewBalance} alt="NewBalance logo" />
            </div>
            <div className="logos_slide second_slide">
              <img src={Adidas} alt="adidas logo" />
              <img src={Puma} alt="puma logo" />
              <img src={Nike} alt="Nike logo" />
              <img src={Rebook} alt="Rebook logo" />
              <img src={NewBalance} alt="NewBalance logo" />
            </div>
        </div>
    </main>
  )
}

export default Brand