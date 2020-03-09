import React, { Component } from 'react';
import Header from '../../components/header/Header';
import Sidebar from '../../components/sidebar/Sidebar';
import Input from '../../components/input/Input';
import Toggle from '../../components/input/Toggle';
import Button from '../../components/button/Button';
import Api from '../../service/Api';
import './resource-registration.css';

export default class ResourceForm extends Component {
    constructor(props) {
        super(props);
        this.api = new Api();
        this.state = {
            name: '',
            numberOfSeats: '',
            hasTelevision: false,
            activeRoom: false
        }
    }

    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    submitHandler = e => {
        e.preventDefault();
            return this.api
          .postResources({name: this.state.name, numberOfSeats: this.state.numberOfSeats, hasTelevision: this.state.hasTelevision, activeRoom: this.state.activeRoom })
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
                                    <label>Recurso:</label>
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