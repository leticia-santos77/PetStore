import React, { Component } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Header from '../../components/header/Header';
import BookingsCardList from '../../components/bookings/BookingsCardList';
import Welcome from '../../components/banner/Welcome';
import { Link } from 'react-router-dom';

export default class Home extends Component{

    render(){

        return(

            <React.Fragment>
                <Header user="Rafael Scotti"/>
                <Sidebar />{/*<ListBookings /> */}
                <section className="main-content">
                    <Welcome />
                    <h1 className="content-title">Reservas </h1>
                    <Link to={{ pathname: "/calendario" }} >
                        <i className="far fa-calendar-alt icon"></i>
                    </Link>
                    <BookingsCardList />
                    
                </section>
                
            </React.Fragment>
        );
    }
}