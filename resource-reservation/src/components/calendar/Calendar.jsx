import React, { Component } from 'react';
import Api from '../../service/Api'

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import ptBrLocale from '@fullcalendar/core/locales/pt-br';
import Popup from 'reactjs-popup';

import './calendar.css';
import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';

export default class Calendar extends Component {

  constructor( props ) {
    super( props )
    this.api = new Api();
    this.state = {
      calendarWeekends: true,
      calendarEvents: []
    }
  }

  formatDate = (date) =>{ // format from 'DD/MM/YYYY hh:mm' to 'YYYY-MM-DD hh:mm'
    let newDate = date.split(' ');
    let day = newDate[0].split('/').reverse().join('-');
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
    this.loadData = null;
  }

  componentWillUnmount() {
    if(this.loadData) {
      this.loadData.cancel()
    }
  }

  render() {

    return (
      <React.Fragment>       
       <Popup trigger={ <section className="main-calendar">
          <FullCalendar 
            defaultView="dayGridMonth" 
            plugins={[dayGridPlugin, interactionPlugin]}
            locale={ptBrLocale}
            timeZone = "America/Sao_Paulo"
            events={this.state.calendarEvents}
            eventClick={this.eventClick}
            eventLimit={true}
          /></section>} modal>
        <h2>Recuso: {this.state.resource}</h2>
        <h2>Data: {this.state.date}</h2>
        <h2>Hota: {this.state.time}</h2>
        <h2>pessoas: {this.state.people}</h2>
        <h2>tv: {this.state.tv}</h2>

        </Popup>
          
      </React.Fragment>
    );
  }

  eventClick  = async ( evt ) => {
     this.setState({
      resource: evt.event.title,
      date: evt.event.start.getUTCDate() + "/" + evt.event.start.getUTCMonth() + "/" + evt.event.start.getUTCFullYear(),
      time: evt.event.start.getUTCHours() + ":" + evt.event.start.getUTCMinutes(),
      people: evt.event.extendedProps.qtdOfPeople,
      tv: evt.event.extendedProps.useTv ? "Sim" : "Não"
    })
  }
}
