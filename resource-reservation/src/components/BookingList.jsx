import React, { Component } from 'react';
//import { Link } from 'react-router-dom';

export default class BookingList extends Component {
  constructor() {
    super()
    this.state = {
      list: [],
    }
  }

  /* componentDidMount() {
    this.api.getAgencias()
      .then((res) => {
        this.setState({
          agencias: res.data.agencias
        });
        console.log(res.data)
      }).catch((err) => {
        console.log(err);
      })
    }  */


  render() {
    const { list } = this.state;
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
                  list.map(list => {
                    return <tr>
                      <th>{list.id}</th>
                      {/* <th>>{list.nomeDoRecurso}</th> */}
                      <th>>{list.date}</th>
                      <th>>{list.quantityOfPeople}</th>
                      <th>>{list.use_tv ? <span>Sim</span> : <span>Não</span>}</th>
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