import React, { Component } from 'react';
import './calendar.css';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';
import ptBrLocale from '@fullcalendar/core/locales/pt-br';
// import { Container } from './styles';

export default class Calendar extends Component {
  render() {
    return (
      <React.Fragment>
        <h1 className="content-title">Calendario</h1>
        
        <section className="main-calendar">
          <FullCalendar 
            defaultView="dayGridMonth" 
            plugins={[dayGridPlugin]}
            locale={ptBrLocale} />
        </section>

      </React.Fragment>
    );
  }
}
