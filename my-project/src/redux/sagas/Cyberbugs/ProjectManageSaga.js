import { call, put, takeLatest } from "redux-saga/effects";
import { cyberbugsService } from "../../../services/CyberbugService";
import { STATUS_CODE } from "../../../util/constants/settingSystem";
import { GET_ALL_PROJECT_MANAGE } from "../../constants/Cyberbugs/Cyberbugs";

function* getAllProjectManageSaga(action) {
  try {
    const { data, status } = yield call(() => {
      return cyberbugsService.getListProject();
    });
    if (status === STATUS_CODE.SUCCESS) {
      yield put({
        type: "GET_ALL_PROJECT",
        projectList: data.content,
      });
    }
  } catch (error) {
    console.log(error);
  }
}

export function* theoDoiGetAllProject() {
  yield takeLatest(GET_ALL_PROJECT_MANAGE, getAllProjectManageSaga);
}
