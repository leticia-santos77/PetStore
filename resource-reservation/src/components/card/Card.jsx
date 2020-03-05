import React,{ Component } from 'react';
import './Card.css'
import conference from './image/room.png'


export default class Card extends Component{

    render(){
        const { resources } = this.props
        return(
            <div>
            { resources.map( resource =>{
                return <ul  className="styleCard" key={resource.id}>
                       <li><i className="fas fa-campground"></i>{resource.name}</li>
                       <li><i className="fas fa-users"></i>{resource.numberOfSeats}</li>
                       <li><i className="fas fa-tv"></i>{resource.hasTelevision ? `Possui Televisão`:'Não possui Televisão'}</li>
                       <li><i className="far fa-check-square"></i>{resource.activeRoom ? `Sala ativa` : `Sala Inativa`}</li>    
                       <li><i className="far fa-calendar-alt"></i>{resource.creationDate}</li>
                   </ul>
           })} 
           </div>
        )
    }
}