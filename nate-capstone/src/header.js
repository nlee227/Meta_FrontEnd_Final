import React from "react";
import { Container, Row, Col, Image, Navbar } from 'react-bootstrap';
import Nav from './nav.js';
import './index.css';

function Header() {
    return (
      <>
          <header className="py-3" style={{ backgroundColor: '#EDEFEE' }}>
            <Container>
              <Row className="align-items-center justify-content-center">
                <Col lg={12} className="p-0">
                  <Row className='align-items-center justify-content-center g-0'>
                    <Col id="logo" col="auto" md="auto" lg={2} className="d-flex justify-content-center">
                    <Image
                      src="/icons_assets/Logo.svg"
                      alt="company logo"
                      style= {{ maxHeight: '50px' }}
                      fluid
                    />
                    </Col>
                    <Col lg={2} className="d-none d-lg-block"></Col>
                    <Col id="navbar" col="auto" md="auto" lg={8} className="d-flex justify-content-center">
                      <Navbar expand="md" className="p-0">
                      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center p-0">
                        <Nav />
                      </Navbar.Collapse>
                      </Navbar>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </header>
      </>
    );
  }

  export default Header;