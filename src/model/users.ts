import { Action, action, Thunk, thunk } from 'easy-peasy';
import backend from '../services/backend';

export interface User {
  id: string;
  username: string;
  password: string;
  roles: string[];
}

export interface UsersResponse {
  users: User[];
}

export interface UsersModel {
  users: User[];
  loading: boolean;
  getUsers: Thunk<UsersModel>;
  setLoading: Action<UsersModel, boolean>;
  saveUsers: Action<UsersModel, UsersResponse>;
  updateUser: Thunk<UsersModel, { id: string; user: Partial<User> }>;
}

const users: UsersModel = {
  users: [],
  loading: false,
  saveUsers: action((state, payload) => {
    state.users = payload.users;
  }),
  setLoading: action((state, payload) => {
    state.loading = payload;
  }),
  getUsers: thunk(async state => {
    const users = await backend.getUsers();
    console.warn({ users });
    state.saveUsers(users);
  }),
  updateUser: thunk(async (state, payload) => {
    const user = await backend.updateUser(payload.id, payload.user);
    state.getUsers();
  }),
};

export default users;
