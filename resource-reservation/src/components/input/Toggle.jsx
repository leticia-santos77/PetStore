import React, { Component } from 'react';
import './toggle.css'

export default class ResourceForm extends Component {
    render() {
      return (
        <label class="switch">
            <input type="checkbox"/>
            <span class="slider round"></span>
        </label>
      )
    }
}

