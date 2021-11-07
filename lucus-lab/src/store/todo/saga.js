import { takeEvery, fork, put, all } from "redux-saga/effects";

import {
  CREATE_TODO,
  GET_TODOS,
  UPDATE_TODO,
  DELETE_TODO,
} from "./actionTypes";
import {
  createTodoSuccess,
  createTodoError,
  getTodosSuccess,
  getTodosError,
  updateTodoSuccess,
  updateTodoError,
  deleteTodoSuccess,
  deleteTodoError,
} from "./actions";

export function* createTodo({ payload }) {
  try {
    const response = localStorage.getItem("taskList");
    const resObj = JSON.parse(response);
    if (resObj) {
      let tempList = resObj;
      tempList.push(payload);
      localStorage.setItem("taskList", JSON.stringify(tempList));
      yield put(createTodoSuccess(tempList));
    } else {
      yield put(createTodoError("Something went wrong."));
    }
  } catch (error) {
    yield put(createTodoError(error));
  }
}

export function* getTodos({ payload }) {
  try {
    const response = localStorage.getItem("taskList");
    const resObj = JSON.parse(response);
    if (resObj) {
      yield put(getTodosSuccess(resObj));
    } else {
      yield put(getTodosError("Something went wrong."));
    }
  } catch (error) {
    yield put(getTodosError(error));
  }
}

export function* updateTodo({ payload }) {
  try {
    const response = localStorage.getItem("taskList");
    const resObj = JSON.parse(response);
    if (resObj) {
      let tempList = resObj;
      tempList[payload.id] = payload.data;
      localStorage.setItem("taskList", JSON.stringify(tempList));
      yield put(updateTodoSuccess(tempList));
    } else {
      yield put(updateTodoError("Something went wrong."));
    }
  } catch (error) {
    yield put(updateTodoError(error));
  }
}

export function* deleteTodo({ payload }) {
  try {
    const response = localStorage.getItem("taskList");
    const resObj = JSON.parse(response);
    if (resObj) {
      let tempList = resObj;
      tempList.splice(payload, 1);
      localStorage.setItem("taskList", JSON.stringify(tempList));
      yield put(deleteTodoSuccess(tempList));
    } else {
      yield put(deleteTodoError("Something went wrong."));
    }
  } catch (error) {
    yield put(deleteTodoError(error));
  }
}

export function* watchCreateTodo() {
  yield takeEvery(CREATE_TODO, createTodo);
}

export function* watchGetTodos() {
  yield takeEvery(GET_TODOS, getTodos);
}

export function* watchUpdateTodo() {
  yield takeEvery(UPDATE_TODO, updateTodo);
}

export function* watchDeleteTodo() {
  yield takeEvery(DELETE_TODO, deleteTodo);
}

function* todoSaga() {
  yield all([
    fork(watchCreateTodo),
    fork(watchGetTodos),
    fork(watchUpdateTodo),
    fork(watchDeleteTodo),
  ]);
}

export default todoSaga;
