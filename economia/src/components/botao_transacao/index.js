import React, { Component } from "react";
import "./styles.css";
import { Fade } from "react-reveal";

export default class BotaoTransacao extends Component {
    onClick() {
        console.log('apertou')
    }
    render() {
        return (
            < Fade top duration={1000} distance="20px" >
                <button onClick={this.onClick()} id="topButton">
                <i class="fas fa-plus"></i>
                </button>
            </Fade >
        );
    }
}