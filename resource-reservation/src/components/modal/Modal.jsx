import React, { Component } from 'react';
import './modal.css';
// import { Container } from './styles';

export default class Modal extends Component {
    render() {
        const { title, id, children } = this.props
        return (
            <React.Fragment>
                <a href={`#openModal-${id}`}>{title}</a>
                <div id={`openModal-${id}`} class="modalDialog">
                    <div>
                        <a href="#close" title="Close" class="close">X</a>
                        {children}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
