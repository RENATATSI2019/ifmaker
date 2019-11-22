import React, { Component } from 'react';
import Menu from './Menu';


import './Contato.css';
import facebook from '../img/facebook.png';
// import logo from '../img/logo.png';

export default class Contato extends Component {


    render() {
        return (
            <div>
                <div className="conteiner">
                    <Menu />
                    <div id="contato">
                        <h3>Entre em Contato</h3>
                        <div id="text">
                            <p>Telefone: <b>(67)3240-1600</b></p>
                            <p>Email: <b>fablab.aq@ifms.edu.br</b></p>
                            <p>Sala 107 - Hotel Tecnológico</p>
                            <p>HORÁRIO DE FUNCIONAMENTO: Seg - Sex: 8:00 - 20:00</p>
                        </div>
                        <div className="redeSocial">
                            <img src={facebook} alt="" />
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
