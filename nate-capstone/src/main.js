import React from "react";
import Specials from "./specials";
import Reserve from "./reserve";
import BookingForm from "./bookingform";
import './index.css';
import Testimonials from "./testimonials";
import Little_Lemon from "./little_lemon";
import Confirmation from "./confirmation";

function Main({ setCurrentScreen, currentScreen, className }) {
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
                        <BookingForm setCurrentScreen={setCurrentScreen}/>
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