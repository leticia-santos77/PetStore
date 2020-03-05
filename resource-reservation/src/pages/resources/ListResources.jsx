import React, { Component } from "react";
import Api from "../../service/Api";
import Resource from "./Resources";
import Card from "../../components/card/Card";
import "../../components/card/Card.css";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import iCheck from '../../components/card/image/clipboards.svg';


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
    this._asyncRequest = null;
  }
  componentWillUnmount() {
    if (this._asyncReques) {
      this._asyncRequest.cancel();
    }
  }

  render() {

    const { resources } = this.state;
    resources.reverse();

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
                      <i className="fas fa-users"></i>
                      {resource.numberOfSeats} Vagas
                  </li>
                    <li>
                      {resource.hasTelevision ? <i class="far fa-check-circle"></i> : <i class="far fa-times-circle"></i> }
                      Televisão
                    </li>
                    <li>
                      <i className="far fa-check-square"></i>
                      {resource.activeRoom ? `Sala ativa` : `Sala inativa`}
                    </li>
                    <li>{resource.creationDate}</li>
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
