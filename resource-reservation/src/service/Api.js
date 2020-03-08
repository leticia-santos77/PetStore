import axios from 'axios';
// import config from '../configs/config.json'
import { getToken } from './Auth';

export default class Api {

  constructor() {
    this.api = axios.create({
      baseURL: "http://localhost:8081"
    })
    
/*       this.api.interceptors.request.use(async config => {
      const token = getToken();
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    })  */
    
  }
  getBookings = () => this.api.get('/api/booking/all' )
  getResources = () => this.api.get('/api/resource/all')
  postLogin = (username, password) => this.api.post("/login", { "username": username, "password":password });
}

