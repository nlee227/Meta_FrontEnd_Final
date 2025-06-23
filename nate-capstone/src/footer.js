import React from "react";
import { Nav as BootstrapNav, Container, NavLink, Row, Col, Image } from 'react-bootstrap';

function Footer() {
    return (
      <footer className="mt-auto py-3" style={{backgroundColor: "#edefee"}}>
        <Container>
          <Row className="align-items-center justify-content-center">
            <Col lg={1}></Col>

            <Col lg={4} md={12} xs={12} className="d-flex justify-content-center footer-image-col">
              <Image
                src="/icons_assets/Mario and Adrian A.jpg"
                alt="company logo"
                style= {{ maxHeight: '150px' }}
                fluid
              />
            </Col>

            <Col lg={3} md={6} xs={12} className="footer-nav">
              <BootstrapNav className="nav d-flex flex-column gap-1">
                <NavLink href="#home" className="nav-item">Home</NavLink>
                <NavLink href="#about" className="nav-item">About</NavLink>
                <NavLink href="#menu" className="nav-item">Menu</NavLink>
                <NavLink href="#reservations" className="nav-item">Reservations</NavLink>
                <NavLink href="#order" className="nav-item">Order Online</NavLink>
                <NavLink href="#login" className="nav-item">Login</NavLink>
              </BootstrapNav>
            </Col>

            <Col lg={3} md={6} xs={12} className="footer-contact justify-content-center">
              <Row>
                <Col xs={12}>
                  <div>Little Lemon Restaurant</div>
                  <div>1 Main Street</div>
                  <div>New York, NY 10010</div>
                  <div>142-234-6643</div>
                </Col>
              </Row>
              <Row className="d-flex footer-social mt-3">
                <Col xs={12} className="justify-content-center">
                  <a href="https://facebook.com" className="me-3 d-inline-block">
                    <img
                      src="/social/facebook-f-brands.svg"
                      alt="Facebook"
                      width="30"
                      height="30" 
                      style={{filter: 'brightness(0)'}}
                    />
                  </a>
                  <a href="https://instagram.com" className="me-3 d-inline-block">
                    <img src="/social/square-instagram-brands.svg"
                      alt="Instagram"
                      width="30"
                      height="30"
                      style={{filter: 'brightness(0)'}}
                    />
                  </a>
                  <a href="https://twitter.com" className="me-3 d-inline-block">
                    <img src="/social/square-twitter-brands.svg"
                      alt="Twitter"
                      width="30"
                      height="30"
                      style={{filter: 'brightness(0)'}}
                    />
                  </a>
                </Col>
              </Row>
            </Col>

            <Col lg={1}></Col>
          </Row>
        </Container>
      </footer>
    );
  }

  export default Footer;