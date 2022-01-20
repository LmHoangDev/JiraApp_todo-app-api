import { call, delay, put, takeLatest } from "redux-saga/effects";
import { taskService } from "../../../services/TaskService";
import { STATUS_CODE } from "../../../util/constants/settingSystem";
import { notificationCyberbugs } from "../../../util/Notification/Notification";
import { DISPLAY_LOADING, HIDE_LOADING } from "../../constants/LoadingConst";
function* createTaskSaga(action) {
  try {
    yield put({
      type: DISPLAY_LOADING,
    });
    yield delay(500);
    const { data, status } = yield call(() =>
      taskService.createTask(action.taskObject)
    );

    //Gọi api thành công thì dispatch lên reducer thông qua put
    if (status === STATUS_CODE.SUCCESS) {
      console.log(data);
      notificationCyberbugs("success", "Create task successfully !");
    } else {
      console.log("Ngu");
      notificationCyberbugs("error", "Create task failed !");
    }
  } catch (err) {
    console.log(err.response.data);
  }
  yield put({
    type: "CLOSE_DRAWER",
  });
  yield put({
    type: HIDE_LOADING,
  });
}
export function* theoDoiGetCreateTaskSaga() {
  yield takeLatest("CREATE_TASK_SAGA", createTaskSaga);
}
