import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap"; 

function Specials() {
    return(
        <>
        <Container>
        <Row className="mb-2">
            <Col sm={12}>
                <h1 id="weekly-specials-header">This week's specials!</h1>
            </Col>
        </Row>
        <Row className="mb-4">
            <Col sm={12} className="d-flex justify-content-center">
                <Button className="online-menu-button btn-lg">Online Menu</Button>
            </Col>
        </Row>
        {/* The row below contains your three static cards */}
        <Row className="g-2 g-md-3 g-lg-4 d-flex justify-content-center">
            <Col lg={4} sm={12} className="seamless-spacing d-flex justify-content-center">
                <div className="card h-100 specials-card" alt="bruchetta">
                    <img
                    src="/icons_assets/bruchetta.svg"
                    className="card-img-top"
                    style={{
                    height: '200px',
                    objectFit: 'cover',
                    objectPosition: 'center'
                    }}
                    />
                    <div className="card-body d-flex flex-column">
                    <h5 className="card-title text-center">Bruchetta</h5>
                    <p className="card-text">Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and oive oil.</p>
                    <a href="#" className="btn add-to-cart btn-primary mt-auto">Add to Cart</a>
                    </div>
                </div>
            </Col>
            <Col lg={4} sm={12} className="seamless-spacing d-flex justify-content-center">
                <div className="card h-100 specials-card" alt="lemon-cake">
                    <img 
                    src="/icons_assets/lemon dessert.jpg" 
                    className="card-img-top"
                    style={{
                    height: '200px',
                    objectFit: 'cover',
                    objectPosition: 'center'
                    }}
                    />
                    <div className="card-body d-flex flex-column">
                    <h5 className="card-title text-center">Lemon Olive Oil Cake</h5>
                    <p className="card-text">Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and oive oil.</p>
                    <a href="#" className="btn add-to-cart btn-primary mt-auto">Add to Cart</a>
                    </div>
                </div>
            </Col>
            <Col lg={4} sm={12} className="seamless-spacing d-flex justify-content-center">
                <div className="card h-100 specials-card" alt="greek-salad">
                    <img 
                    src="/icons_assets/greek salad.jpg" 
                    className="card-img-top"
                    style={{
                    height: '200px',
                    objectFit: 'cover',
                    objectPosition: 'center'
                    }}
                    />
                    <div className="card-body d-flex flex-column">
                    <h5 className="card-title text-center">Greek Salad</h5>
                    <p className="card-text">Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and oive oil.</p>
                    <a href="#" className="btn add-to-cart btn-primary mt-auto">Add to Cart</a>
                    </div>
                </div>
            </Col>
        </Row>
        </Container>
      </>
    )
}

export default Specials;