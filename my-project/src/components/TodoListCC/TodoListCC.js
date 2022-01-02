import React, { Component } from "react";
import "./todolist.css";
import Axios from "axios";
export default class TodoListCC extends Component {
  state = {
    taskList: [],
    values: {
      taskName: "",
    },
    errors: {
      taskName: "",
    },
  };

  getTaskList = () => {
    let promise = Axios({
      url: "http://svcy.myclass.vn/api/ToDoList/GetAllTask",
      method: "GET",
    });

    promise.then((result) => {
      console.log(result.data);
      //Nếu gọi api lấy về kết quả thành công
      //=> set lại state của component
      this.setState({
        taskList: result.data,
      });

      console.log("thành công");
    });
    promise.catch((err) => {
      console.log("thất bại");

      console.log(err.response.data);
    });
  };

  renderTaskToDo = () => {
    return this.state.taskList
      .filter((item) => !item.status)
      .map((item, index) => {
        return (
          <li key={index}>
            <span>{item.taskName}</span>
            <div className="buttons">
              <button
                className="remove"
                type="button"
                onClick={() => this.delTask(item.taskName)}
              >
                <i className="fa fa-trash-alt" />
              </button>
              <button
                className="complete"
                type="button"
                onClick={() => {
                  this.checkTask(item.taskName);
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

  renderTaskToDoDone = () => {
    return this.state.taskList
      .filter((item) => item.status)
      .map((item, index) => {
        return (
          <li key={index}>
            <span>{item.taskName}</span>
            <div className="buttons">
              <button
                className="remove"
                type="button"
                onClick={() => this.delTask(item.taskName)}
              >
                <i className="fa fa-trash-alt" />
              </button>
              <button
                className="complete"
                type="button"
                onClick={() => this.rejectTask(item.taskName)}
              >
                <i className="far fa-undo" />
                <i className="fas fa-undo" />
              </button>
            </div>
          </li>
        );
      });
  };
  handleChange = (e) => {
    let { value, name } = e.target;
    console.log(value, name);
    let newValues = { ...this.state.values };

    newValues = { ...newValues, [name]: value };

    let newErrors = { ...this.state.errors };

    let regexString = /^[a-z A-Z]+$/;

    if (!regexString.test(value) || value.trim() === "") {
      newErrors[name] = name + " invalid !";
    } else {
      newErrors[name] = "";
    }

    this.setState({
      ...this.state,
      values: newValues,
      errors: newErrors,
    });
  };
  addTask = (e) => {
    e.preventDefault(); //Dừng sự kiện submit form
    console.log(this.state.values.taskName);

    let promise = Axios({
      url: "http://svcy.myclass.vn/api/ToDoList/AddTask",
      method: "POST",
      data: { taskName: this.state.values.taskName },
    });

    //Xử lý thành công
    promise.then((result) => {
      // alert(result.data);
      this.getTaskList();
    });

    //Xử lý thất bại
    promise.catch((errors) => {
      alert(errors.response.data);
    });
  };
  delTask = (taskName) => {
    let promise = Axios({
      url: `http://svcy.myclass.vn/api/ToDoList/deleteTask?taskName=${taskName}`,
      method: "DELETE",
    });
    promise.then((result) => {
      // alert(result.data);
      this.getTaskList();
    });

    //Xử lý thất bại
    promise.catch((errors) => {
      alert(errors.response.data);
    });
  };
  checkTask = (taskName) => {
    let promise = Axios({
      url: `http://svcy.myclass.vn/api/ToDoList/doneTask?taskName=${taskName}`,
      method: "PUT",
    });
    promise.then((result) => {
      // alert(result.data);
      this.getTaskList();
    });

    //Xử lý thất bại
    promise.catch((errors) => {
      alert(errors.response.data);
    });
  };
  rejectTask = (taskName) => {
    let promise = Axios({
      url: `http://svcy.myclass.vn/api/ToDoList/rejectTask?taskName=${taskName}`,
      method: "PUT",
    });
    promise.then((result) => {
      // alert(result.data);
      this.getTaskList();
    });

    //Xử lý thất bại
    promise.catch((errors) => {
      alert(errors.response.data);
    });
  };
  //ham se tu dong thuc thi sau component xh
  componentDidMount() {
    this.getTaskList();
  }
  render() {
    return (
      <form onSubmit={this.addTask}>
        <div className="card">
          <div className="card__header">
            <img src={require("./bg.png")} alt="" />
          </div>
          {/* <h2>hello!</h2> */}
          <div className="card__body">
            <div className="card__content">
              <div className="card__title">
                <h2>Todo Tasks</h2>
                <p>January, 2022</p>
              </div>
              <div className="card__add">
                <input
                  id="newTask"
                  type="text"
                  name="taskName"
                  onChange={this.handleChange}
                  placeholder="Enter an activity..."
                />
                <button id="addItem" onClick={this.addTask}>
                  <i className="fa fa-plus" />
                </button>
              </div>
              <span className="text text-danger">
                {this.state.errors.taskName}
              </span>
              <div className="card__todo">
                <ul className="todo" id="todo">
                  {this.renderTaskToDo()}
                </ul>

                <ul className="todo" id="completed">
                  {this.renderTaskToDoDone()}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}
