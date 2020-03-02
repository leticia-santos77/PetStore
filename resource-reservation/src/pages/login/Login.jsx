import React, { Component } from 'react';

export default class login extends Component{
    constructor(){
        super();
        this.state = {
            email:'',
            password:'',
            access:false            
        }
    }
    render(){
        return (
            <div>
                <h2>Reserva de Recurso</h2>
                <input name="userName" placeholder="usuário"></input>
                <input name="password" type="password" placeholder="senha"></input>
                <button>ENTRAR</button>
            </div>
        )
    }
}