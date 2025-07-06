import React, { useEffect } from "react";
import { Form, Row, Col } from "react-bootstrap";
import './index.css';

function Details({ 
    numberOfGuests,
    setNumberOfGuests,
    location,
    setLocation,
    diningArea,
    setDiningArea,
    selectedDate,
    setSelectedDate,
    time,
    setTime,
    errors,
    touched,
    availableTimes,
    dispatch
}) {

    useEffect(() => {
        setTime('');
        if (selectedDate) {
            dispatch({
                type: 'UPDATE_TIMES',
                date: selectedDate
            });
        }
    }, [selectedDate, setTime]);

    const handleGuestChange = (e) => {
        const value = e.target.value;

        if (value === '') {
            setNumberOfGuests('');
            return;
        }

        const numValue = parseInt(value);

        if (!isNaN(numValue) && numValue >= 1 && numValue <= 10) {
            setNumberOfGuests(numValue);
        }
    };

    return (
        <>
            <h2 className="section-header text-center mb-4">Reservation Details</h2>
            <Form>
                <Form.Group as={Row} className="mb-3 align-items-center">
                    <Form.Label className="form-label" column sm={{span: 3, offset: 1}}>Number of guests</Form.Label>
                    <Col sm={8}>
                        <Form.Control
                            type="number"
                            min="1"
                            max="10"
                            value={numberOfGuests}
                            onChange={handleGuestChange}
                            className={`guest-input ${touched.numberOfGuests && errors.numberOfGuests ? 'is-invalid' : ''}`}
                        />
                        {touched.numberOfGuests && errors.numberOfGuests && (
                            <Form.Control.Feedback type="invalid">
                                {errors.numberOfGuests}
                            </Form.Control.Feedback>
                        )}
                    </Col>
                </Form.Group>
                
                <Form.Group as={Row} className="mb-3 align-items-center">
                    <Form.Label className="form-label" column sm={{span: 3, offset: 1}}>Dining Area</Form.Label>
                    <Col sm={8}>
                        <div className={touched.diningArea && errors.diningArea ? 'is-invalid' : ''}>
                            <Form.Check
                                inline
                                type="radio"
                                id="inside"
                                name="diningArea"
                                value="inside"
                                label="Inside"
                                checked={diningArea === 'inside'}
                                onChange={(e) => setDiningArea(e.target.value)}
                            />
                            <Form.Check
                                inline
                                type="radio"
                                id="outside"
                                name="diningArea"
                                value="outside"
                                label="Outside"
                                checked={diningArea === 'outside'}
                                onChange={(e) => setDiningArea(e.target.value)}
                            />
                        </div>
                        {touched.diningArea && errors.diningArea && (
                            <div className="invalid-feedback d-block">
                                {errors.diningArea}
                            </div>
                        )}
                    </Col>
                </Form.Group>

                {diningArea === 'inside' && (
                    <Form.Group as={Row} className="mb-3 align-items-center">
                        <Form.Label className="form-label" column sm={{span: 3, offset: 1}}>Location</Form.Label>
                        <Col sm={8}>
                            <Form.Select
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                className={`w-auto ${touched.location && errors.location ? 'is-invalid' : ''}`}
                            >
                                <option value="">Select a location...</option>
                                <option value="main-dining">Main Dining Room</option>
                                <option value="private-room">Private Room</option>
                                <option value="bar-area">Bar Area</option>
                                <option value="window-seating">Window Seating</option>
                            </Form.Select>
                            {touched.location && errors.location && (
                                <Form.Control.Feedback type="invalid">
                                    {errors.location}
                                </Form.Control.Feedback>
                            )}
                        </Col>
                    </Form.Group>
                )}

                <Form.Group as={Row} className="mb-3 align-items-center">
                    <Form.Label className="form-label" column sm={{span: 3, offset: 1}}>Date</Form.Label>
                    <Col sm={8}>
                        <Form.Control
                            type="date"
                            value={selectedDate}
                            onChange={(e) => setSelectedDate(e.target.value)}
                            className={`w-auto ${touched.selectedDate && errors.selectedDate ? 'is-invalid' : ''}`}
                            min={new Date().toISOString().split('T')[0]}
                        />
                        {touched.selectedDate && errors.selectedDate && (
                            <Form.Control.Feedback type="invalid">
                                {errors.selectedDate}
                            </Form.Control.Feedback>
                        )}
                    </Col>
                </Form.Group>

                {selectedDate && (
                    <Form.Group as={Row} className="mb-3 align-items-center">
                        <Form.Label className="form-label" column sm={{span: 3, offset: 1}}>Time</Form.Label>
                        <Col sm={8}>
                            <Form.Select
                                className={`w-auto ${touched.time && errors.time ? 'is-invalid' : ''}`}
                                value={time}
                                onChange={(e) => setTime(e.target.value)}
                            >
                                <option value="">Select time...</option>
                                {availableTimes.map(timeSlot => (
                                    <option key={timeSlot} value={timeSlot}>
                                        {new Date(`2000-01-01T${timeSlot}`).toLocaleTimeString([], {
                                            hour: 'numeric',
                                            minute: '2-digit',
                                            hour12: true
                                        })}
                                    </option>
                                ))}
                            </Form.Select>
                            {touched.time && errors.time && (
                                <Form.Control.Feedback type="invalid">
                                    {errors.time}
                                </Form.Control.Feedback>
                            )}
                        </Col>
                    </Form.Group>
                )}
            </Form>
        </>
    );
}

export default Details;