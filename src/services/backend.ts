import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { LoginRequest } from '../model/auth';
import { DetailResponse, User } from '../model/me';
import { UsersResponse } from '../model/users';

class BackendService {
  API: AxiosInstance;
  constructor() {
    this.API = axios.create({
      baseURL: 'http://localhost:2667',
      transformResponse: [
        (resp, headers) => {
          console.log(headers);
          console.log(headers['content-type']);
          if (!headers['content-type'] || !headers['content-type'].includes('application/json')) {
            return resp;
          }
          console.log({ resp });
          const data = JSON.parse(resp);
          const { token } = data;
          console.warn({ token });
          if (token) {
            this.API.defaults.headers.common.Authorization = `Bearer ${token}`;
          }

          return data;
        },
      ],
    });
  }

  async logIn(details: LoginRequest) {
    const response = await this.API.post('/auth/login', details);

    console.log(response.data);

    return response.data;
  }

  async getDetails() {
    const response: AxiosResponse<DetailResponse> = await this.API.get('/me/details');

    return response.data;
  }

  async getUsers() {
    const response: AxiosResponse<UsersResponse> = await this.API.get('/users');

    return response.data;
  }

  async updateUser(id: string, user: Partial<User>) {
    const response: AxiosResponse<{ user: User }> = await this.API.patch(`/users/${id}`, user);

    return response.data;
  }
}

export default new BackendService();
