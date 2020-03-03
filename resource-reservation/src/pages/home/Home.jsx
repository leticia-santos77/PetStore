import React, { Component } from 'react';
import Card from '../../components/card/Card'
export default class Home extends Component{

    render(){
        return(
            <React.Fragment>
                <div className="container">
                <Card>
                    <h1>TESTE</h1>
                </Card>
                </div>
                <h1>Seja Bem Vindo!</h1>
            </React.Fragment>
        );
    }
}