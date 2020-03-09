import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './sidebar.css'


export default class Sidebar extends Component {

    navSlide = () => {
        const burger = document.querySelector('.burger')
        const verticalNav = document.querySelector('.vertical-nav')
        // Toggle Nav
        verticalNav.classList.toggle('nav-active');

        //burger animation
        burger.classList.toggle('toggle')
    }


  render() {
    return (
        <div>
            <div className="burger" onClick={this.navSlide}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>

            <nav className="vertical-nav">
                <header><p>ECOS</p></header>
                <ul>
                    <li><Link to={{pathname:`/home`}}><p><i className="fas fa-home"></i>Dashboard</p></Link></li>
                    <li><Link to={{pathname:`/cadastroreserva`}}><p><i className="fas fa-plus"></i>Nova Reserva</p></Link></li>
                    <li><Link to={{pathname:`/cadastrorecurso`}}><p><i className="fas fa-folder-plus"></i>Criar Recurso</p></Link></li>
                    <li><Link to={{pathname:`/recursos`}}><p><i className="fas fa-stream"></i>Lista de Recursos</p></Link></li>
                </ul>
            </nav>

            
        </div>
    );
  }
}
