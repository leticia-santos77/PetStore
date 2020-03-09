import React, { Component } from 'react';
import './input.css';

export default class Input extends Component {
  render() {
    const { className, type, name, placeholder, onChange, onBlur, value, defaultValue, min } = this.props
    return (
      <input className={className} type={type} name={name} onChange={onChange} onBlur={onBlur} placeholder={placeholder} value={value} min={min} defaultValue={defaultValue}></input>
    );
  }
}