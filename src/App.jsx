// import { useState } from 'react';

// stylesheet
import "./styles/App.scss";

// react router dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import Home from "./Landing/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <main>
        <BrowserRouter>
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/*" element={<PageNotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </main>
    </>
  );
}

export default App;
