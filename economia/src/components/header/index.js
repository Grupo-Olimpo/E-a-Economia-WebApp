import React from "react";
import "./style.css";
import { Fade } from "react-reveal";
import LogoImagem from '../../assets/logo.jpg';

function Header() {
    return (
        <Fade top duration={1000} distance="20px">
            <div>
                <header className="header">
                    <a href="" className="logo">
                        <img src={LogoImagem} className="logo_imagem" />
                        <span className="logo-name">E-conomia</span>
                    </a>
                </header>
            </div>
        </Fade>
    );
}

export default Header;