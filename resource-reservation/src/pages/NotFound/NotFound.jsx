import React, { Component } from 'react';
import './notfound.css';
import Header from '../../components/header/Header';
import Sidebar from '../../components/sidebar/Sidebar';

export default class NotFound extends Component {
  render() {
    return (
      <React.Fragment>
        <Header user="Rafael Scotti" />
        <Sidebar />
        <section className="main-content">
          <div className="not-found">
            <h1>404</h1>
            <h2>Página não encontrada!</h2>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
