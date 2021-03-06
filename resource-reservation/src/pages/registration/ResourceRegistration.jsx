import React, { Component } from 'react';
import Header from '../../components/header/Header';
import Sidebar from '../../components/sidebar/Sidebar';
import Input from '../../components/input/Input';
import Toggle from '../../components/input/Toggle';
import Button from '../../components/button/Button';
import Api from '../../service/Api';
import './resource-registration.css';
import Swal from 'sweetalert2';

export default class ResourceForm extends Component {
    constructor(props) {
        super(props);
        this.api = new Api();
        this.state = {
            name: "",
            numberOfSeats: 0,
            hasTelevision: false,
            activeRoom: false,
            erro: ""
        }
    }
    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        })

    }
    optionHandler = e => {
        let aux = this.state[e.target.name];
        this.setState({
            [e.target.name]: !aux
        })
    }
    submitHandler = e => {
        const { name, numberOfSeats, hasTelevision, activeRoom } = this.state
        try {
            e.preventDefault();
            return this.api.postResources(name, numberOfSeats, hasTelevision, activeRoom)
                .then(() => {
                    Swal.fire(
                        'Sucesso!',
                        'Recurso criado com sucesso!',
                        'success'
                    )
                }).catch(() => {
                    Swal.fire(
                        'Oh, não!',
                        'Verifique os dados informados',
                        'error'
                    )
                })
        } catch (err){}
    }


render() {
    return (
        <React.Fragment>
            <Header user="Rafael Scotti" />
            <Sidebar />
            <div className="main-content">
                <h1 className="content-title">Novo Recurso</h1>
                    <div className="form-resource">
                        <form onSubmit={this.submitHandler}>
                            <div>
                                <div className="justify">
                                    <label>Recurso:</label>
                                    <Input className="input-form" type="text" placeholder="Nome do Recurso" name="name" onBlur={this.changeHandler} />
                                </div>
                                <div className="justify">
                                    <label> Número de lugares: </label>
                                    <Input className="input-form" type="number" placeholder="Número de lugares" name="numberOfSeats" onBlur={this.changeHandler} />
                                </div>
                                <div className="justify select">
                                    <label>Possui TV</label>
                                    <div>
                                        <Toggle name="hasTelevision" onChange={this.optionHandler} />
                                    </div>
                                </div>
                                <div className="justify select">
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