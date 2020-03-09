import React, { Component } from 'react';
import Header from '../../components/header/Header';
import Sidebar from '../../components/sidebar/Sidebar';
import Input from '../../components/input/Input';
import Toggle from '../../components/input/Toggle';
import Button from '../../components/button/Button';
import './resource-registration.css';
import Dropdown from 'react-dropdown';
import Api from '../../service/Api';
import Booking from '../bookings/Booking'


export default class ResourceForm extends Component {
    constructor(props) {
        super(props);
        this.api = new Api();
        this.state = {
          booking: [],
          resourceName: '',
          quantityOfPlaces: '',
          useTv: false
        };
      }
      requestBookings = async () => {
        return this.api
          .getBookings()
          .then(await (value =>
            this.setState({
              booking: value.data.map(
                b =>
                  (b = new Booking(
                    b.resourceName,
                    b.quantityOfPeople,
                    b.useTv
                  ))
              )
            })
          ))
          .catch("Fail!!");
          
        };
      componentDidMount() {
        this._asyncRequest = this.requestBookings()
      }

    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    submitHandler = e => {
        e.preventDefault();

        return this.api
          .postBookings({resourceName: this.state.resourceName, quantityOfPeople: this.state.quantityOfPeople, useTv: this.state.useTv, date: this.state.date })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    optionHandler = e => {
        let aux = this.state[e.target.name];
        this.setState({
            [e.target.name]: !aux
        })
    }

    render() {
        const { booking } = this.state;
        return (
            <React.Fragment>
                <Header user="Rafael Scotti" />
                <Sidebar />
                <div className="main-content">
                    <h2>> Nova Reserva</h2>
                    <div className="form">
                        <form onSubmit={this.submitHandler}>
                            <div>
                                <div className="justify">
                                    <label>Nome do recurso:</label>
                                    <Dropdown options={ booking.map(booking => booking.resourceName)} onChange={this._onSelect} placeholder="Select an option"/>
                                </div>
                                <div className="justify">
                                    <label> Quantidade de lugares: </label>
                                    <Input className="input-form" type="number" name="quantityOfPeople" onBlur={this.changeHandler} defaultValue={booking.quantityOfPeople} />
                                </div>
                                <div className="justify">
                                    <label> Data: </label>
                                    <Input className="input-form" type="datetime-local" name="date" onBlur={this.changeHandler} value={booking.date} />
                                </div>
                                <div className="justify">
                                    <label>Usará televisão?</label>
                                    <div>
                                        <Toggle name="useTv" onChange={this.optionHandler} />
                                    </div>
                                </div>
                                <div>
                                    <Button type="submit" className="button button-blue button-large" tittle="Cadastrar" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}