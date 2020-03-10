import React, { Component } from "react";
import "../../components/card/Card.css";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import BookingsCardList from "../../components/bookings/BookingsCardList";
import {Link} from 'react-router-dom';

export default class ListBookings extends Component {

  render() {

    return (
      <React.Fragment>
        <Header user="Gabriel Eugênio">
          {/* <input placeholder="Informe o nome " onChange={this.filterBooking.bind(this)} /> */}
        </Header>
        <Sidebar />

        <div className="main-content">
          <h1 className="content-title">Reservas</h1>
          <Link to={{ pathname: "/calendario" }} >
            <i className="far fa-calendar-alt icon"></i>
          </Link>
          <BookingsCardList /> 
        </div>

      </React.Fragment>
    );
  }
}
