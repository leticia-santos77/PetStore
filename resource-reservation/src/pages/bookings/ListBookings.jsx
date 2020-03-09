import React, { Component } from "react";
import Api from "../../service/Api";
import Booking from "./Booking";
import Card from "../../components/card/Card";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
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


export default class ListBookings extends Component {
  constructor(props) {
    super(props);
    this.api = new Api();
    this.state = {
      bookings: []
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
    )
      .then(this.requestBookings)


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
                    <li onClick={this.updateProps} >
                      <div className="pen-edit">
                        <Popup trigger={<img id={booking.id} className="pen" alt="Imagem de editar" name="id" src={ImgEdit} />} modal>

                          {close => (

                            <div className="modal">
                              <button className="button-clese-popup close-popup" onClick={close}>
                                &times;        </button>
                              <div className="modal-title">
                                <div className=" popup-title ">
                                  <h2 className="popup-title">{booking.resourceName}</h2>
                                </div>
                                <form onSubmit={this.submitHandler}>
                                  <div className="container-form">
                                    <div className="item">
                                      <input name="quantityOfPeople" className="input-popup input-login input-modal"
                                        onBlur={this.bookingEdit} type="number" min={1} placeholder="Quantidade de pessoas"
                                        defaultValue={booking.quantityOfPeople}
                                      ></input>
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
                                            defaultValue={`${!(booking.useTv)}`}
                                          />
                                          <span className="slider round" />
                                        </label>
                                      </div>
                                    </div>



                                    <div className="item active-room">
                                      <label>Reserva ativa</label>

                                      <div className="toggle-right" name="canceled" onClick={this.bookingEdit} value={`${!(booking.canceled)}`}>
                                        <label className="switch">
                                          <input type="checkbox" name="canceled" defaultChecked={!(booking.canceled)}
                                            defaultValue={`${!(booking.canceled)}`}
                                          />
                                          <span className="slider round" />
                                        </label>
                                      </div>
                                    </div>
                                    <div className="item button-center" >

                                      <button onClick={this.submit} type="submit" className="button-popup button button-blue button-large"
                                        title="Atualizar"
                                      >Atualizar</button>
                                    </div>
                                  </div>
                                </form>
                              </div>
                            </div>
                          )}
                        </Popup>
                      </div>
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
            })}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
