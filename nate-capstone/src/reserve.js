import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";

function Reserve() {
    return(
        <>
        <Container>
            <Row className="justify-content-center"> {/* This Row centers its columns horizontally */}
                <Col lg={4} sm={12} className="text-col d-flex flex-column align-items-left">
                    <h1 id="main-header">Little Lemon</h1>
                    <h2 id="location-header">Chicago</h2>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <Button className="align-self-center custom-button btn-lg responsive-button">Reserve a Table</Button>
                </Col>
                <Col lg={2} className="d-none d-lg-block"></Col> 
                <Col lg={4} sm={12} className="image-col d-flex justify-content-center d-none d-md-block">
                    <img src="/icons_assets/restauranfood.jpg" alt="Restaurant Food" className="responsive-image" />
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Reserve;