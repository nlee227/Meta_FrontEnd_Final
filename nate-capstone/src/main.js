/* global fetchAPI submitAPI*/

import React, { useReducer } from "react";
import Specials from "./specials";
import Reserve from "./reserve";
import BookingForm from "./bookingform";
import './index.css';
import Testimonials from "./testimonials";
import Little_Lemon from "./little_lemon";
import Confirmation from "./confirmation";

const initializeTimes = () => {
    const today = new Date();
    return fetchAPI(today);
};

export const updateTimes = (state, action) => {
    switch (action.type) {
        case 'UPDATE_TIMES':
            const { date } = action;
            const [year, month, day] = date.split('-');
            const dateObject = new Date(year, month - 1, day);

            return fetchAPI(dateObject);

        default:
            return state;
    }
}

const submitForm = (formData, navigate) => {
    const success = submitAPI(formData);
    if (success) {
        navigate('confirmation');
        return true;
    }
    return false;
};

function Main({ setCurrentScreen, currentScreen, className }) {
    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

    const renderScreen = () => {
        switch(currentScreen) {
            case 'home':
                return (
                    <>
                        <div className="reserve-section">
                            <Reserve setCurrentScreen={setCurrentScreen} />
                        </div>
                        <div className="specials-section">
                            <Specials />
                        </div>
                        <div className="testimonials-section">
                            <Testimonials />
                        </div>
                    </>
                );
            case 'menu':
                return (
                    <div className="specials-section">
                        <Specials />
                    </div>
                );
            case 'booking-form':
                return (
                    <div className="reserve-section">
                        <BookingForm 
                        setCurrentScreen={setCurrentScreen}
                        availableTimes={availableTimes}
                        dispatch={dispatch}
                        submitForm={(formData) => submitForm(formData, setCurrentScreen)}
                        />
                    </div>
                );
            case 'confirmation':
                return (<Confirmation />
                );
            default:
                return (
                    <>
                        <div className="reserve-section">
                            <Reserve setCurrentScreen={setCurrentScreen} />
                        </div>
                        <div className="specials-section">
                            <Specials />
                        </div>
                        <div className="testimonials-section">
                            <Testimonials />
                        </div>
                    </>
                );
        }
    };

    return (
        <div className={className}>
            {renderScreen()}
            <div className="little-lemon-section">
                <Little_Lemon />
            </div>
        </div>
    );
}

export default Main;