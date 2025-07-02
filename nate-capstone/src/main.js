import React from "react";
import Specials from "./specials";
import Reserve from "./reserve";
import './index.css';
import Testimonials from "./testimonials";

function Main() {
    return (
      <>
      <div className="reserve-section">
      <Reserve />
      </div>
      <div className="specials-section">
      <Specials />
      </div>
      <div className="testimonials-section">
      <Testimonials />
      </div>
      <div>
        <h1 id="about-us-main-header">Little Lemon</h1>
      </div>
      </>
    );
  }
  
  export default Main
  ;