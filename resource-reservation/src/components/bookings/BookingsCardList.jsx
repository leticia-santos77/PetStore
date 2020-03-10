import React, { Component } from "react";
import Api from "../../service/Api";
import Booking from "../../pages/bookings/Booking";
import Card from "../card/Card";
import "../card/Card.css";
import "./bookingsCardList.css";
import Popup from 'reactjs-popup';
import ImgEdit from '../../pen.png';

import "../../components/card/Card.css";
import '../../components/modal/modal.css';
import '../../grid.css';
import '../../components/button/button.css';
import '../../components/modal/modal-form.css';
import '../../app.css'
import '../../components/input/toggle.css'
import '../../pages/resources/popup.css';


export default class BookingsCardList extends Component {
  constructor(props) {
    super(props);
    this._isMounted = false;
    this.api = new Api();
    this.state = {
      bookingsElements: []
    };
  }


  submit = e => {
    e.preventDefault();
    this.api.putBooking(
      this.state.id,
      this.state.useTv,
      this.state.quantityOfPeople,
      this.state.date,
      this.state.canceled
    ).then(this.requestBookings)
  }

  requestBookings = () => {
    return this.api
      .getBookings().then(value => {
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
  };

  componentDidMount() {
    this._isMounted = true;
    this.requestBookings();
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  
  updateProps = e => {
    this.setState({
      id: e.target.id,
      quantityOfPeople: null,
      date: null,
      useTv: null,
      canceled: null,
    })
  }

  bookingEdit = e => {

    if (e.target.name === 'canceled') {
      this.setState({
        [e.target.name]: e.target.checked ? false : true
      })
    } else {
      this.setState({
        [e.target.name]: e.target.value
      })
    }
    if (e.target.name === "useTv") {
      let aux = e.target.checked ? true : false
      this.setState({
        [e.target.name]: aux
      })
    }
  }

  render() {
    const { bookingsElements } = this.state;

    return (
      <React.Fragment>
        <section className="section-header">

        </section>
        <div className="container-card">
          {bookingsElements.map(booking => {
            let fullData = booking.date.split(" ");
            let data = fullData[0];
            let hour = fullData[1];
            return (
              <Card className="styleCard" key={booking.id}>
                <ul>
                  <li onClick={this.updateProps} >
                    <h1>{booking.resourceName}</h1>
                    <Popup trigger={<img id={booking.id} className="pen" alt="Imagem de editar" name="id" src={ImgEdit} />} modal>
                      {close => (

                        <div className="modal">
                          <button className="button-clese-popup close-popup" onClick={close}>
                            &times;
                            </button>
                          <div className="modal-title">
                            <div className=" popup-title ">
                              <h2 className="popup-title">{booking.resourceName}</h2>
                            </div>
                            <form onSubmit={this.submitHandler}>
                              <div className="container-form">
                                <div className="item">
                                  <input name="quantityOfPeople" className="input-popup input-login input-modal"
                                    onBlur={this.bookingEdit} type="number" min={1} placeholder="Quantidade de pessoas"
                                    defaultValue={booking.quantityOfPeople}>
                                  </input>
                                </div>
                                <div className="item">
                                  <input name="date" className="input-popup input-login input-modal"
                                    onBlur={this.bookingEdit} type="date-time" placeholder="Data da Reserva" defaultValue={booking.date}
                                  ></input>
                                </div>
                                <div className="item active-room" >
                                  <label>Uso da TV</label>
                                  <div className="toggle-right" name="useTv" onBlur={this.bookingEdit} value={`${booking.useTv ? true : false}`}>
                                    <label className="switch">
                                      <input type="checkbox" name="useTv" defaultChecked={booking.useTv ? true : false}
                                        defaultValue={`${!(booking.useTv)}`} />
                                      <span className="slider round" />
                                    </label>
                                  </div>
                                </div>
                                <div className="item active-room">
                                  <label>Reserva ativa</label>
                                  <div className="toggle-right" name="canceled" onClick={this.bookingEdit} value={`${!(booking.canceled)}`}>
                                    <label className="switch">
                                      <input type="checkbox" name="canceled" defaultChecked={!(booking.canceled)}
                                        defaultValue={`${!(booking.canceled)}`} />
                                      <span className="slider round" />
                                    </label>
                                  </div>
                                </div>
                                <div className="item button-center" >
                                  <button onClick={this.submit} type="submit" className="button-popup button button-blue button-large"
                                    title="Atualizar">Atualizar</button>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      )}
                    </Popup>

                  </li>
                  <li className="li-icon-title">
                    <p><i className="fas fa-users blue "></i>
                      {booking.quantityOfPeople} Pessoas</p>
                  </li>
                  <li className="li-icon-title">
                    <p>{booking.useTv ? <i className="far fa-check-circle green"></i> : <i className="far fa-times-circle red"></i>}
                      Televisão</p>
                  </li>
                  <li>
                    <p>{data}</p>
                    <p>{hour}h</p>
                    </li>
                </ul>
              </Card>
            );
          })}
        </div>
      </React.Fragment>
    )
  }
}