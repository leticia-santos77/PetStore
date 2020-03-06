import React, { Component } from "react";
import Api from "../../service/Api";
import Resource from "./Resources";
import Card from "../../components/card/Card";
import "../../components/card/Card.css";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";



export default class ListResources extends Component {
  constructor(props) {
    super(props);
    this.api = new Api();
    this.state = {
      resources: []
    };
  }
  requestResources = () => {
    return this.api
      .getResources()
      .then(value =>
        this.setState({
          resources: value.data.map(
            r =>
              (r = new Resource(
                r.id,
                r.name,
                r.numberOfSeats,
                r.hasTelevision,
                r.activeRoom,
                r.creationDate
              ))
          )
        })
      )
      .catch("Fail!!");
  };
  componentDidMount() {
    this._asyncRequest = this.requestResources();
    this.state.resources.reverse();
    this._asyncRequest = null;
  }
  componentWillUnmount() {
    if (this._asyncReques) {
      this._asyncRequest.cancel();
    }
  }

  render() {

    const { resources } = this.state;
    
    return (
      <React.Fragment>
        <Header user="Gabriel Eugênio" />
        <Sidebar />
        <div className="main-content">
        <h1 className="content-title">Recursos</h1>
          <div className="container-card">
            {resources.map(resource => {
              return (
                <Card className="styleCard" key={resource.id}>
                  <ul>
                    <li>
                      <h1>{resource.name}</h1>
                    </li>
                    <li>
                    <p><i className="fas fa-users blue"></i>
                      {resource.numberOfSeats} Vagas</p>
                  </li>
                    <li>
                      <p>{resource.hasTelevision ? <i className="far fa-check-circle green"></i> : <i className="far fa-times-circle red"></i> }
                      Televisão</p>
                    </li>
                    <li>
                      <p>
                      {resource.activeRoom ?<i className="far fa-check-square green"></i> : <i className="far fa-check-square red"></i>}
                      Sala</p>
                    </li>
                    <li><p>{resource.creationDate}</p></li>
                  </ul>
                </Card>
              );
            })}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
