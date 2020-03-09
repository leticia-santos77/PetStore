import React, { Component } from 'react';
import Header from '../../components/header/Header';
import Sidebar from '../../components/sidebar/Sidebar';
import Input from '../../components/input/Input';
import Toggle from '../../components/input/Toggle';
import Button from '../../components/button/Button';
import './resource-registration.css';
import Api from '../../service/Api';


export default class ResourceForm extends Component {
    constructor(props) {
        super(props);
        this.api = new Api();
        this.state = {
            resources: [],
            quantityOfPlaces: 0,
            useTv: false,
        };
        this._isMounted = false;
    }

    requestResources = () => {
        return this.api.getResources();
    }

    componentDidMount() {
        this._isMounted = true
        this._asyncRequest = this.requestResources().then(value => {
            if (this._isMounted) {
                this.setState({
                    resources: value.data.map(e => e.name)
                })

            }
        });
    };

    componentWillUnmount() {
        this._isMounted = false;
    }

    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    formatDate = (date) => { // format from 'yyyy-mm-ddThh:mm' to 'dd/mm/yyyy hh:mm'
        let newDate = date.split('T');
        let day = newDate[0].split('-').reverse().join('/');
        let hour = newDate[1];
        return day + " " + hour;
    }

    getResourceId = async name => {
        const e = await this.api.getResourceByName(name);
        return (e.data.id);
    }

    submitHandler = async e => {
        const { quantityOfPeople, useTv, date } = this.state;

        let data = this.formatDate(date);
        let name = this.getSelectorOption();
        let id = await this.getResourceId(name);

        await this.api.postBookings(id, quantityOfPeople, data, useTv);
        return true;
    }

    optionHandler = e => {
        let aux = this.state[e.target.name];
        this.setState({
            [e.target.name]: !aux
        })
    }

    getSelectorOption = () => {
        let sel = document.getElementById('resourceName');
        let opt = sel.options[sel.selectedIndex].text;
        return opt;
    }

    render() {
        const { resources } = this.state;
        return (
            <React.Fragment>
                <Header user="Rafael Scotti" />
                <Sidebar />
                <div className="main-content">
                    <h2>> Nova Reserva</h2>
                    <div className="form">
                        <form>
                            <div>
                                <div className="justify">
                                    <label>Nome do recurso:</label>
                                    <select id="resourceName">
                                        {/* <option value="option">Selecione uma opção</option> */}
                                        {
                                            resources.map((resource, i) => {
                                                return <option key={i} value="option"> {resource} </option>
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="justify">
                                    <label> Quantidade de lugares: </label>
                                    <Input className="input-form" type="number" name="quantityOfPeople" onBlur={this.changeHandler} />
                                </div>
                                <div className="justify">
                                    <label> Data: </label>
                                    <Input className="input-form" type="datetime-local" name="date" onBlur={this.changeHandler} />
                                </div>
                                <div className="justify">
                                    <label>Usará televisão?</label>
                                    <div>
                                        <Toggle name="useTv" onChange={this.optionHandler} />
                                    </div>
                                </div>
                                <div>
                                    <input type="submit" onClick={this.submitHandler} className="button button-blue button-large" tittle="Cadastrar" defaultValue="Botao"></input>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}