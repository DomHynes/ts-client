import { Action, action, Thunk, thunk } from "easy-peasy";
import backend from "../services/backend";

export interface User {
  id: string;
  username: string;
  password: string;
  roles: string[];
}

export interface DetailResponse {
  user: User;
}

export interface MeModel {
  details: DetailResponse | null;
  getDetails: Thunk<MeModel>;
  saveDetails: Action<MeModel, DetailResponse>;
}

const me: MeModel = {
  details: null,
  getDetails: thunk(async state => {
    const details = await backend.getDetails();
    state.saveDetails(details);
  }),
  saveDetails: action((state, payload) => {
    state.details = payload;
  })
};

export default me;
