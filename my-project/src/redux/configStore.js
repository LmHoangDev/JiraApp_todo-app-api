import { applyMiddleware, combineReducers, createStore } from "redux";
import ToDoListReducer from "./reducers/ToDoListReducer";
import reduxThunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./sagas/rootSaga";

const middleWareSaga = createSagaMiddleware();

const rootReducer = combineReducers({
  //reducer khai báo tại đây
  ToDoListReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(reduxThunk, middleWareSaga)
);
middleWareSaga.run(rootSaga);
export default store;
