import React, { Component } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Header from '../../components/header/Header';

export default class Home extends Component{

    render(){
        return(
            <React.Fragment>
               <Sidebar />
                
                <section className="main-content">
                <Header />
                    <h1>Seja Bem Vindo!</h1>
                </section>
            </React.Fragment>
        );
    }
}