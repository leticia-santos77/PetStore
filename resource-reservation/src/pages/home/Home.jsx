import React, { Component } from 'react';
import ResourceForm from '../../components/modal/ModalResources';

export default class Home extends Component{

    render(){
        return(
            <React.Fragment>
                <ResourceForm></ResourceForm>
            </React.Fragment>
        );
    }
}