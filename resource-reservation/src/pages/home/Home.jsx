import React, { Component } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Header from '../../components/header/Header';
import BookingForm from '../../components/modal/BookingForm';
import ModalResources from '../../components/modal/ModalResources';

export default class Home extends Component{

    render(){
        return(

            <React.Fragment>
                <Header user="Rafael Scotti"/>
                <Sidebar />
                <section className="main-content">
                    <h1>Seja Bem Vindo!</h1>
                    <ModalResources></ModalResources>
                    <BookingForm />
                </section>
            </React.Fragment>
        );
    }
}