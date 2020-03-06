import React, { Component } from 'react';
import axios from 'axios';
import Header from '../../components/header/Header';
import Sidebar from '../../components/sidebar/Sidebar';
import Input from '../../components/input/Input';
import Toggle from '../../components/input/Toggle';
import Button from '../../components/button/Button';
import './resource-registration.css';
import '../../components/input/input.css';
import '../../components/button/Button';
import '../../components/input/toggle.css';


export default class ResourceForm extends Component {
    state = {
        name: '',
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

        axios.post('http://localhost:8082/api/resources/add', { name: this.state.name, numberOfSeats: this.state.numberOfSeats, hasTelevision: this.state.hasTelevision, activeRoom: this.state.activeRoom })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    optionHandler = e => {

        let aux = this.state[e.target.name];
        this.setState({
            [e.target.name]: !aux
        })
    }

    render() {
        return (
            <React.Fragment>
                <Header user="Rafael Scotti" />
                <Sidebar />
                <div className="main-content">
                    <div className="form">
                        <form onSubmit={this.submitHandler}>
                            <div>
                                <div className="justify">
                                    <label>Nome do recurso:</label>
                                    <Input className="input-form" type="text" name="name" onBlur={this.changeHandler} />
                                </div>
                                <div className="justify">
                                    <label> Número de lugares: </label>
                                    <Input className="input-form" type="number" name="numberOfSeats" onBlur={this.changeHandler} />
                                </div>
                                <div className="justify">
                                    <label>Possui TV</label>
                                    <div>
                                        <Toggle name="hasTelevision" onChange={this.optionHandler} />
                                    </div>
                                </div>
                                <div className="justify">
                                    <label>Sala ativa</label>
                                    <Toggle type="checkbox" name="activeRoom" onChange={this.optionHandler} />
                                </div>
                                <div>
                                    <Button type="submit" className="button button-blue button-large" tittle="Cadastrar" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </React.Fragment>
        )

    }
}