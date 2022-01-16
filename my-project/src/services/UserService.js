import { baseService } from "./baseService";

export class UserService extends baseService {
  constructor(a) {
    super();
  }

  getUserSearch(keyWord) {
    return this.get(`Users/getUser?keyword=${keyWord}`);
  }
  addUserProject(userProject) {
    return this.post(`Project/assignUserProject`, userProject);
  }
  deleteUserFromProject = (userProject) => {
    return this.post(`Project/removeUserFromProject`, userProject);
  };
}
export const userService = new UserService();
