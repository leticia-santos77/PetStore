import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import Api from '../service/Api';
import Booking from '../components/Booking';

export default class BookingList extends Component {
  /* constructor() {
    super()
    this.api = new Api();
    this.state = {
      list: [],
    }
  } */

  /* componentDidMount() {
    this.api.getBookings()
      .then((res) => {
        this.setState({
          list: res.data.bookings
        });
        console.log(res.data)
      }).catch((err) => {
        console.log(err);
      })
    } 
 */

  constructor( props ) {
    super( props );
    this.api = new Api();
    this.state = {
      bookings: []
    }
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

  requestBookings = () => {
    return this.api.getBookings()
      .then( value => this.setState({
        bookings: value.data.bookings.map( b => b = new Booking(
          b.id,
          b.nome,
        ))}))
      .catch( "Nao foi possivel carregar o conteúdo" )
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
                  <th>TV</th>
                </tr>
              </thead>
              <tbody>
                {
                  bookings.map(bookings => {
                    return <tr>
                      <th>{bookings.id}</th>
                      {/* <th>>{bookings.nomeDoRecurso}</th> */}
                      <th>>{bookings.date}</th>
                      <th>>{bookings.quantityOfPeople}</th>
                      <th>>{bookings.use_tv ? <span>Sim</span> : <span>Não</span>}</th>
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