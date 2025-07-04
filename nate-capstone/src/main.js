import React from "react";
import Specials from "./specials";
import Reserve from "./reserve";
import './index.css';
import Testimonials from "./testimonials";
import Little_Lemon from "./little_lemon";

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
      <div className="little-lemon-section">
      <Little_Lemon />
      </div>
      </>
    );
  }
  
  export default Main
  ;