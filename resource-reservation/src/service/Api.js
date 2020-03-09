import axios from 'axios';
// import config from '../configs/config.json'
import { getToken } from './Auth';

export default class Api {

  constructor() {
    this.api = axios.create({
      baseURL: "http://localhost:8081"
    })
    
      this.api.interceptors.request.use(async config => {
      const token = getToken();
      if (token) {
        config.headers.Authorization = `${token}`;
      }
      return config;
    })  
    
  }
  getResourceByName = (name) => this.api.get(`/api/resource/findbyname/${name}`);
  getBookings = () => this.api.get('/api/booking/all',{headers: {Authorization:getToken()} });
  getResources = () => this.api.get('/api/resource/all',{headers: {Authorization:getToken()} });
  postLogin = (username, password) => this.api.post("/login", { "username": username, "password":password });
  postBookings = (id, quantityOfPeople, data, useTv) => this.api.post('/api/booking/add',{"resourceId": id, "quantityOfPeople": quantityOfPeople, "date": data, "useTv": useTv});
  postResources = (name, numberOfSeats, hasTelevision, activeRoom) => this.api.post('api/resource/add',{"name": name, "numberOfSeats": numberOfSeats, "hasTelevision": hasTelevision, "activeRoom": activeRoom});
}

