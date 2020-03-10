import React, { Component } from 'react';
import './header.css';

export default class Header extends Component {
  render() {
    const { user } = this.props;
    return (
        <React.Fragment>
          <div className="main-header">
            <section className="input-header">
            </section>            
            <section className="profile-menu">
              <i className="fas fa-user" ></i>
              <label>{user}</label> 
            </section>
            
            
          </div>            
        </React.Fragment>
    );
  }
}
