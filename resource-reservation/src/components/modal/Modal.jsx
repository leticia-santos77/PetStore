import React, { Component, Children } from 'react';
import './modal.css';
// import { Container } from './styles';

export default class Modal extends Component {
    render() {
        const { title, id, children } = this.props
        return (
            <React.Fragment>
                <a href={`#openModal-${id}`}>{title}</a>
                <div id={`openModal-${id}`} className="modalDialog">
                    <div>
                        <a href="#close" title="Close" className="close">X</a>
                        {children}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
