import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Menu from './Menu';
import './eventos.css';
import modelagem from '../../src/img/modelagem.jpg';
import origami from '../../src/img/origami.jpg';
import argila from '../../src/img/argila.jpg';
import Carousel from 'react-bootstrap/Carousel';
import down from '../img/download.jpg';
import down1 from '../img/download1.jpg';
import down2 from '../img/download2.jpg';


export default class Eventos extends Component {
    render() {
        return (
          
           <div className="conteiner">
              <div>    
                <Menu />
                </div>
                <div className="header">
                    <h3>Eventos</h3>
                </div>
    <div className="abertos">
  <h3>Inscrições Abertas!</h3>
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
<div className="anteriores">
<h3>Eventos Anteriores</h3>
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
<div className="galeria">
  <h3>Galeria de Fotos</h3>
            <Carousel>
              <Carousel.Item>
                <img
                  className="w-50"
                  src={down}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="w-50"
                  src={down1}
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="w-50"
                  src={down2}
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
      </div>
      </div>
            
        );
    }
}
