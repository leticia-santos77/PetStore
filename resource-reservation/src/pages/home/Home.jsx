import React, { Component } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Header from '../../components/header/Header';
import ResourceForm from '../../components/modal/ModalResources';

export default class Home extends Component{

    render(){
        return(
            <React.Fragment>
                <Header user="Rafael Scotti"/>
                <Sidebar />
                <section className="main-content">
                    <h1>Seja Bem Vindo!</h1>
                </section>
                <ResourceForm></ResourceForm>
            </React.Fragment>
        );
    }
}