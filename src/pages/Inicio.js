import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { BrowserRouter} from 'react-router-dom';
import './inicio.css';
import down from '../img/download.jpg';
import down1 from '../img/download1.jpg';
import down2 from '../img/download2.jpg';
import img from '../img/image.png';
import img1 from '../img/image1.png';
import img2 from '../img/image2.png';
import img5 from '../img/image5.png';
import img6 from '../img/image6.png';
import img7 from '../img/image7.png';
import img8 from '../img/image8.png';
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
          <div className="equipamentos">
            <h1>Equipamentos</h1>

            <div className="row">

              <div className="col-md-4">
                <h4>Serra de Mesa</h4>
                <img src={img} alt="imagem de uma serra de mesa"/>
                <p>Indicado para cortes de grandes peças de madeiras</p>
              </div>

              <div className="col-md-4">
                <h4>Impressora 3D</h4>
                <img src={img1} alt="imagem de uma impressora 3d"/>
                <p>Criação de protopipos fisicos tridimensionais</p>
              </div>

              <div className="col-md-4">
                <h4>CNC Router</h4>
                <img src={img2} alt="imagem de CNC router"/>
                <p>Corte e gravações em madeiras, MDF, Acrilico, entre outros materiais</p>
              </div>

            </div>

          </div>

          <div className="materiais">
            <h1>Materiais</h1>
            <div className="row">
              <div className="col-md-3">
                <h4>Filamento LPA</h4>
                <img src={img5} alt="imagem de filamentos lpa"/>

              </div>

              <div className="col-md-3">
              <h4>Folhas de EVA</h4>
                <img src={img6} alt="imagem de folhas de EVA"/>

              </div>

              <div className="col-md-3">
              <h4>Arduino</h4>
                <img src={img7} alt="imagem de arduino"/>

              </div>

              <div className="col-md-3">
              <h4>Chapas de MDF</h4>
                <img src={img8} alt="imagem de folhas de mdf" />

              </div>

            </div>
          </div>
             
        </div>
      </BrowserRouter>
    );
  }
}

export default Inicio;
