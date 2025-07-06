import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import './index.css';
import Location from "./location";
import Details from "./details";
import PersonalDetailsForm from "./personaldetailsform";
import Submit from "./submit";

function BookingForm({ setCurrentScreen, availableTimes, dispatch }) {
    const [restaurantLocation, setRestaurantLocation] = useState('');
    const [numberOfGuests, setNumberOfGuests] = useState('2');
    const [location, setLocation] = useState('');
    const [diningArea, setDiningArea] = useState('inside');
    const [selectedDate, setSelectedDate] = useState('');
    const [time, setTime] = useState('');
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        specialRequests: ''
    });
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    const validateName = (value, fieldName) => {
        if (!value.trim()) {
            return `${fieldName} is required`;
        }
        if (value.trim().length < 2) {
            return `${fieldName} must be at least 2 characters`;
        }
        if (!/^[A-Za-z\s'-]+$/.test(value)) {
            return `${fieldName} can only contain letters, spaces, hyphens, and apostrophes`;
        }
        if (value.trim().length > 50) {
            return `${fieldName} must be less than 50 characters`;
        }
        return "";
    };

    const validatePhone = (value) => {
        if (!value.trim()) {
            return "Phone number is required";
        }
        const digits = value.replace(/\D/g, '');
        if (digits.length < 10) {
            return "Phone number must be at least 10 digits";
        }
        if (digits.length > 15) {
            return "Phone number too long";
        }
        if (!/^[\d\s\-\(\)\+\.]+$/.test(value)) {
            return "Invalid phone number format";
        }
        return "";
    };

    const validateEmail = (value) => {
        if (!value.trim()) {
            return "Email is required";
        }
        if (!/\S+@\S+\.\S+/.test(value)) {
            return "Please enter a valid email address";
        }
        if (value.length > 254) {
            return "Email address is too long";
        }
        return "";
    };

    const validateSpecialRequests = (value) => {
        if (value.length > 500) {
            return "Special requests must be less than 500 characters";
        }
        return "";
    };

    const validateAllFields = () => {
        const newErrors = {};

        if (!restaurantLocation) {
            newErrors.restaurantLocation = "Please select a restaurant location";
        }

        if (!numberOfGuests || numberOfGuests < 1) {
            newErrors.numberOfGuests = "Number of guests is required";
        }

        if (diningArea === 'inside' && !location) {
            newErrors.location = "Please select a dining location";
        }

        if (!selectedDate) {
            newErrors.selectedDate = "Please select a date";
        }

        if (!time) {
            newErrors.time = "Please select a time";
        }

        if (!formData.firstName.trim()) {
            newErrors.firstName = "First name is required";
        } else {
            const nameError = validateName(formData.firstName, 'First name');
            if (nameError) newErrors.firstName = nameError;
        }

        if (!formData.lastName.trim()) {
            newErrors.lastName = "Last name is required";
        } else {
            const nameError = validateName(formData.lastName, 'Last name');
            if (nameError) newErrors.lastName = nameError;
        }

        if (!formData.phone.trim()) {
            newErrors.phone = "Phone number is required";
        } else {
            const phoneError = validatePhone(formData.phone);
            if (phoneError) newErrors.phone = phoneError;
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else {
            const emailError = validateEmail(formData.email);
            if (emailError) newErrors.email = emailError;
        }

        const specialError = validateSpecialRequests(formData.specialRequests);
        if (specialError) newErrors.specialRequests = specialError;

        setErrors(newErrors);
        setTouched({
            restaurantLocation: true,
            numberOfGuests: true,
            location: true,
            selectedDate: true,
            time: true,
            firstName: true,
            lastName: true,
            phone: true,
            email: true,
            specialRequests: true
        });

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = () => {
        const isValid = validateAllFields();

        if (isValid) {
            setCurrentScreen('confirmation');
        } else {
            alert('Please fix the errors before submitting');
        }
    };

    return(
        <Container>
            <Row>
                <Col md={{ span: 8, offset: 2 }}>
                    <h1 className="page-header text-center">Book your reservation!</h1>
                    <Location 
                        restaurantLocation={restaurantLocation}
                        setRestaurantLocation={setRestaurantLocation}
                        errors={errors}
                        touched={touched}
                    />
                    <Details 
                        numberOfGuests={numberOfGuests}
                        setNumberOfGuests={setNumberOfGuests}
                        location={location}
                        setLocation={setLocation}
                        diningArea={diningArea}
                        setDiningArea={setDiningArea}
                        selectedDate={selectedDate}
                        setSelectedDate={setSelectedDate}
                        time={time}
                        setTime={setTime}
                        errors={errors}
                        touched={touched}
                        availableTimes={availableTimes}
                        dispatch={dispatch} 
                    />
                    <PersonalDetailsForm 
                        formData={formData}
                        setFormData={setFormData}
                        errors={errors}
                        setErrors={setErrors}
                        touched={touched}
                        setTouched={setTouched}
                        validateName={validateName}
                        validatePhone={validatePhone}
                        validateEmail={validateEmail}
                        validateSpecialRequests={validateSpecialRequests}
                    />
                    <Submit onSubmit={handleSubmit} />
                </Col>
            </Row>
        </Container>
    )
}

export default BookingForm;