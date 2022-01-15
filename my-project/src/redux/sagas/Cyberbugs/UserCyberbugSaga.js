import { call, delay, put, takeLatest } from "redux-saga/effects";
import { cyberbugsService } from "../../../services/CyberbugService";
import { userService } from "../../../services/UserService";
import {
  STATUS_CODE,
  TOKEN,
  USER_LOGIN,
} from "../../../util/constants/settingSystem";
import { history } from "../../../util/history";
import { USER_SIGNIN_API, USLOGIN } from "../../constants/Cyberbugs/Cyberbugs";
import { DISPLAY_LOADING, HIDE_LOADING } from "../../constants/LoadingConst";

//Quản lý các action saga

function* signInSaga(action) {
  console.log(action);
  yield put({
    type: DISPLAY_LOADING,
  });
  yield delay(2000);

  //Gọi api
  try {
    const { data, status } = yield call(() =>
      cyberbugsService.signInCyberBugs(action.userLogin)
    );

    //Lưu vào localstorage khi đăng nhập thành công
    localStorage.setItem(TOKEN, data.content.accessToken);
    localStorage.setItem(USER_LOGIN, JSON.stringify(data.content));

    console.log(data);
    yield put({
      type: USLOGIN,
      userLogin: data.content,
    });

    // let history = yield select(state=> state.HistoryReducer.history)

    history.push("/home");
  } catch (err) {
    console.log(err.response.data);
  }

  yield put({
    type: HIDE_LOADING,
  });
}

export function* theoDoiSignin() {
  yield takeLatest(USER_SIGNIN_API, signInSaga);
}

function* getUserSearch(action) {
  //Gọi api
  try {
    const { data, status } = yield call(() =>
      userService.getUserSearch(action.keyWord)
    );
    if (status === STATUS_CODE.SUCCESS) {
      console.log(data.content);
      yield put({
        type: "GET_USER_SEARCH",
        lstUserSearch: data.content,
      });
    }
  } catch (err) {
    console.log(err.response.data);
  }
}
export function* theoDoiGetUserSearch() {
  yield takeLatest("GET_USER_API_SEARCH", getUserSearch);
}
