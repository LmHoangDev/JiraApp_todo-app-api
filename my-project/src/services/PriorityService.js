import { baseService } from "./baseService";

export class PriorityService extends baseService {
  constructor(a) {
    super();
  }

  getAllPriority = () => {
    return this.get(`Priority/getAll`);
  };
}
export const priorityService = new PriorityService();
