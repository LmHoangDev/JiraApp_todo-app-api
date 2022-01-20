import { baseService } from "./baseService";

export class StatusService extends baseService {
  constructor(a) {
    super();
  }

  getAllStatus = () => {
    return this.get(`Status/getAll`);
  };
}
export const statusService = new StatusService();
