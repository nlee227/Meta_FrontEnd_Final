import React from "react";
import { Container, Row, Col, Image } from 'react-bootstrap';
import Nav from './nav.js';

function Header() {
    return (
      <>
          <header className="py-3" style={{ backgroundColor: '#112240' }}>
            <Container>
              <Row className="align-items-center justify-content-center">
                <Col lg={12} className="p-0">
                  <Row className='align-items-center justify-content-center g-0'>
                    <Col col="auto" md="auto" lg={2} className="d-flex justify-content-center">
                    <Image
                      src="/icons_assets/Logo.svg"
                      alt="company logo"
                      style= {{ maxHeight: '50px' }}
                      fluid
                    />
                    </Col>
                    <Col lg={2} className="d-none d-lg-block"></Col>
                    <Col col="auto" md="auto" lg={7} className="d-flex justify-content-center">
                      <Nav />
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