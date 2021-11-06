import React, { Component } from "react";

/** Components Imports */
import Sidebar from "../components/Sidebar";
import Card from "../components/Card";

/** Modals Imports */
import CreateToDoModal from "../modals/CreateToDoModal";

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      taskList: [],
    };
    this.toggle = this.toggle.bind(this);
    this.saveTask = this.saveTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.updateListArray = this.updateListArray.bind(this);
  }

  componentDidMount() {
    let arr = localStorage.getItem("taskList");

    if (arr) {
      let obj = JSON.parse(arr);
      this.setState({ taskList: obj });
    }
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  saveTask(taskObj) {
    let tempList = this.state.taskList;
    tempList.push(taskObj);
    localStorage.setItem("taskList", JSON.stringify(tempList));
    this.setState({ taskList: tempList });
  }

  deleteTask(index) {
    let tempList = this.state.taskList;
    tempList.splice(index, 1);
    localStorage.setItem("taskList", JSON.stringify(tempList));
    this.setState({ taskList: tempList });
  }

  updateListArray(obj, index) {
    let tempList = this.state.taskList;
    tempList[index] = obj;
    localStorage.setItem("taskList", JSON.stringify(tempList));
    this.setState({ taskList: tempList });
    window.location.reload(false);
  }

  render() {
    return (
      <div className="page-wrapper">
        <Sidebar />
        <div className="page-content">
          <div className="todo-wrapper">
            <span className="page-title">To Do List</span>
            <button
              className="create-task-btn"
              onClick={() => this.setState({ modal: true })}
            >
              Create Task
            </button>
            <div className="all-todo-container">
              {this.state.taskList.map((task, index) => {
                return (
                  <Card
                    task={task}
                    index={index}
                    deleteTask={this.deleteTask}
                    updateListArray={this.updateListArray}
                  />
                );
              })}
            </div>
            <CreateToDoModal
              toggle={this.toggle}
              modal={this.state.modal}
              save={this.saveTask}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ToDoList;
