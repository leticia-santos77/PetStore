import React, { Component } from 'react';

export default class Button extends Component {
    render() {
        const { className, tittle, type } = this.props
        return (
            <React.Fragment>
                <button className={className} type={type}>{tittle}</button>
            </React.Fragment>
        )
    }
}