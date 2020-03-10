import React, { Component } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Header from '../../components/header/Header';
import BookingsCardList from '../../components/bookings/BookingsCardList';
import Welcome from '../../components/banner/Welcome';
import { Link } from 'react-router-dom';
import calendar from '../../components/calendar/calendar.png'
export default class Home extends Component{

    render(){

        return(

            <React.Fragment>
                <Header user="Rafael Scotti"/>
                <Sidebar />{/*<ListBookings /> */}
                <section className="main-content">
                    <Welcome />
                    <div className="title-bar">
                    <h1 className="content-title">Reservas </h1>
                    <Link to={{ pathname: "/calendario" }} >
                        <img src={calendar} alt=""/>
                    </Link>
                    </div>
                    <BookingsCardList />
                </section>
            </React.Fragment>
        );
    }
}