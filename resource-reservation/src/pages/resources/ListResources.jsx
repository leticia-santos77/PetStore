import React, { Component } from "react";
import Api from "../../service/Api";
import Resource from "./Resources";
import Card from "../../components/card/Card";
import "../../components/card/Card.css";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import ModalResources from '../../components/modal/ModalResources';
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
import '../../components/modal/modal.css';
import '../../grid.css';
import '../../components/button/button.css';
import '../../components/modal/modal-form.css';
import Input from '../../components/input/Input';
import Toggle from '../../components/input/Toggle';
import Button from '../../components/button/Button';
import ImgEdit from '../../pen.png';
import '../../app.css'
import '../../components/input/toggle.css'




export default class ListResources extends Component {
  constructor(props) {
    super(props);
    this.changeHandler = this.changeHandler.bind(this);
    this.resourceEdit = this.resourceEdit.bind(this);
    this.api = new Api();

    this.state = {
      resources: [],
      resourceEdited: {
        id: "",
        name: "",
        numberOfSeats: 0,
        hasTelevision: false,
        activeRoom: true,
        creationDate: "",
      }
    };
  }

  changeHandler = e => {
    let arr = this.state.resources;
    let element = arr.find(v => v.id === e.target.id)
    return element;
  }

  /*getElementToUpdate = e => {
    let arr = this.state.resources;
    let element = arr.find(v => v.id === e.target.id)
    return element;
  }*/

  changeHandler = e => this.state.resources.map(resource => {

  });

  resourceEdit = e => {


  }

  optionHandler = e => {

    let aux = this.state.resourceEdited[e.target.name];
    this.setState({
      resourceEdited: {
        [e.target.name]: !aux
      }
    })
    console.log(this.state.resourceEdited)

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
            {console.log(this.state.resourceEdited)}
            {resources.map(resource => {
              return (
                <Card id="id" className="styleCard" key={resource.id}>

                  <ul>
                    <li className="styleCard-title">
                      <div className="pen-edit">
                        <Popup trigger={<img className="pen" alt="Imagem de editar" name={`${resource.id}`} src={ImgEdit} />} modal>
                          {close => (
                            <div className="modal">
                              <button className="close-popup" onClick={close}>
                                &times;        </button>
                              <div className="modal-title">
                                <div className="item">
                                  <h1 className="title"> {resource.id} </h1>
                                </div>
                                <form onSubmit={this.submitHandler}>
                                  <div className="container-form">
                                    <div className="item">
                                      <input id="name" className="input-login input-modal" type="text" name="name" placeholder="Nome do recurso" defaultValue={resource.name}></input>
                                    </div>
                                    <div className="item">
                                      <input id="numberOfSeats" className="input-login input-modal" type="number" min={1} name="numberOfSeats" placeholder="Número de lugares" defaultValue={resource.numberOfSeats}></input>
                                    </div>
                                    <div className="item active-room">
                                      <label>Possui TV</label>

                                      <div className="toggle-right">
                                        <label className="switch">
                                          <input id="hasTV" type="checkbox" name="hasTelevision" onChange={this.optionHandler} defaultChecked={resource.hasTelevision ? "checked" : ""} defaultValue={`${resource.hasTelevision}`} />
                                          <span className="slider round" />
                                        </label>
                                      </div>
                                    </div>
                                    <div className="item active-room">
                                      <label>Sala ativa</label>

                                      <div className="toggle-right">
                                        <label className="switch">
                                          <input id={resource.id} type="checkbox" name="activeRoom" onChange={this.optionHandler} defaultChecked={resource.activeRoom ? "checked" : ""} defaultValue={`${resource.activeRoom}`} />
                                          <span className="slider round" />
                                        </label>
                                      </div>
                                    </div>
                                    <div className="item button-center">
                                      <button className="button button-blue button-large" onClick={this.resourceEdit}>Atualizar</button>
                                    </div>
                                  </div>
                                </form>
                              </div>
                            </div>
                          )}
                        </Popup>
                      </div>
                      <h1>{resource.name}</h1>
                    </li>
                    <li><p><i className="fas fa-users blue"></i>
                      {resource.numberOfSeats} Vagas</p>
                    </li>
                    <li><p>{resource.hasTelevision ? <i className="far fa-check-circle green"></i> : <i className="far fa-times-circle red"></i>}
                      Televisão</p>
                    </li>
                    <li><p>{resource.activeRoom ? <i className="far fa-check-square green"></i> : <i class="far fa-window-close red"></i>}
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
