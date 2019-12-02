import React, { Component } from 'react';
import { Col} from 'react-bootstrap';
import Menu from './Menu';


import './Contato.css';
import telefone from '../img/telefone.ico';
import email from '../img/email.ico';


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

                        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3353.139538993395!2d-55.77499868531148!3d-20.48133196097813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x947de6133756d62b%3A0xca6dd532c488ca4a!2sIFMS%20C%C3%A2mpus%20Aquidauana!5e1!3m2!1spt-BR!2sbr!4v1574881766423!5m2!1spt-BR!2sbr" width="800" height="600" frameborder="0" style="border:0;" allowfullscreen=""></iframe> */}
                        
                        </Col>
                    
                   
                </div>
            </div>

        )
    }
}