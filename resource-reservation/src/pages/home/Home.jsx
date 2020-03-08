import React, { Component } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Header from '../../components/header/Header';
import BookingsCardList from '../../components/bookings/BookingsCardList';
import Welcome from '../../components/banner/Welcome';

export default class Home extends Component{

    render(){

        return(

            <React.Fragment>
                <Header user="Rafael Scotti"/>
                <Sidebar />{/*<ListBookings /> */}
                <section className="main-content">
                    <Welcome />

                    
                    
                   
                
                    <BookingsCardList />
                    
                </section>
                
            </React.Fragment>
        );
    }
}