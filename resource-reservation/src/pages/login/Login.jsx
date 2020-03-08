import React, { Component } from 'react';
import './login.css';
import Logo from './logoECOS.png';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button'
import { login } from '../../service/Auth'
import Api from '../../service/Api'
import axios from 'axios'

export default class Login extends Component {
    constructor() {
        super();
        this.api = new Api();
        this.state = {
            username: '',
            password: '',
            access: false,
            error:''
        }
    }
    handleChange = (event) => {
        if (event.target.name === "username")
          this.setState({ username: event.target.value })
    
        if (event.target.name === "password")
          this.setState({ password: event.target.value })
        
          console.log(this.state.username)
    }
   /*  onClick = async () => {
        const { username, password } = this.state;
        
        const response = await this.api.postLogin(username , password).then(response => {if(response.status === 200){localStorage.setItem('Authorization',response.data.token)}})
     
    } */

    onClick = async () => {
   
        await axios.post('http://localhost:8081/login',{username: this.state.username, password: this.state.password}).then(
                                                                                                         response =>{
                                                                                                           if (response.status === 200) {
                                                                                                            console.log(response)
                                                                                                            login( response.data.token)
                                                                                                             this.setState({ redirecionaParaProximaPagina: true })
                                                                                                             if (response.status === 400) {
                                                                                                               this.setState({ redirecionaParaProximaPagina: false })
                                                                                                             } 
                                                                                                           }
           
         })
       }
    render() {
        return (
            <div className="container-login">
                <div className="box">
                    <div className="div-logo" >
                        <img alt="logo" className="logo" src={ Logo }/>
                    </div>
                    <div className="div-login div-login-text">
                        <h2>Reserva de Recurso</h2>
                    </div>
                    <div className="div-login div-login-input">
                   {/*      <Input className={"input-login"} name="username" placeholder={"usuário"} onBlur={this.handleChange}/> */}
                 {/*        <Input className={"input-login"} type={'password'} name="password"  placeholder={"senha"} onBlur={this.handleChange}/> */}
                 <input className="input-login" type="text" name="username" placeholder={"usuário"} onBlur={this.handleChange}/>

                        <input className="input-login" type="password" name="password" placeholder={"senha"} onBlur={this.handleChange}/>
                    </div>
                    <div className="div-login div-login-button">
                        <Button className={"button-login"} onClick={this.onClick} title={"ENTRAR"}></Button>
                    </div>
                </div>

            </div>

        )
    }
}