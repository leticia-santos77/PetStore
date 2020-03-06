import React, { Component } from 'react';
import axios from 'axios';
import './modal.css';
import '../../grid.css';
import '../button/button.css';
import './modal-form.css';
import Input from '../input/Input';
import Toggle from '../input/Toggle';
import Modal from './Modal';
import Button from '../button/Button';



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

    componentDidMount() {
        const {title} = this.props
        this.setState({
            name: title
        });
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
                <Modal title="0" id="booking">
                    <div className="modal-title">
                        <div className="item">
                            <h2 className="title"> {this.state.name} </h2>
                        </div>
                        <form onSubmit={this.submitHandler}>
                            <div className="container-form">
                                <div className="item">
                                    <Input className="input-login input-modal" type="text" name="name" placeholder="Digite o nome do recurso" onBlur={this.changeHandler} />
                                </div>
                                <div className="item">
                                    <Input className="input-login input-modal" type="number" min={1} name="numberOfSeats" placeholder="Número de lugares" onBlur={this.changeHandler} />
                                </div>
                                <div className="item active-room">
                                    <label>Possui TV</label>
                                    <div className="toggle-right">
                                        <Toggle name="hasTelevision" onChange={this.optionHandler} />
                                    </div>
                                </div>
                                <div className="item active-room">
                                    <label>Sala ativa</label>
                                    <Toggle type="checkbox" name="activeRoom" onChange={this.optionHandler} />
                                </div>
                                <div className="item button-center">
                                    <Button type="submit" className="button button-blue button-large" tittle="Cadastrar" />
                                </div>
                            </div>
                        </form>
                    </div>
                </Modal>
            </React.Fragment>
        )
    }
}