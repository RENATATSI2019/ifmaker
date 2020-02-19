import React, { Component } from 'react';
import './menu.css';
import './Inicio';
import Navbar from 'react-bootstrap/Navbar';

class Menu extends Component {
    render() {
        return (
            <div className="conteiner">


                <Navbar bg="dark" expand="lg">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">

                        <ul className="nav-item">
                            <a className="nav-link" href="Inicio">Home</a>
                        </ul>

                        <ul className="nav-item">
                            <a className="nav-link" href="Eventos">Eventos</a>
                        </ul>
                        <ul className="nav-item">
                            <a className="nav-link" href="Contato">Contato</a>
                        </ul>
                        <ul className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="Serviços">Serviços</a>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="Cursos">Cursos</a>
                                <a className="dropdown-item" href="Agendamento">Agendamento</a>
                            </div>
                        </ul>

                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Menu;


