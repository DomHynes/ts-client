import axios, { AxiosInstance } from "axios";
import { LoginRequest } from '../model/auth';


class BackendService {
  API: AxiosInstance;
  constructor() {
    this.API = axios.create({
      baseURL: "http://localhost:2667"
    });
  }

  async logIn(details: LoginRequest) {
    const response = await this.API.post("/auth/login", details);

    console.log(response.data);

    return response.data;
  }
}

export default new BackendService()
