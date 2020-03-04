import React, { Component } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';

export default class Home extends Component{

    render(){
        return(
            <React.Fragment>
                <Sidebar />
                <h1 className="main-content">Seja Bem Vindo!</h1>
            </React.Fragment>
        );
    }
}