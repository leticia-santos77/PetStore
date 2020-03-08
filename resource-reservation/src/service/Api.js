import axios from 'axios';
/* // import config from '../configs/config.json'
import { getToken } from './auth';
 */
export default class Api {

  constructor() {
    this.api = axios.create({
      baseURL: "https://heroku-booking-resources.herokuapp.com"
    })
    
 /*    this.api.interceptors.request.use(async config => {
      const token = getToken();
      if (token) {
        config.headers.Authorization = `${token}`
      }
      return config;
    })*/
    
  }
  getBookings = () => this.api.get('/api/booking/all')
  getResources = () => this.api.get('/api/resource/all')
}
