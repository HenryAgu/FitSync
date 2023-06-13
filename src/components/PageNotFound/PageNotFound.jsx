// import React from 'react'

// stylesheet
import "../PageNotFound/style/PageNotFound.scss";

// Images
import NotFoundDesktop from "../PageNotFound/images/NotFoundDesktop.jpg";
import NotFoundMobile from "../PageNotFound/images/NotFoundMobile.jpg";

// Nav link
import { NavLink } from "react-router-dom";

const PageNotFound = () => {
  return (
    <main className="not_found">
      <div className="inner_not_found">
        <h1>Oopss!!</h1>
        <img src={NotFoundDesktop} alt="Not Found Image" className="not_found_desktop"/>
        <img src={NotFoundMobile} alt="Not Found Image" className="not_found_mobile"/>
        <h3>THE PAGE YOU ARE LOOKING FOR COULD NOT BE FOUND</h3>
        <NavLink to="/">
          <button>Return to Homepage</button>
        </NavLink>
      </div>
    </main>
  );
};

export default PageNotFound;
