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
    colors = {
        red: "#ff0000",
    }
    render(){
        const { resources } = this.state;
        resources.reverse();
        return(
        <React.Fragment>
             {/* {resources.map( resource =>{
             return <Card className="styleCard">
                 <ul key={resource.id} className="tirar">
                    <li><i class="fas fa-campground"></i>{resource.name}</li>
                    <li><i class="fas fa-users"></i>{resource.numberOfSeats}</li>
                    <li><i class="fas fa-tv"></i>{resource.hasTelevision ? `Possui Televisão`:'Não possui Televisão'}</li>
                    <li><i class="far fa-check-square"></i>{resource.activeRoom ? `Sala ativa` : `Sala Inativa`}</li>    
                    <li><i class="far fa-calendar-alt"></i>{resource.creationDate}</li>
                </ul>
          </Card>
        })} */}

    <Card className="styleCard">   
    </Card>
    <Card className="styleCard">   
    </Card>
    <Card className="styleCard">   
    </Card>
    <Card className="styleCard">   
    </Card>
    <Card className="styleCard">   
    </Card>
    <Card className="styleCard">   
    </Card>
        </React.Fragment>
       )
    }
}