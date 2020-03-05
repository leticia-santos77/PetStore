import React, { Component} from 'react';
import axios from 'axios';
import './modal.css';
import '../form/resource-form.css';
import '../../grid.css';
import Input from '../input/Input';
import Toggle from '../input/Toggle';



export default class ResourceForm extends Component {
    state = {
    nameOfResource: '',
    numberOfSeats: '',
    hasTelevision: false,
    activeRoom: false
    }

    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    submitHandler = e => {
        e.preventDefault();
        const resource = {
            nameOfResource: this.state.nameOfResource,
            numberOfSeats: this.state.numberOfSeats,
            hasTelevision: this.state.hasTelevision,
            activeRoom: this.state.activeRoom
        }

        axios.post('http://localhost:8082/api/resources/add', {resource})
        .then(res => {
            console.log(res);
            console.log(res.data);
        })
        console.log(resource);
    }

    optionHandler = e => {  
        
        let aux = this.state[e.target.name];
        this.setState({
            [e.target.name]: ! aux
        })
    }

    render() {
        const {nameOfResource, numberOfSeats, hasTelevision, activeRoom} = this.state;
      return (
        <React.Fragment>
            <a href="#openModal-about">Modal</a>
                <div id="openModal-about" class="modalDialog">
                    <div>
                        <a href="#close" title="Close" class="close">X</a>
                        <form onSubmit={this.submitHandler}>
                            <div className="container-register">
                                <div className="row">
                                    <div className="col-12">
                                        <h1> Cadastrar novo recurso </h1>
                                    </div>
                                    <div className="col-12">
                                        <Input className="input-login input-modal" type="text" name="nameOfResource" placeholder="Digite o nome do recurso" onBlur={this.changeHandler}/>
                                    </div>
                                    <div className="col-12">
                                        <Input className="input-login input-modal" type="number" name="numberOfSeats"  placeholder="Número de lugares" onBlur={this.changeHandler}/>
                                    </div>
                                    <div className="col-12">
                                        <label>Possui TV</label>
                                        <Toggle name = "hasTelevision" onChange={this.optionHandler}/>
                                    </div>
                                    <div className="col-12">
                                        <label>Campo de evento ativo</label>
                                        <input type="checkbox" name="activeRoom" onChange={this.optionHandler}/>
                                    </div>
                                    <button type="submit">Cadastrar</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
        </React.Fragment>
      )
    }
}