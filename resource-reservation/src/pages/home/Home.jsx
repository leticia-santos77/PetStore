import React, { Component } from 'react';
import BookingList from '../../components/BookingList';

export default class Home extends Component{

    render(){
        return(
            <React.Fragment>
                <BookingList/>
            </React.Fragment>
        );
    }
}