import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { BrowserRouter} from 'react-router-dom';
import './inicio.css';
import down from '../img/download.jpg';
import down1 from '../img/download1.jpg';
import down2 from '../img/download2.jpg';
import Menu from './Menu';
import logo_medium from '../img/logo_medium.png';

class Inicio extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
      <img className= "logoIF" src={logo_medium} alt="Logo"/>
        <b>IF Maker</b>        
      </div>
        <div className="conteiner">

          <Menu/>
          <div className="imgInicio">
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
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
                  className="d-block w-100"
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
                  className="d-block w-100"
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
      </BrowserRouter>
    );
  }
}

export default Inicio;
