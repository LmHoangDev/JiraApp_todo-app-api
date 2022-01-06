/* redux  co 2 loai action 
    action la object
    action la function thuong dung de xu ly api hoac goi cac action khac
    
*/
import Axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { GET_TASK_API } from "../constants/ToDoConst";
function* getTaskApi() {
  //   while (true) {
  //     yield take("getTaskApi"); // theo doi action -> xem action nao dc dispatch moi thuc hien cong viec ben duoi
  //     console.log("Lan 1");
  //   }
  let { data } = yield call(() => {
    return Axios({
      url: "http://svcy.myclass.vn/api/ToDoList/GetAllTask",
      method: "GET",
    });
  });
  console.log(data);
  // sau khi lay gia tri thanh cong dung put (giong dispatch ben thunk)
  yield put({
    type: GET_TASK_API,
    taskList: data,
  });
}
export function* rootSaga() {
  yield takeLatest("getTaskApiAction", getTaskApi);
}
