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
  requestBookings = async () => {
    return this.api
      .getBookings()
      .then(await (value =>
        this.setState({
          bookings: value.data.map(
            b => 
              (b = new Booking(
                b.id,
                b.resourceId,
                b.nameResource,
                b.useTv,
                b.quantityOfPeople,
                b.creationDate,
                b.date,
                b.canceled
              )) ,console.log(value.data)
          )
          }) 
      ))
      .catch("Fail!!");    
  };

  componentDidMount() {
    this._asyncRequest = this.requestBookings() 
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
                      <h1>{booking.nameResource}</h1>
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
            })}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
