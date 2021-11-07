import React, { Component } from "react";

/** Redux Imports */
import { connect } from "react-redux";
import { createTodo, getTodos, updateTodo, deleteTodo } from "../store/actions";

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
    this.props.getTodos();
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  saveTask(taskObj) {
    this.props.createTodo(taskObj);
  }

  deleteTask(index) {
    this.props.deleteTodo(index);
  }

  updateListArray(obj, index) {
    this.props.updateTodo(obj, index);
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
              {this.props.todo &&
                this.props.todo.map((task, index) => {
                  return (
                    <Card
                      task={task}
                      key={index}
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

const mapStateToProps = (state) => {
  return { todo: state.Todo.todo };
};

export default connect(mapStateToProps, {
  createTodo,
  getTodos,
  updateTodo,
  deleteTodo,
})(ToDoList);
