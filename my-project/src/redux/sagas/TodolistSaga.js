import { call, delay, put, takeLatest } from "redux-saga/effects";
import { toDoListService } from "../../services/todoListService";
import { STATUS_CODE } from "../../util/constants/settingSystem";
import { DISPLAY_LOADING, HIDE_LOADING } from "../constants/LoadingConst";
import {
  ADD_TASK_API,
  CHECK_TASK_API,
  DEL_TASK_API,
  GET_TASKLIST_API,
  GET_TASK_API,
  REJECT_TASK_API,
} from "../constants/ToDoConst";

// get task
function* getTaskApiAction() {
  //   while (true) {
  //     yield take("getTaskApi"); // theo doi action -> xem action nao dc dispatch moi thuc hien cong viec ben duoi
  //     console.log("Lan 1");

  //   }
  //put dispatch action
  yield put({
    type: DISPLAY_LOADING,
  });
  try {
    yield delay(1000);
    let { data, status } = yield call(toDoListService.getTaskApi);
    console.log(data);
    // sau khi lay gia tri thanh cong dung put (giong dispatch ben thunk)
    if (status === STATUS_CODE.SUCCESS) {
      yield put({
        type: GET_TASK_API,
        taskList: data,
      });
    } else {
      console.log("error");
    }
  } catch (error) {
    alert(error);
  }
  yield put({
    type: HIDE_LOADING,
  });
}
// add task
function* addTaskApiAction(action) {
  const { taskName } = action;
  console.log(taskName, action);
  try {
    const { data, status } = yield call(() => {
      return toDoListService.addTaskApi(taskName);
    });
    if (status === STATUS_CODE.SUCCESS) {
      yield put({
        type: GET_TASKLIST_API,
      });
    }
  } catch (err) {
    console.log(err);
  }
}
export function* delTaskApiAction(action) {
  const { taskName } = action;
  try {
    const { data, status } = yield call(() => {
      return toDoListService.delTaskApi(taskName);
    });
    if (status === STATUS_CODE.SUCCESS) {
      yield put({
        type: GET_TASKLIST_API,
      });
    }
  } catch (err) {
    console.log(err);
  }
}
export function* rejectTaskApiAction(action) {
  const { taskName } = action;
  try {
    const { data, status } = yield call(() => {
      return toDoListService.rejectTaskApi(taskName);
    });
    if (status === STATUS_CODE.SUCCESS) {
      yield put({
        type: GET_TASKLIST_API,
      });
    }
  } catch (err) {
    console.log(err);
  }
}
export function* checkTaskApiAction(action) {
  const { taskName } = action;
  console.log(action);
  try {
    const { data, status } = yield call(() => {
      return toDoListService.checkTaskApi(taskName);
    });
    if (status === STATUS_CODE.SUCCESS) {
      yield put({
        type: GET_TASKLIST_API,
      });
    }
  } catch (err) {
    console.log(err);
  }
}
export function* theoDoiActionSaga() {
  yield takeLatest(GET_TASKLIST_API, getTaskApiAction);
}
export function* theoDoiActionAddTask() {
  yield takeLatest(ADD_TASK_API, addTaskApiAction);
}
export function* theoDoiActionDelTask() {
  yield takeLatest(DEL_TASK_API, delTaskApiAction);
}
export function* theoDoiActionRejectTask() {
  yield takeLatest(REJECT_TASK_API, rejectTaskApiAction);
}
export function* theoDoiActionCheckTask() {
  yield takeLatest(CHECK_TASK_API, checkTaskApiAction);
}
