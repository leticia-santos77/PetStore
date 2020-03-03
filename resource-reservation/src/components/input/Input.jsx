import React, { Component } from 'react';
import './input.css';

export default class Input extends Component {
  render() {
    const { className, type, placeholder, onChange } = this.props
    return (
      <React.Fragment>
        <input className={className} type={type} onChange={onChange} placeholder={placeholder}></input>
      </React.Fragment>
    );
  }
}