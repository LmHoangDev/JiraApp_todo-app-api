import { call, delay, put, takeLatest } from "redux-saga/effects";
import { cyberbugsService } from "../../../services/CyberbugService";
import { STATUS_CODE } from "../../../util/constants/settingSystem";
import { CREATE_PROJECT_SAGA } from "../../constants/Cyberbugs/Cyberbugs";
import { DISPLAY_LOADING, HIDE_LOADING } from "../../constants/LoadingConst";

function* createProjectSaga(action) {
  console.log(action);
  yield put({
    type: DISPLAY_LOADING,
  });
  yield delay(2000);
  try {
    const { data, status } = yield call(() => {
      // return cyberbugsService.createProjectAuthorize(action.newProject);
      return cyberbugsService.createProject(action.newProject);
    });
    if (status === STATUS_CODE.SUCCESS) {
      console.log(data);
    }
  } catch (error) {
    console.log(error);
  }
  yield put({
    type: HIDE_LOADING,
  });
}

export function* theoDoiCreateProjectSaga() {
  yield takeLatest(CREATE_PROJECT_SAGA, createProjectSaga);
}
