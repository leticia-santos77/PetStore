import React, { Component } from 'react';
import './input.css';

export default class Input extends Component {
  render() {
    const { className, type, placeholder, onChange, onBlur } = this.props
    return (
      <React.Fragment>
        <input className={className} type={type} onChange={onChange} onBlur={onBlur} placeholder={placeholder}></input>
      </React.Fragment>
    );
  }
}