import { call, delay, put, takeLatest } from "redux-saga/effects";
import { taskService } from "../../../services/TaskService";
import { STATUS_CODE } from "../../../util/constants/settingSystem";
import { notificationCyberbugs } from "../../../util/Notification/Notification";
import {
  GET_TASK_DETAIL,
  GET_TASK_DETAIL_SAGA,
  UPDATE_STATUS_TASK_SAGA,
} from "../../constants/Cyberbugs/TaskConstants";
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

function* getTaskDetailSaga(action) {
  const { taskId } = action;

  try {
    const { data, status } = yield call(() =>
      taskService.getTaskDetail(taskId)
    );

    yield put({
      type: GET_TASK_DETAIL,
      taskDetailModal: data.content,
    });
  } catch (err) {
    console.log(err);
    console.log(err.response?.data);
  }
}

export function* theoDoiGetTaskDetailSaga() {
  yield takeLatest(GET_TASK_DETAIL_SAGA, getTaskDetailSaga);
}

//update task

function* updateTaskStatusSaga(action) {
  const { taskUpdateStatus } = action;
  console.log(action);
  try {
    //Cập nhật api status cho task hiện tại (Task đang mở modal)
    const { data, status } = yield call(() =>
      taskService.updateStatusTask(taskUpdateStatus)
    );

    //Sau khi thành công gọi lại getProjectDetail saga để sắp xếp lại thông tin các task
    // console.log(data)
    if (status === STATUS_CODE.SUCCESS) {
      yield put({
        type: "GET_PROJECT_DETAIL",
        projectId: taskUpdateStatus.projectId,
      });

      yield put({
        type: GET_TASK_DETAIL_SAGA,
        taskId: taskUpdateStatus.taskId,
      });
    }
  } catch (err) {
    console.log(err);
    console.log(err.response?.data);
  }
}

export function* theoDoiUpdateTaskStatusSaga() {
  yield takeLatest(UPDATE_STATUS_TASK_SAGA, updateTaskStatusSaga);
}
