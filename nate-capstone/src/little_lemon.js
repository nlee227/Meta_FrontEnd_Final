import React from "react";
import { Container, Row, Col, Image } from 'react-bootstrap';
import './index.css';

function Little_Lemon () {
    return (
        <>
        <Container>
            <Row className="little_lemon_description">
                <Col md={6} className='little_lemon_description_info'>
                    <h1 className="about_little_lemon_header">Little Lemon</h1>
                    <h2 className="about_little_lemon_location">Chicago</h2>
                    <div className="about_little_lemon_description">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    </div>
                </Col>
                <Col md={6} className="d-none d-sm-block"> {/* Remove position-relative from here */}
                <div className="image-container"> {/* The CSS handles positioning */}
                    <Image
                    alt="base_image"
                    src={'/icons_assets/restaurant chef B.jpg'}
                    className="base_image img-fluid"
                    />
                    <Image
                    alt="top_image"
                    src={'/icons_assets/restaurant.jpg'}
                    className="top_image img-fluid"
                    />
                </div>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Little_Lemon
