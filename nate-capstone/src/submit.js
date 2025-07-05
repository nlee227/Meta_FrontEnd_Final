import React from "react";
import { Button, Row, Col } from "react-bootstrap";
import './index.css';

function Submit({ onSubmit }) {
    return(
        <Row className="mb-4 justify-content-center">
            <Col md={6} className="text-center">
                <Button 
                    type="submit"
                    size="lg"
                    className="custom-button px-5 py-3"
                    onClick={onSubmit}
                    style={{
                        fontSize: '1.25rem',
                        fontWeight: 'bold',
                        borderRadius: '50px',
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                        border: 'none'
                    }}
                >
                    Reserve Your Table
                </Button>
            </Col>
        </Row>
    )
}

export default Submit;