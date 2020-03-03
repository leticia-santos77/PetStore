import axios from 'axios';
/* // import config from '../configs/config.json'
import { getToken } from './auth';
 */
export default class Api {

  constructor() {
    this.api = axios.create({
      baseURL: "http://localhost:8082"
    })
    
 /*    this.api.interceptors.request.use(async config => {
      const token = getToken();
      if (token) {
        config.headers.Authorization = `${token}`
      }
      return config;
    })*/
    
  }

  getResources = () => this.api.get('/api/resources/all')
}
