import React, { Component } from 'react';
import './cursos.css';
import FormCheck from 'react-bootstrap/FormCheck';
import Menu from './Menu';

import logo from '../img/logo.png';

export default class Cursos extends Component {
  render() {
    return (
      <div className="conteiner">
        <img className="logoIF" src={logo} alt="Logo" />
      <Menu/>           
        
          <h3>
            Cursos
          </h3>
       

        <div className="optar">
          <FormCheck
            label="Solicitar Curso"
          />
          <FormCheck
            label="Ofertar Curso"
          />
        </div>

        <div class="fomulario">
          <form method="POST" enctype="multipart/form-data">
            <div class="form-group">
              <label for="title">Nome Completo</label>
              <input type="text" name="title" id="title" class="form-control" />
            </div>

            <div class="form-group">
              <label for="author">CPF</label>
              <input type="text" name="author" id="author" class="form-control" />
            </div>

            <div class="form-group">
              <label for="author">Instituição</label>
              <input type="text" name="author" id="author" class="form-control" />
            </div>

            <div class="form-group">
              <label for="publishedDate">E-mail</label>
              <input type="text" name="publishedDate" id="publishedDate" class="form-control" />
            </div>

            <div class="form-group">
              <label for="publishedDate">Telefone</label>
              <input type="text" name="publishedDate" id="publishedDate" class="form-control" />
            </div>

            <div class="form-group">
              <label for="description">Descrição</label>
              <textarea name="description" id="description" class="form-control"> </textarea>
            </div>

            <button type="submit" class="btn btn-success">Enviar</button>
          </form>

        </div>
      </div>
   
    )
  }
}

