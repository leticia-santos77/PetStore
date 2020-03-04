import React, { Component } from 'react';
import Api from '../../service/Api';
import Resource from './Resources';
import Card from '../../components/card/Card'
import '../../components/card/Card.css'

export default class ListResources extends Component{
    constructor(props){
        super(props);
        this.api = new Api();
        this.state = {
            resources: []
        }
    }
    requestResources = () => {
    return this.api.getResources()
        .then( value => this.setState({
        resources: value.data.map( r => r = new Resource(
            r.id,
            r.name,
            r.numberOfSeats,
            r.hasTelevision,
            r.activeRoom,
            r.creationDate
        ))}))
        .catch( "Fail!!" )  
    } 
    componentDidMount() {
        this._asyncRequest = this.requestResources();
        this._asyncRequest = null;
    }
    componentWillUnmount() {
        if ( this._asyncReques ) {
          this._asyncRequest.cancel();
        }
    }

    render(){
        const { resources } = this.state;
        return(
        <React.Fragment>
             {resources.map( resource =>{
             return <Card className="styleCard blue"><ul key={resource.id} className="tirar">
               <li>{resource.name}</li>
               <li>{resource.numberOfSeats}</li>
               <li>{resource.hasTelevision ? `Possui Televisão`:'Não possui Televisão'}</li>
               <li>{resource.activeRoom ? `Sala ativa` : `Sala Inativa`}</li>    
               <li>{resource.creationDate}</li>
          </ul></Card>})}
        </React.Fragment>
       )
    }
}