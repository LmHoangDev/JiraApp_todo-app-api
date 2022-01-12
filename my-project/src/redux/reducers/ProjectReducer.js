const initialState = {
  projectEdit: {
    id: 0,
    projectName: "string",
    creator: 0,
    description: "string",
    categoryId: "2",
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "EDIT_PROJECT":
      console.log(action);
      state.projectEdit = action.projectEditModel;
      return { ...state };
    default:
      return state;
  }
};
