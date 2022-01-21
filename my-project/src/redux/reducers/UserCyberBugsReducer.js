import { USLOGIN } from "../constants/Cyberbugs/Cyberbugs";
import { GET_USER_BY_PROJECT_ID } from "../constants/Cyberbugs/UserConstants";
const { USER_LOGIN } = require("../../util/constants/settingSystem");

let usLogin = {};

if (localStorage.getItem(USER_LOGIN)) {
  usLogin = JSON.parse(localStorage.getItem(USER_LOGIN));
}

const stateDefault = {
  userLogin: usLogin,
  userSearch: [],
  arrUser: [], //Array user cho thẻ select create task
};

export const UserLoginCyberBugsReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case USLOGIN: {
      state.userLogin = action.userLogin;
      return { ...state };
    }
    case "GET_USER_SEARCH":
      state.userSearch = action.lstUserSearch;
      console.log(action.lstUserSearch);
      return { ...state };
    case GET_USER_BY_PROJECT_ID:
      state.arrUser = action.arrUser;
      return { ...state };

    default:
      return { ...state };
  }
};
