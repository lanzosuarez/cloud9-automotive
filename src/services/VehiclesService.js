import axios from "axios";
import { API_URL } from "../globa";

class VehicleService {
  static getCars() {
    return axios.get(`${API_URL}/cars`).catch(err => {
      throw err;
    });
  }

  static createCar(data) {
    return axios.post(`${API_URL}/car`, data).catch(err => {
      throw err;
    });
  }
}

export default VehicleService;
