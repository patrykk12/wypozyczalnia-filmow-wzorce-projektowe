import axios from "axios";

//Singleton pobierania i wysyłania danych do api
export class Http {
  async get(url) {
    return axios.get(url);
  }

  async post(url, data) {
    return axios.post(url, data);
  }
}
