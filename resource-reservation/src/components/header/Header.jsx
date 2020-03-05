import React, { Component } from 'react';
import './header.css';

export default class Header extends Component {
  render() {
    return (
        <React.Fragment>
          <div className="main-header">
            <section className="input-header">
              <input type="text" placeholder="Pesquisa"></input>
            </section>
            
            <section className="profile-menu">
              <i className="fas fa-user" ></i>
              <label>Rafael</label> 
            </section>
            
            
          </div>            
        </React.Fragment>
    );
  }
}
