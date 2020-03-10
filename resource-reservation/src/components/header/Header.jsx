import React, { Component } from 'react';
import './header.css';

export default class Header extends Component {
  constructor(props){
    super(props)
    this.state = {
      username: sessionStorage.getItem('username')
    }
    console.log(this.state.username)
  }

  render() {
    const { username } = this.state;
    
    return (
        <React.Fragment>
          <div className="main-header">
            <section className="input-header">
            </section>            
            <section className="profile-menu">
              <i className="fas fa-user" ></i>
              <label>{username}</label> 
            </section>
            
            
          </div>            
        </React.Fragment>
    );
  }
}
