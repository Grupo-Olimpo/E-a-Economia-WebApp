import React, { Component } from 'react';
import history from '../../history';
import Header from '../../components/header'

export default class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Header/>
            </div>
        );
    }

}