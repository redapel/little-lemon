import React from "react";
import LOGO from '../public/Logo.svg';

function Nav() {
    return (
        <nav>
            <img src={LOGO} alt="Little Lemon Logo"></img>
            <ul>
                <li>
                    <a href='#'></a>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;