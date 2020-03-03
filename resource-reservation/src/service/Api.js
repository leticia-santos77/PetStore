import axios from 'axios';
// import config from '../configs/config.json'

export default class Api {

  constructor() {
    this.api = axios.create({
      baseURL: "http://localhost:8082/api"
    })
  }

  getBookings = () => this.api.get('/bookings/all');

  //postLogin = (email, password) => this.api.post("/login", { "email": email, "senha":password });

}