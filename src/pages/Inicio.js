import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { BrowserRouter } from 'react-router-dom';
import { Row, Col, Container } from 'react-bootstrap';


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
import logo from '../img/logo.png';

class Inicio extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <div className="conteiner">

            {/* Logotipo do ifmaker */}
            <img className="logoIF" src={logo} alt="Logo" />
            <Menu />
            <div className="imgCarrocel">
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
              <Container>
                <Row >
                  <Col md={4}>
                    <h4>Serra de Mesa</h4>
                    <img src={img} alt="imagem de uma serra de mesa" />
                    <p>Indicado para cortes de grandes peças de madeiras</p>
                  </Col>
                  <Col md={4}>
                    <h4>Impressora 3D</h4>
                    <img src={img1} alt="imagem de uma impressora 3d" />
                    <p>Criação de protopipos fisicos tridimensionais</p>
                  </Col>
                  <Col md={4}>
                    <h4>CNC Router</h4>
                    <img src={img2} alt="imagem de CNC router" />
                    <p>Corte e gravações em madeiras, MDF, Acrilico, entre outros materiais</p>
                  </Col>
                </Row>
              </Container>
            </div>

            <div className="materiais">
              <h1>Materiais</h1>
              
              <Container>
                <Row >
                  <Col md={3}>

                    <h4>Filamento LPA</h4>
                    <img src={img5} alt="imagem de filamentos lpa" />

                  </Col>
                  <Col md={3}>
                    <h4>Folhas de EVA</h4>
                    <img src={img6} alt="imagem de folhas de EVA" />

                  </Col>
                  <Col md={3}>

                    <h4>Arduino</h4>
                    <img src={img7} alt="imagem de arduino" />

                  </Col>
                  <Col md={3}>
                    <h4>Chapas de MDF</h4>
                    <img src={img8} alt="imagem de folhas de mdf" />

                  </Col>
                </Row>
              </Container>
            </div>
            <Col md={12} className="texto">
              <h3>O QUE É</h3>
              <p>
                IFMaker é uma plataforma de prototipagem com suporte à inovação e ao aprendizado.
            </p>
              <p>
                Possibilita que pessoas da comunidade interna e externa ao IFMS campus aquidauana
                possam projetar e desenvolver suas ideias de forma criativa e cooperativa.
            </p>

              <p>
                O objetivo principal é a disseminação do conhecimento técnico fornecendo estimulo
                para a difusão do empreendedorismo local.
            </p>

              <p>
                Se você possui uma ideia - ainda que julgue ser inconsistente - venha explorar o potencial da mesma,
                colocando-a em prática de forma divertida e coloborativa.
            </p>
              <h3>QUEM SOMOS</h3>
              <p>
                Somos uma equipe de professores, técnicos,
                pesquisadores e estudantes que possuem conhecimento
                técnico e científico em diversas áreas.
            </p>

              <p>
                Estamos dispostos a ensinar, cooperar e aprender.
            </p>
              <p>
                Sim, a aprender, pois a multidisciplinaridade é um dos fatores presentes no IFMaker.
            </p>
            </Col>

      
            <div className="local">
              <p>2009-2019 Instituto Federal de Educação, Ciência e Tecnologia de
                Mato Grosso do Sul. Todos os direitos reservados.
              </p>
              <p>Rua José Tadao Arima, 222- Vila Ycaraí - Aquidauana/ MS - CEP: 79200-000</p>
              
            </div>
            <div className="autores">
              <span>2019 por Renata & William</span>
            </div>
          </div>

          </div>
    
      </BrowserRouter>
    );
  }
}

export default Inicio;
