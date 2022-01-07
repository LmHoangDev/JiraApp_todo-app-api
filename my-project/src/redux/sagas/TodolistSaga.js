import { call, delay, put, takeLatest } from "redux-saga/effects";
import { toDoListService } from "../../services/todoListService";
import { GET_TASK_API } from "../constants/ToDoConst";
function* getTaskApiAction() {
  //   while (true) {
  //     yield take("getTaskApi"); // theo doi action -> xem action nao dc dispatch moi thuc hien cong viec ben duoi
  //     console.log("Lan 1");

  //   }
  //put dispatch action
  yield put({
    type: "DISPLAY_LOADING",
  });
  yield delay(1000);
  let { data } = yield call(toDoListService.getTaskApi);
  console.log(data);
  // sau khi lay gia tri thanh cong dung put (giong dispatch ben thunk)
  yield put({
    type: GET_TASK_API,
    taskList: data,
  });
  yield put({
    type: "HIDE_LOADING",
  });
}
export function* theoDoiActionSaga() {
  yield takeLatest("getTaskApiAction", getTaskApiAction);
}
