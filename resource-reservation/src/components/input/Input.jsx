import React, { Component } from 'react';
import './input.css';

export default class Input extends Component {
  render() {
    const { className, type, name, placeholder, onChange, onBlur, min } = this.props
    return (
      <React.Fragment>
        <input className={className} type={type} min={min} name={name} onChange={onChange} onBlur={onBlur} placeholder={placeholder}></input>
      </React.Fragment>
    );
  }
}