import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import './index.css';

function Location({ 
    restaurantLocation, 
    setRestaurantLocation, 
    errors, 
    touched 
}) {
    return(
        <>
            <h2 className="section-header text-center mb-4">Restaurant Location</h2>
            <Form.Group as={Row} className="mb-3 align-items-center">
                <Form.Label className="form-label" column sm={{span: 3, offset: 1}}>Location</Form.Label>
                <Col sm={8}>
                    <Form.Select 
                        className={`w-auto ${touched.restaurantLocation && errors.restaurantLocation ? 'is-invalid' : ''}`}
                        value={restaurantLocation}
                        onChange={(e) => setRestaurantLocation(e.target.value)}
                    > 
                        <option value="">Select location...</option>
                        <option value="Atlanta">Atlanta</option>
                        <option value="Chicago">Chicago</option>
                        <option value="Miami">Miami</option>
                    </Form.Select>
                    {touched.restaurantLocation && errors.restaurantLocation && (
                        <Form.Control.Feedback type="invalid">
                            {errors.restaurantLocation}
                        </Form.Control.Feedback>
                    )}
                </Col>
            </Form.Group>
        </>
    )
}

export default Location;