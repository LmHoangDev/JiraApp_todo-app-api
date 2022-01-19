import { baseService } from "./baseService";

export class TaskService extends baseService {
  constructor(a) {
    super();
  }
  createTask = (taskObject) => {
    return this.post("Project/createTask", taskObject);
  };
}

export const taskService = new TaskService();
