import React, { Component } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Header from '../../components/header/Header';
import ResourceForm from '../../components/modal/ModalResources';
import BookingForm from '../../components/modal/BookingForm';

export default class Home extends Component{

    render(){
        return(
            <React.Fragment>
                <Header user="Rafael Scotti"/>
                <Sidebar />
                <section className="main-content">
                    <h1>Seja Bem Vindo!</h1>
                    <ResourceForm></ResourceForm>
                    <BookingForm />
                </section>
                
            </React.Fragment>
        );
    }
}