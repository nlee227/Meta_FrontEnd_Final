import React, { useReducer } from "react";
import Specials from "./specials";
import Reserve from "./reserve";
import BookingForm from "./bookingform";
import './index.css';
import Testimonials from "./testimonials";
import Little_Lemon from "./little_lemon";
import Confirmation from "./confirmation";

const initializeTimes = () => {
    return [
        "17:00", "17:30", "18:00", "18:30", 
        "19:00", "19:30", "20:00", "20:30"
    ];
};

export const updateTimes = (state, action) => {
    switch (action.type) {
        case 'UPDATE_TIMES':
            const { date } = action;

            const [year, month, day] = date.split('-');

            const localDate = new Date(year, month - 1, day);

            const dayOfWeek = localDate.getDay();

            console.log('Date:', date, 'Day of week:', dayOfWeek);

            if (dayOfWeek === 0 || dayOfWeek === 6) {
                return [
                    "11:00", "11:30", "12:00", "12:30",
                    "17:00", "17:30", "18:00", "18:30",
                    "19:00", "19:30", "20:00", "20:30", "21:00"
                ];
            } else {
                return [
                    "17:00", "17:30", "18:00", "18:30",
                    "19:00", "19:30", "20:00", "20:30"
                ];
            }
        default:
            return state;
    }
}

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