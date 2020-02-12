import React, { Component } from 'react';
import Menu from './Menu';
import './eventos.css';
import modelagem from '../../src/img/modelagem.jpg';
import origami from '../../src/img/origami.jpg';
import argila from '../../src/img/argila.jpg';

import logo from '../img/logo.png';


export default class Eventos extends Component {
    render() {
        return (
            <div className="conteiner">
                <img className="logoIF" src={logo} alt="Logo" />
                <Menu />
                <div className="header">
                    <h3>
                        Eventos
                </h3>

                </div>
               

                <div className="eventos">
                    <h4>Inscrições Abertas!</h4>
                </div>
                <div className="cards">
                    <div class="card">
                        <img class="card-img-top" img src={origami} alt="modelagem.jpg" />
                        <div class="card-body">
                            <h5 class="card-title">Curso de Origami</h5>
                            <p class="card-text">Um exemplo de texto rápido para construir o título do card e fazer preencher o conteúdo do card.</p>
                            <button class="btn btn-primary">Inscreva-se!</button>
                        </div>
                    </div>
                    <div class="card">
                        <img class="card-img-top" img src={argila} alt="modelagem.jpg" />
                        <div class="card-body">
                            <h5 class="card-title">Modelagem em argila</h5>
                            <p class="card-text">Um exemplo de texto rápido para construir o título do card e fazer preencher o conteúdo do card.</p>
                            <button class="btn btn-primary">Inscreva-se!</button>
                        </div>
                    </div>
                    <div class="card">
                        <img class="card-img-top" img src={modelagem} alt="modelagem.jpg" />
                        <div class="card-body">
                            <h5 class="card-title">MOdelagem </h5>
                            <p class="card-text">Um exemplo de texto rápido para construir o título do card e fazer preencher o conteúdo do card.</p>
                            <button class="btn btn-primary">Inscreva-se!</button>
                        </div>
                    </div>
                </div>      
            </div>
         );
    }
}
