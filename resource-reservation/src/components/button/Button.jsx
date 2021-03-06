import React, { Component } from 'react';
import './button.css';

export default class Button extends Component {
    render() {
        const { className, tittle, type,onClick } = this.props
        return (
            <button className={className} type={type} onClick={onClick}>{tittle}</button>
        )
    }
}