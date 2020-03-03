import React, { Component } from 'react';
import Input from './input/Input';
import './resource-form.css';
import '../grid.css';
import Toggle from './input/Toggle'

export default class ResourceForm extends Component {
  render() {
    return (
        <div className="container-register">
          <div className="box">
            <div className="row">
              <div className="col-12">
                <h1> Cadastrar novo recurso </h1>
              </div>
              <div className="col-12">
                <Input className="input-form" type="text" placeholder="Digite o nome do recurso"/>
              </div>
              <div className="col-12">
                <Input className="input-form" type="text" placeholder="Número de lugares"/>
              </div>
              <Toggle></Toggle>
            </div>
          </div>
        </div>

    )
  }
}