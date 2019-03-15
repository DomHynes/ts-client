import auth, { AuthModel } from "./auth";
import me, { MeModel } from "./me";

export interface StoreModel {
  auth: AuthModel;
  me: MeModel;
}

const model: StoreModel = {
  auth,
  me
};

export default model;
