import React, { Component } from 'react';
import './welcome.css';


export default class Welcome extends Component {
  render() {
    return (
        <header className="main-welcome">
            <h1 className="welcome-title">Bem vindo!</h1>
            <p className="subtile-welcome">Abaixo estão as ultimas reservas efetuadas.</p>
        </header>
    );
  }
}
