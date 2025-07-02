import { Container, Row, Col, Card } from "react-bootstrap";
import './index.css';

function Testimonials () {
    return(
    <>
        <Container>
            <Row className= 'align-items-center'>
                <Col sm={12} className="d-flex justify-content-center">
                    <h1 id="testimonials-header">Customer Testimonials</h1>
                </Col>
            </Row>
            <Row>
                <div class="testimonials-container">
                <Col>
                    <div class="testimonials-box">
                    <div class="customer-name">Sarah Johnson</div>
                    <div class="rating-section">
                        <span class="rating-label">Rating:</span>
                        <span class="rating-value">4.5</span>
                        <span class="stars">★★★★★</span>
                    </div>
                    <div class="quote">The food was amazing! Try the Feta!</div>
                    </div>
                </Col>
                <Col>
                    <div class="testimonials-box">
                    <div class="customer-name">Torres Alvero</div>
                        <div class="rating-section">
                        <span class="rating-label">Rating:</span>
                        <span class="rating-value">4.8</span>
                        <span class="stars">★★★★★</span>
                    </div>
                    <div class="quote">The lamb is amazing</div>
                    </div>
                </Col>
                <Col>
                    <div class="testimonials-box">
                    <div class="customer-name">John Smith</div>
                        <div class="rating-section">
                        <span class="rating-label">Rating:</span>
                        <span class="rating-value">5</span>
                        <span class="stars">★★★★★</span>
                    </div>
                    <div class="quote">Best service I've ever had!</div>
                    </div>
                </Col>
                <Col>
                    <div class="testimonials-box">
                    <div class="customer-name">Joe Johnson</div>
                        <div class="rating-section">
                        <span class="rating-label">Rating:</span>
                        <span class="rating-value">5</span>
                        <span class="stars">★★★★★</span>
                    </div>
                    <div class="quote">So impressed!!</div>
                    </div>
                </Col>
                </div>
            </Row>
        </Container>
    </>
    )
}

export default Testimonials;