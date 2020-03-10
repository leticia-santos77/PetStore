import React, { Component } from 'react';
import './input.css';

export default class Input extends Component {
  render() {
    const { className, type, name, placeholder, onChange, onBlur, min, value} = this.props
    return (
      <input className={className} type={type} min={min} value={value} name={name} onChange={onChange} onBlur={onBlur} placeholder={placeholder}></input>
    );
  }
}