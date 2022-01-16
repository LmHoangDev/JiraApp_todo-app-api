import { call, delay, put, takeLatest } from "redux-saga/effects";
import { cyberbugsService } from "../../../services/CyberbugService";
import { projectService } from "../../../services/ProjectService";
import { STATUS_CODE } from "../../../util/constants/settingSystem";
import { history } from "../../../util/history";
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
      history.push("/projectmanage");
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

// get detail project

function* getProjectDetailSaga(action) {
  // console.log('action123',action);
  // return;
  //HIỂN THỊ LOADING
  yield put({
    type: DISPLAY_LOADING,
  });
  yield delay(500);

  try {
    const { data, status } = yield call(() =>
      projectService.getProjectDetail(action.projectId)
    );

    console.log("data", data);
    //Lấy dữ liệu thành công thì đưa dữ liệu lên redux
    yield put({
      type: "PUT_PROJECT_DETAIL",
      projectDetail: data.content,
    });
  } catch (err) {
    console.log("404 not found !");
    history.push("/projectmanage");
  }

  yield put({
    type: HIDE_LOADING,
  });
}

export function* theoDoiGetProjectDetail() {
  yield takeLatest("GET_PROJECT_DETAIL", getProjectDetailSaga);
}
