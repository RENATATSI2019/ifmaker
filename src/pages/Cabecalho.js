import React, { Component } from 'react';
import logo from '../img/logo.png';

export default class Cabecalho extends Component {
    render() {
        return (
            <div>
                <div className="cabecalho">
                    <img src={logo} alt="logoIF"/>
                </div>
            </div>
        )
    }
}
