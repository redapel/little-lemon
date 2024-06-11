import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import BookingPage from './BookingPage';
import ConfirmedPage from './ConfirmedPage';

function Nav() {
    return (
        <nav>
            <BrowserRouter>
                <Routes> 
                    <Route path="/" element={<HomePage />}>Home</Route>
                    <Route path="/booking" element={<BookingPage />}>Booking</Route>
                    <Route path="/confirmed" element={<ConfirmedPage />}>Confirmed</Route>
                </Routes>
            </BrowserRouter>
        </nav>
    );
}

export default Nav;
