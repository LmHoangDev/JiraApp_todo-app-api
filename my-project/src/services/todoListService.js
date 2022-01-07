import axios from "axios";
import { DOMAIN } from "../util/constants/settingSystem";

export class TodolistSaga {
  constructor() {}

  getTaskApi = () => {
    return axios({
      url: `${DOMAIN}/ToDoList/GetAllTask`,
      method: "GET",
    });
  };
}
export const toDoListService = new TodolistSaga();
