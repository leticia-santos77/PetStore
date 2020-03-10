import React, { Component } from 'react';
import './header.css';
import logoutLogo from './logout.png';
import { logout } from '../../service/Auth'
import { Redirect } from 'react-router-dom';

export default class Header extends Component {
  constructor(props){
    super(props)
    this.state = {
      username: sessionStorage.getItem('username'),
      exit: false
    }
  }

  exit = () => {
    logout()
    this.setState({
      exit: true
    });
  }

  render() {
    const { username, exit } = this.state;
    if(exit)
      return <Redirect to={{pathname:"/login"}} />
    else
    return (
        <React.Fragment>
          <div className="main-header">
            <section className="input-header">
            </section>            
            <section className="profile-menu">
              <i className="fas fa-user" ></i>
              <label>{username}</label> 
              <img src={logoutLogo} alt="" onClick={this.exit}/>
            </section>
            
            
          </div>            
        </React.Fragment>
    );
  }
}
