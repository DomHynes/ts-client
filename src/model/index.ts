import todos, { TodosModel } from "./todos";
import notification, { NotificationModel } from "./notification";
import auth, { AuthModel } from "./auth";

export interface StoreModel {
  todos: TodosModel;
  notification: NotificationModel;
  auth: AuthModel;
}

const model: StoreModel = {
  todos,
  notification,
  auth
};

export default model;
