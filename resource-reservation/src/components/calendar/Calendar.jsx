import React, { Component } from 'react';
import Api from '../../service/Api'

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import ptBrLocale from '@fullcalendar/core/locales/pt-br';

import './calendar.css';
import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';
import { formatDate } from '@fullcalendar/core';

export default class Calendar extends Component {

  constructor( props ) {
    super( props )
    this.api = new Api();
    this.state = {
      calendarWeekends: true,
      calendarEvents: []
    }
  }

  formatDate = (date) =>{ // format from 'DD-MM-YYYY hh:mm' to 'YYYY-MM-DD hh:mm'
    let newDate = date.split(' ');
    let day = newDate[0].split('-').reverse().join('-');
    let hour = newDate[1];
    return day + " " + hour;
  }

  loadCalendarData = ( dataArray ) => {
    dataArray.map(res =>
      this.setState({
        calendarEvents: this.state.calendarEvents.concat({ // creates a new array
          title: res.resourceName,
          start: this.formatDate(res.date),
          qtdOfPeople: res.quantityOfPeople,
          useTv: res.useTv
        })
      })
    )
  }

  componentDidMount() {
    this.loadData = this.api.getBookings().then( value => 
      this.loadCalendarData(value.data)
    )
  }

  componentWillUnmount() {
    this.loadData.cancel()
  }

  render() {

    return (
      <React.Fragment>
        <h1 className="content-title">Calendario</h1>
        
        <section className="main-calendar">
          <FullCalendar 
            defaultView="dayGridMonth" 
            plugins={[dayGridPlugin, interactionPlugin]}
            locale={ptBrLocale}
            timeZone = "America/Sao_Paulo"
            events={this.state.calendarEvents}
            dateClick={this.handleDateClick}
            eventClick={this.eventClick}
          />
        </section>

      </React.Fragment>
    );
  }

  eventClick = ( evt ) => {
    let resource = evt.event.title;
    let date = evt.event.start.getUTCDate() + "/" + evt.event.start.getUTCMonth() + "/" + evt.event.start.getUTCFullYear();
    let time = evt.event.start.getUTCHours() + ":" + evt.event.start.getUTCMinutes();
    let people = evt.event.extendedProps.qtdOfPeople;
    let tv = evt.event.extendedProps.useTv ? "Sim" : "Não";
    
    alert("Recurso: " + resource + 
        "\nData: " + date +
        "\nHora: " + time +
        "\nHaverá um total de " + people + " pessoa(s)" +
        "\nUtilização da tv: " + tv );
  }
}
