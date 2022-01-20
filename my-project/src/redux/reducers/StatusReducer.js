import { GET_ALL_STATUS } from "../constants/Cyberbugs/StatusConstants";

const initialState = {
  arrStatus: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_STATUS:
      state.arrStatus = action.arrStatus;
      return { ...state };
    default:
      return state;
  }
};
