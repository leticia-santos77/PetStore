import React, { Component } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Header from '../../components/header/Header';
import Calendar from '../../components/calendar/Calendar';

export default class Home extends Component{

    render(){
        return(

            <React.Fragment>
                <Header user="Rafael Scotti"/>
                <Sidebar />
                <section className="main-content">
                    <Calendar />
                </section>
            </React.Fragment>
        );
    }
}