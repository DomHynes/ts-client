import { Action, action, Thunk, thunk } from 'easy-peasy';
import { BackendService } from '../services';

export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  token: string;
}

export interface AuthModel {
  authenticated: boolean;
  loading: boolean;
  jwt: string | null;
  login: Thunk<AuthModel, LoginRequest>;
  loginSuccess: Action<AuthModel>;
}

const auth: AuthModel = {
  authenticated: false,
  loading: false,
  jwt: null,
  login: thunk(async (state, payload) => {
    const { token }: LoginResponse = await BackendService.logIn(payload);
    console.warn(token);
    state.loginSuccess(token);
  }),
  loginSuccess: action((state, payload) => {
    state.authenticated = true;
    state.jwt = payload;
  }),
};

export default auth;
