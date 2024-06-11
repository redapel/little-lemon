import React from "react";
import LOGO from './Logo.svg';

function Header() {
    return (
        <header>
            <nav>
                <img src={LOGO} alt="Little Lemon Logo" id="little-lemon-logo"></img>
                <ul>
                    <li></li>
                    <li><a href="/" id="links">Home</a></li>
                    <li><a href="#" id="links">About</a></li>
                    <li><a href="#" id="links">Menu</a></li>
                    <li><a href="/booking" id="links">Reservations</a></li>
                    <li><a href="#" id="links">Order Online</a></li>
                    <li><a href="#" id="links">Login</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
