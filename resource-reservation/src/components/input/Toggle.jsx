import React, { Component } from 'react';
import './toggle.css'

export default class Toggle extends Component {
  
    render() {
      const {name, onChange, checked} = this.props;
      return (
        <label className="switch">
            <input name={name} onChange={onChange} checked={checked} type="checkbox"/>
            <span className="slider round"></span>
        </label>
      )
    }
}

