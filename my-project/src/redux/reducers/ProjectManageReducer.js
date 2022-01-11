const initialState = {
  projectList: [],
};
export const ProjectManageReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_PROJECT":
      state.projectList = action.projectList;
      return { ...state };

    default:
      return state;
  }
};
