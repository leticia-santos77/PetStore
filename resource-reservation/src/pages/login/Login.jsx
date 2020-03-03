import React, { Component } from 'react';
import './login.css';
import Logo from './logoECOS.png';

export default class login extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            access: false
        }
    }
    render() {
        return (
            <div className="container">
                <div className="box">
                    <div className="div-logo" >
                        <img  className="logo" src={Logo}/>
                    </div>
                    <div className="div-login div-login-text">
                        <h2>Reserva de Recurso</h2>
                    </div>
                    <div className="div-login div-login-input">
                        <input className="input-login" name="userName" placeholder="usuário"></input>
                        <input className="input-login" name="password" type="password" placeholder="senha"></input>
                    </div>
                    <div className="div-login div-login-button">
                        <button className="button-login">ENTRAR</button>
                    </div>
                </div>

            </div>

        )
    }
}