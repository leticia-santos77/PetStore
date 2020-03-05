import React, { Component } from 'react';
import './modal.css'
import Modal from './Modal';
// import { Container } from './styles';

export default class BookingForm extends Component {
  render() {
    return(
        <div>
            <Modal title="Booking" id="booking">
                <h1>Reserva de Recursos</h1>
            </Modal>
        </div>
    );
  }
}
