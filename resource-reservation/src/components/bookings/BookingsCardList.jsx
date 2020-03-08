import React, { Component } from "react";
import Api from "../../service/Api";
import Booking from "../../pages/bookings/Booking";
import Card from "../card/Card";
import "../card/Card.css";
import "./bookingsCardList.css";

export default class BookingsCardList extends Component {
  constructor(props) {
    super(props);
    this._isMounted = false;
    this.api = new Api();
    this.state = {
      bookingsElements: []
    };
  }
  requestBookings = () => {
    return this.api
      .getBookings()
  };

  componentDidMount() {
    this._isMounted = true;
    this._asyncRequest = this.requestBookings().then(value => {
      if (this._isMounted) {
        this.setState({
          bookingsElements: value.data.map(
            b =>
              (b = new Booking(
                b.id,
                b.resourceId,
                b.resourceName,
                b.useTv,
                b.quantityOfPeople,
                b.creationDate,
                b.date,
                b.canceled
              ))
          )
        });
      }
    });
    this.state.bookingsElements.reverse();
    this._asyncRequest = null;
  }
  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const { bookingsElements } = this.state;
    return (
      <React.Fragment>
        <section className="section-header">

        </section>
        <div className="container-card">

          {
            bookingsElements.map(booking => {
              return (
                <Card className="styleCard" key={booking.id}>
                  <ul>
                    <li>
                      <h1>{booking.resourceName}</h1>
                    </li>
                    <li>
                      <p><i className="fas fa-users blue"></i>
                        {booking.quantityOfPeople} Pessoas</p>
                    </li>
                    <li>
                      <p>{booking.useTv ? <i className="far fa-check-circle green"></i> : <i className="far fa-times-circle red"></i>}
                        Televisão</p>
                    </li>
                    <li><p>{booking.date}</p></li>
                  </ul>
                </Card>
              );
            })
          }
        </div>
      </React.Fragment>
    )
  }
}