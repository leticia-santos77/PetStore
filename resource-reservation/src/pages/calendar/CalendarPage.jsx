import React, { Component } from 'react';
import Header from '../../components/header/Header';
import Sidebar from '../../components/sidebar/Sidebar';
import Calendar from '../../components/calendar/Calendar'


export default class CalendarPage extends Component {
  render() {

    return (
        <div>
            <Header user="Rafael Scotti" />
            <Sidebar />
            <div className="main-content">
                <h1 className="content-title">Calendario</h1>

                <Calendar />
            </div>
        </div>
    );
  }
}
