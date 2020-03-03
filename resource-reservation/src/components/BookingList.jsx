import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import Api from '../service/Api';
import Booking from '../components/Booking';

export default class BookingList extends Component {

  constructor( props ) {
    super( props );
    this.api = new Api();
    this.state = {
      bookings: []
    }
  }

  requestBookings = () => {
    return this.api.getBookings()
      .then( value => this.setState({
        bookings: value.data.map( b => b = new Booking(
          b.id,
          b.nameOfResource,
          b.use_tv,
          b.date,
          b.quantityOfPeople
        ))}))
      .catch( "Nao foi possivel carregar o conteúdo" )
  }
  componentDidMount() {
    this._asyncRequest = this.requestBookings();
    this._asyncRequest = null;
  }

  componentWillUnmount() {
    if ( this._asyncReques ) {
      this._asyncRequest.cancel();
    }
  }

  render() {
    const { bookings } = this.state;
    return (
      <React.Fragment>
        <div>
            <h1>Bookings</h1>
            <table>
              <thead>
                <tr>
                  <th>Id</th>
                  {/* <th>Nome do recurso</th> */}
                  <th>Data</th>
                  <th> Quantidade de pessoas</th>
                  <th>TV</th>
                </tr>
              </thead>
              <tbody>
                {
                  bookings.map(bookings => {
                    return <tr>
                      <th>{bookings.id}</th>
                      {/* <th>>{bookings.nameOfResource}</th> */}
                      <th>{bookings.date}</th>
                      <th>{bookings.quantityOfPeople}</th>
                      <th>{bookings.use_tv ? `Sim` : `Não`}</th>
                    </tr>
                  })
                }
              </tbody>
            </table>
        </div>
      </React.Fragment>
    )
  }
}