import React from "react";
import { Nav as BootstrapNav, Container, NavLink, Row, Col, Image } from 'react-bootstrap';

function Footer() {
    return (
      <footer className="mt-auto py-3" style={{backgroundColor: "#edefee"}}>
        <Container>
          <Row>
            <Col lg={1}></Col>
            <Col lg={4} content-align-center>
              <Image
                src="/icons_assets/Mario and Adrian A.jpg"
                alt="company logo"
                style= {{ maxHeight: '100px' }}
                fluid
              />
            </Col>
            <Col lg={3}>
              <BootstrapNav className="d-flex flex-column">
                <NavLink href="#home" className="nav-item">Home</NavLink>
                <NavLink href="#about" className="nav-item">About</NavLink>
                <NavLink href="#menu" className="nav-item">Menu</NavLink>
                <NavLink href="#reservations" className="nav-item">Reservations</NavLink>
                <NavLink href="#order" className="nav-item">Order Online</NavLink>
                <NavLink href="#login" className="nav-item">Login</NavLink>
              </BootstrapNav>
            </Col>
            <Col lg={3}>
              <Row>
                <Col xs={12}>Contact info here</Col>
              </Row>
              <Row>
                <Col xs={12}>Social links here</Col>
              </Row>
            </Col>
            <Col lg={1}></Col>
          </Row>
        </Container>
      </footer>
    );
  }

  export default Footer;