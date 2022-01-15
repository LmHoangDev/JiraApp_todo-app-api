import { baseService } from "./baseService";

export class UserService extends baseService {
  constructor(a) {
    super();
  }

  getUserSearch(keyWord) {
    return this.get(`Users/getUser?keyword=${keyWord}`);
  }
}
export const userService = new UserService();
