import auth, { AuthModel } from './auth';
import me, { MeModel } from './me';
import users, { UsersModel } from './users';

export interface StoreModel {
  auth: AuthModel;
  me: MeModel;
  users: UsersModel;
}

const model: StoreModel = {
  auth,
  me,
  users,
};

export default model;
