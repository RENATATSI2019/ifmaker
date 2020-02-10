import React, { Component } from 'react';
import { Col} from 'react-bootstrap';
import Menu from './Menu';


import './Contato.css';
import telefone from '../img/telefone.ico';
import email from '../img/email.ico';
import SimpleMap from './Mapa';


export default class Contato extends Component {


    render() {
        return (
            <div>
                
                <div className="conteiner">
                <Menu />
                   
                        <Col className="contato" md={6}>
                           <h1>Entre em contato</h1>
                           <p>IFMAKER venha participar</p>

                           
                                 
                                <div id="cont">
                                    <img src={telefone} alt="imagem de contato"/>
                                    <span>(67)3240-1600</span>
                                </div>

                                <div id="cont">
                                    <img src={email} alt="imagem de contato"/>
                                    <span><b>fablab.aq@ifms.edu.br</b></span>
                                </div>
                            
                                
                            <div className="info">
                                <p>Sala 107 - Hotel Tecnológico</p>
                                <p>HORÁRIO DE FUNCIONAMENTO: Seg - Sex: 8:00 - 20:00</p>

                                <p>Rua José Tadao Arima, 222- Vila Ycaraí - Aquidauana/ MS - CEP: 79200-000</p>
                            </div>
                        </Col>

                        <Col md={6}>
                            <SimpleMap/>
                        </Col>
                    
                   
                </div>
            </div>

        )
    }
}