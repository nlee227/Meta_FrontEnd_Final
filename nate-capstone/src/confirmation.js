import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Confirmation() {
    return (
        <Container>
            <Row>
                <Col md={{ span: 8, offset: 2 }} className="text-center">
                    <h1 className="text-center mb-4" style={{ color: '#495E57', fontSize: '3rem' }}>
                        Thanks!
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: '#495E57' }}>
                        Your reservation has been confirmed. We look forward to seeing you!
                    </p>
                </Col>
            </Row>
        </Container>
    );
}

export default Confirmation;