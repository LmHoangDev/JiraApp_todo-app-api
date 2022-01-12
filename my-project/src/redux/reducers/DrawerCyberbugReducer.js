import React from "react";

const initialState = {
  visible: false,
  ComponentContentDrawer: <p>default</p>,
  callBackSubmit: (propsValue) => {
    alert("click demo!");
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "OPEN_DRAWER":
      return { ...state, visible: true };
    case "CLOSE_DRAWER":
      return { ...state, visible: false };
    case "OPEN_FORM_EDIT_PROJECT": {
      state.visible = true;
      state.ComponentContentDrawer = action.Component;

      return { ...state };
    }
    case "SET_SUBMIT_EDIT_PROJECT": {
      state.callBackSubmit = action.submitFunction;
      return { ...state };
    }
    default:
      return state;
  }
};