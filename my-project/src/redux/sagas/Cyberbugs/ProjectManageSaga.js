import { call, delay, put, takeLatest } from "redux-saga/effects";
import { cyberbugsService } from "../../../services/CyberbugService";
import { STATUS_CODE } from "../../../util/constants/settingSystem";
import { GET_ALL_PROJECT_MANAGE } from "../../constants/Cyberbugs/Cyberbugs";
import { DISPLAY_LOADING, HIDE_LOADING } from "../../constants/LoadingConst";
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
///////////////////////////update project
function* updateProjectManageSaga(action) {
  yield put({
    type: DISPLAY_LOADING,
  });
  yield delay(500);

  try {
    const { data, status } = yield call(() =>
      cyberbugsService.updateProject(action.projectUpdate)
    );
    //Gọi api thành công thì dispatch lên reducer thông qua put
    if (status === STATUS_CODE.SUCCESS) {
      console.log(data);
    }
    yield put({
      type: GET_ALL_PROJECT_MANAGE,
    });

    yield put({
      type: "CLOSE_DRAWER",
    });
  } catch (err) {
    console.log(err);
  }

  yield put({
    type: HIDE_LOADING,
  });
}

export function* theoDoiUpdateProject() {
  yield takeLatest("UPDATE_PROJECT_SAGA", updateProjectManageSaga);
}
