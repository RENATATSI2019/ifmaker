import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './inicio.css';
import img from '../img/image.png';
import img1 from '../img/image1.png';
import img2 from '../img/image2.png';
import img5 from '../img/image5.png';
import img6 from '../img/image6.png';
import img7 from '../img/image7.png';
import img8 from '../img/image8.png';
import Menu from './Menu';
import Carrocel from './Carrocel';
import logo from '../../src/img/logo.png';


class Inicio extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
      <img className= "logoIF" src={logo} alt="Logo"/>       
      </div>
        <div className="conteiner">
          <Menu />
          <div className="imgInicio">
            <Carrocel/>  
             </div>
          <div className="equipamentos">
            <h1>Equipamentos</h1>

            <div className="row">
              <div className="col-md-4">
                <h4>Serra de Mesa</h4>
                <img src={img} alt="imagem de uma serra de mesa" />
                <p>Indicado para cortes de grandes peças de madeiras</p>
              </div>

              <div className="col-md-4">
                <h4>Impressora 3D</h4>
                <img src={img1} alt="imagem de uma impressora 3d" />
                <p>Criação de prototipos físicos tridimensionais</p>
              </div>

              <div className="col-md-4">
                <h4>CNC Router</h4>
                <img src={img2} alt="imagem de CNC router" />
                <p>Corte e gravações em madeiras, MDF, Acrilico, entre outros materiais</p>
              </div>

            </div>

          </div>

          <div className="materiais">
            <h1>Materiais</h1>
            <div className="row">
              <div className="col-md-3">
                <h4>Filamento LPA</h4>
                <img src={img5} alt="imagem de filamentos lpa" />
              </div>

              <div className="col-md-3">
                <h4>Folhas de EVA</h4>
                <img src={img6} alt="imagem de folhas de EVA" />
              </div>

              <div className="col-md-3">
                <h4>Arduino</h4>
                <img src={img7} alt="imagem de arduino" />
              </div>

              <div className="col-md-3">
                <h4>Chapas de MDF</h4>
                <img src={img8} alt="imagem de folhas de mdf" />

              </div>

            </div>
          </div>
          <div className="sobre">
            <h3>O que é</h3>
            <h5>
              IFMaker é uma plataforma de prototipagem com suporte à inovação e ao aprendizado.

              Possibilita que pessoas da comunidade interna e externa ao IFMS campus aquidauana
              possam projetar e desenvolver suas ideias de forma criativa e cooperativa.

              O objetivo principal é a disseminação do conhecimento técnico fornecendo estimulo
              para a difusão do empreendedorismo local.

              Se você possui uma ideia - ainda que julgue ser inconsistente - venha explorar o potencial da mesma,
              colocando-a em prática de forma divertida e coloborativa.
            </h5>

          </div>
        </div>


        <div className="rodaPe">
          <div className="local">
            <p>2009-2019 Instituto Federal de Educação, Ciência e Tecnologia de
              Mato Grosso do Sul. Todos os direitos reservados.
              </p>
            <p>Rua José Tadao Arima, 222- Vila Ycaraí - Aquidauana/ MS - CEP: 79200-000</p>
            <p>Telefone:(67)3240-1600</p>
          </div>
          <div className="autores">
            <span>2019 por Renata & William</span>
          </div>
        </div>
      </BrowserRouter>

    );
  }
}

export default Inicio;
