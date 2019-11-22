import React, { Component } from 'react';
import Menu from './Menu';
import './eventos.css';
import modelagem from '../../src/img/modelagem.jpg';
import origami from '../../src/img/origami.jpg';
import argila from '../../src/img/argila.jpg';


export default class Eventos extends Component {
    render() {
        return (
            <div className="conteiner">
                <Menu />
                <div className="header">
                    <h3>
                        Eventos
                </h3>

                </div>
                <div className="eventos">
                    <h5>Inscrições Abertas!</h5>
                    <img src={modelagem} alt="modelagem.jpg" />
                    <img src={origami} alt="origami.jpg" />
                    <img src={argila} alt="argila.jpg" />

                </div>
                <div className="eventos2">
                    <h5>Eventos Encerrados!</h5>
                    <img src={modelagem} alt="modelagem.jpg" />
                    <img src={origami} alt="origami.jpg" />
                    <img src={argila} alt="argila.jpg" />
                </div>
            </div>


        );
    }
}
