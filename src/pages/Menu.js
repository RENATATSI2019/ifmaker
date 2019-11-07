import React, { Component } from 'react';
import './menu.css';

class Menu extends Component {
    render() {
        return (
            <div className="fundo">
                <div className="container">
                    <ul className="nav">
                        <li className="nav-item">
                            <a className="nav-link" href="Inicio">Home</a>
                        </li>
                        
                        <li className="nav-item">
                            <a className="nav-link" href="Sobre">Sobre Nós</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="Contato">Contato</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="Serviços">Serviços</a>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="Cursos">Cursos</a>
                                <a className="dropdown-item" href="Agendamento">Agendamento</a>
                                <a className="dropdown-item" href="Eventos">Eventos</a></div>
                        </li>
                    </ul>
                </div>
            </div>

        );
    }
}

export default Menu;