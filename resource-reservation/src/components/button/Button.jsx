import React, { Component } from 'react';

export default class Button extends Component {
    render() {
        const { className, tittle, type,onClick } = this.props
        return (
            <React.Fragment>
                <button className={className} type={type} onClick={onClick}>{tittle}</button>
            </React.Fragment>
        )
    }
}