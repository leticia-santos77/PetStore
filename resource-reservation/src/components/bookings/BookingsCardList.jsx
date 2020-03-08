import React, { Component } from "react";
import Api from "../../service/Api";
import Booking from "../../pages/bookings/Booking";
import Card from "../card/Card";
import "../card/Card.css";

export default class BookingsCardList extends Component {
  constructor(props) {
    super(props);
    this.api = new Api();
    this.state = {
      bookingsElements: []
    };
  }
  requestBookings = async () => {
    return this.api
      .getBookings()
      .then(await (value =>
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
        })
      ))
      .catch("Fail!!");
  };

  componentDidMount() {
    this._asyncRequest = this.requestBookings()
    this.state.bookingsElements.reverse();
    this._asyncRequest = null;
  }
  componentWillUnmount() {
    if (this._asyncReques) {
      this._asyncRequest.cancel();
    }
  }

  render() {
    const { bookingsElements } = this.state;
    return (
      <React.Fragment>
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