import React, { Component } from "react";
import Api from "../../service/Api";
import Resource from "./Resources";
import Card from "../../components/card/Card";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import Popup from "reactjs-popup";
import ImgEdit from '../../pen.png';

import "../../components/card/Card.css";
import '../../components/modal/modal.css';
import '../../grid.css';
import '../../components/button/button.css';
import '../../components/modal/modal-form.css';
import '../../app.css'
import '../../components/input/toggle.css'
import './popup.css';


export default class ListResources extends Component {
  constructor(props) {
    super(props);
    this._isMounted = false;
    this.api = new Api();
    this.state = {
      resources: [],
      resourcesFilter: [],
      id: '',
    };
  }

  submit = e => {
    e.preventDefault();
    this.api.putResource(
      this.state.id,
      this.state.name,
      this.state.numberOfSeats,
      this.state.hasTelevision,
      this.state.activeRoom
    )
      .then(this.requestResources);
  }

  updateProps = e => {
    this.setState({
      id: e.target.id,
      name: null,
      numberOfSeats: null,
      hasTelevision: null,
      activeRoom: null,
    })
  }

  resourceEdit = e => {

    this.setState({
      [e.target.name]: e.target.value
    })
    if (e.target.name === 'hasTelevision') {
      let aux = e.target.checked ? true : false
      this.setState({
        [e.target.name]: aux
      })
    }
    if (e.target.name === 'activeRoom') {
      let aux = e.target.checked ? true : false
      this.setState({
        [e.target.name]: aux
      })
    }
  }
  requestResources = async () => {
    return await this.api
      .getResources()
  };

  componentDidMount() {
    this._isMounted = true;

    this._asyncRequest = this.requestResources().then(result => {
      if (this._isMounted) {
        this.setState({
          resources: result.data.map(
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
        });

        this.state.resources.reverse();
      }
    });
    
    this._asyncRequest = null;
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {

    const { resources } = this.state;

    return (
      <React.Fragment>

        <Header user="Gabriel Eugênio" >
        </Header>

        <Sidebar />
        <div className="main-content">
          <h1 className="content-title">Recursos</h1>
          <div className="container-card">
            {resources.map(resource => {
              return (
                <Card id="id" className="styleCard" key={resource.id}>
                  <ul>
                    <li onClick={this.updateProps}>
                      {/* <div className="pen-edit"> */}
                        <Popup trigger={<img id={resource.id} className="pen" alt="Imagem de editar" name="id" src={ImgEdit} />} modal>
                          {close => (
                            <div className="modal">
                              <button className="button-clese-popup close-popup" onClick={close}>
                                &times;        </button>
                              <div className="modal-title">
                                <div className=" popup-title ">
                                  <h2 className="popup-title"> {resource.name} </h2>
                                </div>
                                <form onSubmit={this.submitHandler}>
                                  <div className="container-form">
                                    <div className="item">
                                      <input className=" input-popup input-login input-modal"
                                        type="text" name="name" onBlur={this.resourceEdit} defaultValue={resource.name}
                                        placeholder="Nome do recurso"
                                      ></input>
                                    </div>
                                    <div className="item">
                                      <input className="input-popup input-login input-modal"
                                        onBlur={this.resourceEdit} type="number" min={1} name="numberOfSeats"
                                        placeholder="Número de lugares" defaultValue={resource.numberOfSeats}
                                      ></input>
                                    </div>
                                    <div className="item active-room" >
                                      <label>Possui TV</label>
                                      <div className="toggle-right" name="hasTelevision" onBlur={this.resourceEdit}
                                        value={`${resource.hasTelevision ? true : false}`}
                                      >
                                        <label className="switch">
                                          <input type="checkbox" name="hasTelevision"
                                            defaultChecked={resource.hasTelevision ? true : false}
                                            defaultValue={`${!(resource.hasTelevision)}`}
                                          />
                                          <span className="slider round" />
                                        </label>
                                      </div>
                                    </div>
                                    <div className="item active-room">
                                      <label>Sala ativa</label>
                                      <div className="toggle-right" name="activeRoom" onBlur={this.resourceEdit}
                                        value={`${!(resource.activeRoom)}`}
                                      >
                                        <label className="switch">
                                          <input type="checkbox" name="activeRoom"
                                            defaultChecked={resource.activeRoom ? true : false}
                                            defaultValue={`${!(resource.activeRoom)}`}
                                          />
                                          <span className="slider round" />
                                        </label>
                                      </div>
                                    </div>
                                    <div className="item button-center">
                                      <button onClick={this.submit} type="submit"
                                        className="button-popup button button-blue button-large"
                                        title="Atualizar"
                                      >Atualizar</button>
                                    </div>
                                  </div>
                                </form>
                              </div>
                            </div>
                          )}
                        </Popup>
                      {/* </div> */}
                      <h1>{resource.name}</h1>
                    </li>
                    <li className="li-icon-title"><p><i className="fas fa-users blue"></i>
                      {resource.numberOfSeats} Vagas</p>
                    </li>
                    <li className="li-icon-title"><p>{resource.hasTelevision ? <i className="far fa-check-circle green"></i> : <i className="far fa-times-circle red"></i>}
                      Televisão</p>
                    </li>
                    <li className="li-icon-title"><p>{resource.activeRoom ? <i className="far fa-check-square green"></i> : <i className="far fa-window-close red"></i>}
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
