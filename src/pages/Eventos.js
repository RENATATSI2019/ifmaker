import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
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
                    <h3>Eventos</h3>
                </div>
<CardDeck>
  <Card>
    <Card.Img img src={modelagem} alt="modelagem3D"/>
    <Card.Body>
      <Card.Title>Modeladem 3D - Básico </Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
  <Card.Img img src={origami} alt="origami"/>
    <Card.Body>
      <Card.Title>Curso de Origami</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
  <Card.Img img src={argila} alt="argila"/>
    <Card.Body>
      <Card.Title>Modelagem em Argila</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
  </Card>
</CardDeck>
            </div>
        );
    }
}
