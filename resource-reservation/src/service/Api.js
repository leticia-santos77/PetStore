import axios from 'axios';
/* // import config from '../configs/config.json'
import { getToken } from './auth';
 */
export default class Api {

  constructor() {
    this.api = axios.create({
      baseURL: "http://localhost:8081"
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
  puttResource = (id, name, numberOfSeats, hasTelevision, activeRoom) =>
    this.api.put(`api/resource/edit/${id}`, {
      "name": name,
      "numberOfSeats": numberOfSeats,
      "hasTelevision": hasTelevision,
      "activeRoom": activeRoom
    })

putBooking = (id, useTv, quantityOfPeople, date, canceled) =>
  this.api.put(`api/booking/edit/${id}`, {
    "useTv": useTv,
    "quantityOfPeople": quantityOfPeople,
    "date": date,
    "canceled": canceled
  })
}
