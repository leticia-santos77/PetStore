import React, { Component } from "react";
import Api from "../../service/Api";
import Booking from "./Booking";
import Card from "../../components/card/Card";
import "../../components/card/Card.css";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";

export default class ListBookings extends Component {
  constructor(props) {
    super(props);
    this.api = new Api();
    this.state = {
      bookings: []
    };
  }
  requestBookings = () => {
    return this.api
      .getBookings()
      .then(value =>
        this.setState({
          bookings: value.data.map(
            b =>
              (b = new Booking(
                b.id,
                b.resourceId,
                b.useTv,
                b.quantityOfPeople,
                b.creationDate,
                b.date,
                b.canceled
              ))
          )
        })
      )
      .catch("Fail!!");
  };
  componentDidMount() {
    this._asyncRequest = this.requestBookings();
    this.state.bookings.reverse();
    this._asyncRequest = null;
  }
  componentWillUnmount() {
    if (this._asyncReques) {
      this._asyncRequest.cancel();
    }
  }

  render() {
    const { bookings } = this.state;

    return (
      <React.Fragment>
        <Header user="Gabriel Eugênio" />
        <Sidebar />
        <div className="main-content">
          <h1 className="content-title">Reservas</h1>
          <div className="container-card">
            {bookings.map(booking => {
              return (
                <Card className="styleCard" key={booking.id}>
                  <ul>
                    <li>
                      <h1>Recurso Nome</h1>
                    </li>
                    <li>
                      <i className="fas fa-users"></i>
                      {booking.quantityOfPeople} Pessoas
                    </li>
                    <li>
                      {booking.useTv ? (
                        <i className="far fa-check-circle"></i>
                      ) : (
                        <i className="far fa-times-circle"></i>
                      )}
                      Televisão
                    </li>
                    <li>{booking.creationDate}</li>
                  </ul>
                </Card>
              );
            })}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
