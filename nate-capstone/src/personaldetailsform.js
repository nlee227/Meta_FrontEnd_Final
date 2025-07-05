import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import './index.css';

function PersonalDetailsForm({ 
    formData, 
    setFormData, 
    errors, 
    setErrors, 
    touched, 
    setTouched,
    validateName,
    validatePhone,
    validateEmail,
    validateSpecialRequests
}) {

    const handleInputChange = (field, value) => {
        // Update the form data
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));

        // Mark field as touched
        setTouched(prev => ({
            ...prev,
            [field]: true
        }));

        // Validate and update errors
        let error = "";
        if (field === 'firstName') {
            error = validateName(value, 'First name');
        } else if (field === 'lastName') {
            error = validateName(value, 'Last name');
        } else if (field === 'phone') {
            error = validatePhone(value);
        } else if (field === 'email') {
            error = validateEmail(value);
        } else if (field === 'specialRequests') {
            error = validateSpecialRequests(value);
        }

        setErrors(prev => ({
            ...prev,
            [field]: error
        }));

        // Auto-clear green styling after 3 seconds
        if (!error) {
            setTimeout(() => {
                setTouched(prev => ({
                    ...prev,
                    [field]: false
                }));
            }, 3000);
        }
    };

    return(
        <>
            <h2 className="section-header text-center mb-4">Personal Details</h2>
            <Form>
                <Row className="mb-3 justify-content-center">
                    <Col md={4}>
                        <Form.Control
                            type="text"
                            value={formData.firstName}
                            onChange={(e) => handleInputChange('firstName', e.target.value)}
                            className={`${touched.firstName && errors.firstName ? 'is-invalid' : touched.firstName && !errors.firstName ? 'is-valid' : ''}`}
                            placeholder="First Name"
                        />
                        {touched.firstName && errors.firstName && (
                            <Form.Control.Feedback type="invalid">
                                {errors.firstName}
                            </Form.Control.Feedback>
                        )}
                    </Col>
                    
                    <Col md={4}>
                        <Form.Control
                            type="text"
                            value={formData.lastName}
                            onChange={(e) => handleInputChange('lastName', e.target.value)}
                            className={`${touched.lastName && errors.lastName ? 'is-invalid' : touched.lastName && !errors.lastName ? 'is-valid' : ''}`}
                            placeholder="Last Name"
                        />
                        {touched.lastName && errors.lastName && (
                            <Form.Control.Feedback type="invalid">
                                {errors.lastName}
                            </Form.Control.Feedback>
                        )}
                    </Col>
                </Row>
                
                <Row className="mb-3 justify-content-center">
                    <Col md={8}>
                        <Form.Control
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            className={`${touched.phone && errors.phone ? 'is-invalid' : touched.phone && !errors.phone ? 'is-valid' : ''}`}
                            placeholder="Phone Number"
                        />
                        {touched.phone && errors.phone && (
                            <Form.Control.Feedback type="invalid">
                                {errors.phone}
                            </Form.Control.Feedback>
                        )}
                    </Col>
                </Row>
                
                <Row className="mb-3 justify-content-center">
                    <Col md={8}>
                        <Form.Control
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            className={`${touched.email && errors.email ? 'is-invalid' : touched.email && !errors.email ? 'is-valid' : ''}`}
                            placeholder="Email Address"
                        />
                        {touched.email && errors.email && (
                            <Form.Control.Feedback type="invalid">
                                {errors.email}
                            </Form.Control.Feedback>
                        )}
                    </Col>
                </Row>
                
                <Row className="mb-3 justify-content-center">
                    <Col md={8}>
                        <Form.Control
                            as="textarea"
                            rows={4}
                            value={formData.specialRequests}
                            onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                            className={`${touched.specialRequests && errors.specialRequests ? 'is-invalid' : touched.specialRequests && !errors.specialRequests ? 'is-valid' : ''}`}
                            placeholder="Special requests or dietary restrictions? (optional)"
                        />
                        {touched.specialRequests && errors.specialRequests && (
                            <Form.Control.Feedback type='invalid'>
                                {errors.specialRequests}
                            </Form.Control.Feedback>
                        )}
                        <Form.Text className='text-muted'>
                            {formData.specialRequests.length}/500 characters
                        </Form.Text>
                    </Col>
                </Row>
            </Form>
        </>
    )
}

export default PersonalDetailsForm;