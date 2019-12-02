import React, { Component } from 'react';
import './menu.css';
import './Inicio';

class Menu extends Component {
    render() {
        return (
             <div>  
                    <div className="nav">
                        <li className="nav-item">
                            <a className="nav-link" href="Inicio">Home</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="Eventos">Eventos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="Contato">Contato</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="Serviços">Serviços</a>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="Cursos">Cursos</a>
                                <a className="dropdown-item" href="Agendamento">Agendamento</a>
                            </div>
                        </li>
                    </div>
                </div> 
             
        );
    }
}

export default Menu;