// import { useState } from 'react';

// stylesheet
import "./styles/App.scss";

// react router dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import Home from "./Landing/Home";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <main>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route exact path="/" element={<Home />} />
            </Routes>
            {/* <Footer/> */}
          </BrowserRouter>
      </main>
    </>
  );
}

export default App;
