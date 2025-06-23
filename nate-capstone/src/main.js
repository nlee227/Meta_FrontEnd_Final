import React from "react";
import Specials from "./specials";
import Reserve from "./reserve";
import './index.css';
import { Button, Container, Row, Col } from "react-bootstrap";

function Main() {
    return (
      <>
      <div className="reserve-section">
      <Reserve />
      </div>
      <div className="specials-section">
      <Specials />
      </div>
      <div>
        <h1 id="testimonials-header">Testimonials</h1>
      </div>
      <div style={{marginBottom: "60px"}}></div>
      <div>
        <h1 id="about-us-main-header">Little Lemon</h1>
      </div>
      </>
    );
  }
  
  export default Main
  ;