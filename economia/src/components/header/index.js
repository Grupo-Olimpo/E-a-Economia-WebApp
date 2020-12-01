import React from "react";
import "./style.css";
import { Fade } from "react-reveal";

function Header() {
    return (
        <Fade top duration={1000} distance="20px">
            <div>
                <header className="header">
                    <a href="" className="logo">
                        <span className="grey-color"> &lt;</span>
                        <span className="logo-name">E-conomia</span>
                        <span className="grey-color">/&gt;</span>
                    </a>
                </header>
            </div>
        </Fade>
    );
}

export default Header;