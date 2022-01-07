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
  addTaskApi = (taskName) => {
    return axios({
      url: `${DOMAIN}/ToDoList/AddTask`,
      method: "POST",
      data: { taskName },
    });
  };
  delTaskApi = (taskName) => {
    return axios({
      url: `${DOMAIN}/ToDoList/deleteTask?taskName=${taskName}`,
      method: "DELETE",
    });
  };
  rejectTaskApi = (taskName) => {
    return axios({
      url: `${DOMAIN}/ToDoList/rejectTask?taskName=${taskName}`,
      method: "PUT",
    });
  };
  checkTaskApi = (taskName) => {
    return axios({
      url: `${DOMAIN}/ToDoList/doneTask?taskName=${taskName}`,
      method: "PUT",
    });
  };
}
export const toDoListService = new TodolistSaga();
