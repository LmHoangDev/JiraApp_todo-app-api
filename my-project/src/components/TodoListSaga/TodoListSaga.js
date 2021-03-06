import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ADD_TASK_API,
  CHECK_TASK_API,
  DEL_TASK_API,
  GET_TASKLIST_API,
  REJECT_TASK_API,
} from "../../redux/constants/ToDoConst";
import Header from "../Header/Header";
import "./todolistsaga.css";
export default function TodoListSaga(props) {
  let [state, setState] = useState({
    values: {
      taskName: "",
    },
    errors: {
      taskName: "",
    },
  });
  const { taskList } = useSelector((state) => state.ToDoListReducer);
  console.log(taskList);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    let { value, name } = e.target;
    let newValues = { ...state.values };

    newValues = { ...newValues, [name]: value };

    let newErrors = { ...state.errors };

    let regexString = /^[a-z A-Z]+$/;

    if (!regexString.test(value) || value.trim() === "") {
      newErrors[name] = name + " invalid !";
    } else {
      newErrors[name] = "";
    }

    setState({
      ...state,
      values: newValues,
      errors: newErrors,
    });
  };

  const getTaskList = () => {
    dispatch({
      type: GET_TASKLIST_API,
    });
  };

  const addTask = (e) => {
    e.preventDefault();
    dispatch({
      type: ADD_TASK_API,
      taskName: state.values.taskName,
    });
  };

  useEffect(() => {
    getTaskList();

    return () => {};
  }, []);

  //Xử lý reject task
  const rejectTask = (taskName) => {
    dispatch({
      type: REJECT_TASK_API,
      taskName,
    });
  };

  //Xử lý done task
  const checkTask = (taskName) => {
    console.log(taskName);
    dispatch({
      type: CHECK_TASK_API,
      taskName,
    });
  };

  //Hàm xử lý xóa task
  const delTask = (taskName) => {
    dispatch({
      type: DEL_TASK_API,
      taskName: taskName,
    });
  };

  const renderTaskToDo = () => {
    return taskList
      .filter((item) => !item.status)
      .map((item, index) => {
        return (
          <li key={index}>
            <span>{item.taskName}</span>
            <div className="buttons">
              <button
                className="remove"
                type="button"
                onClick={() => {
                  delTask(item.taskName);
                }}
              >
                <i className="fa fa-trash-alt" />
              </button>
              <button
                type="button"
                className="complete"
                onClick={() => {
                  checkTask(item.taskName);
                }}
              >
                <i className="far fa-check-circle" />
                <i className="fas fa-check-circle" />
              </button>
            </div>
          </li>
        );
      });
  };

  const renderTaskToDoDone = () => {
    return taskList
      .filter((item) => item.status)
      .map((item, index) => {
        return (
          <li key={index}>
            <span>{item.taskName}</span>
            <div className="buttons">
              <button
                className="remove"
                type="button"
                onClick={() => {
                  delTask(item.taskName);
                }}
              >
                <i className="fa fa-trash-alt" />
              </button>
              <button
                type="button"
                className="complete"
                onClick={() => {
                  rejectTask(item.taskName);
                }}
              >
                <i className="far fa-undo" />
                <i className="fas fa-undo" />
              </button>
            </div>
          </li>
        );
      });
  };

  return (
    <>
      <Header />
      <div className="card">
        <div className="card__header">
          <img src={require("./bg1.png")} alt="" />
        </div>
        {/* <h2>hello!</h2> */}
        <form className="card__body" onSubmit={addTask}>
          <div className="card__content">
            <div className="card__title">
              <h2>My Tasks</h2>
              <p>January ,2022</p>
            </div>
            <div className="card__add">
              <input
                id="newTask"
                name="taskName"
                type="text"
                placeholder="Enter an activity..."
                onChange={handleChange}
              />
              <button id="addItem" type="submit" onClick={addTask}>
                <i className="fa fa-plus" />
              </button>
            </div>
            <span className="text-danger">{state.errors.taskName}</span>
            <div className="card__todo">
              {/* Uncompleted tasks */}
              <ul className="todo" id="todo">
                {renderTaskToDo()}
              </ul>
              {/* Completed tasks */}
              <ul className="todo" id="completed">
                {renderTaskToDoDone()}
              </ul>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
