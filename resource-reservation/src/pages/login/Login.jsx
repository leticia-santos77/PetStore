import React, { Component } from "react";
import "./login.css";
import Logo from "./logoECOS.png";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import { login } from "../../service/Auth";
import { Redirect } from "react-router-dom";
import Api from "../../service/Api";

export default class Login extends Component {
  constructor() {
    super();
    this.api = new Api();
    this.state = {
      username: "",
      password: "",
      access: false
    };
  }
  handleChange = event => {
    if (event.target.name === "password") {
      this.setState({ password: event.target.value });
    }
    if (event.target.name === "username") {
      this.setState({ username: event.target.value });
    }
  };
  onClick = async () => {
    const { username, password } = this.state;

    await this.api.postLogin(username, password).then(response => {
      if (response.status === 200) {
        login(response.headers.authorization);
        
          let log = JSON.parse(response.config.data);
          sessionStorage.setItem('username',log.username);
      }
      this.setState({ access: true });
      if (response.status === 400) {
        this.setState({ access: false });
      }
    });
  };

  render() {
    const { access } = this.state;
    if (access) return <Redirect to={{ pathname: "/home" }} />;
    else
      return (
        <div className="container-login">
          <div className="box">
            <div className="div-logo">
              <img alt="logo" className="logo" src={Logo} />
            </div>
            <div className="div-login div-login-text">
              <h2>Reserva de Recurso</h2>
            </div>
            <div className="div-login div-login-input">
              <Input
                className={"input-login"}
                name="username"
                placeholder={"usuário"}
                onBlur={this.handleChange}
              />
              <Input
                className={"input-login"}
                type={"password"}
                name="password"
                placeholder={"senha"}
                onBlur={this.handleChange}
              />
            </div>
          
          <div className="div-login div-login-button">
              <Button className={"button-login"} onClick={this.onClick.bind()} tittle={'ENTRAR'}></Button>
              </div>
              </div>
        </div>
      );
  }
}
