import React, { Component } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Header from '../../components/header/Header';
import BookingsCardList from '../../components/bookings/BookingsCardList';
export default class Home extends Component{

    render(){
        return(

            <React.Fragment>
                <Header user="Rafael Scotti"/>
                <Sidebar />{/*<ListBookings /> */}
                <section className="main-content">
                    <h1>
                        Bem vindo!
                    </h1>
                    <BookingsCardList />
                    
                </section>
                
            </React.Fragment>
        );
    }
}