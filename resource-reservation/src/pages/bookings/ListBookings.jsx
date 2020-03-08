import React, { Component } from "react";
import "../../components/card/Card.css";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import BookingsCardList from "../../components/bookings/BookingsCardList";

export default class ListBookings extends Component {

  render() {

    return (
      <React.Fragment>
        <Header user="Gabriel Eugênio" />
        <Sidebar />
        <div className="main-content">
          <h1 className="content-title">Reservas</h1>
          <BookingsCardList />
        </div>
      </React.Fragment>
    );
  }
}
