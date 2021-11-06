import {
  CREATE_TODO,
  CREATE_TODO_SUCCESS,
  CREATE_TODO_ERROR,
  UPDATE_TODO,
  UPDATE_TODO_SUCCESS,
  UPDATE_TODO_ERROR,
  DELETE_TODO,
  DELETE_TODO_SUCCESS,
  DELETE_TODO_ERROR,
} from "./actionTypes";

export const createTodo = (data) => {
  return {
    type: CREATE_TODO,
    payload: data,
  };
};

export const createTodoSuccess = (message) => {
  return {
    type: CREATE_TODO_SUCCESS,
    payload: message,
  };
};

export const createTodoError = (error) => {
  return {
    type: CREATE_TODO_ERROR,
    payload: error,
  };
};

export const updateTodo = (data, id) => {
  return {
    type: UPDATE_TODO,
    payload: data,
  };
};

export const updateTodoSuccess = (message) => {
  return {
    type: UPDATE_TODO_SUCCESS,
    payload: message,
  };
};

export const updateTodoError = (error) => {
  return {
    type: UPDATE_TODO_ERROR,
    payload: error,
  };
};

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};

export const deleteTodoSuccess = (message) => {
  return {
    type: DELETE_TODO_SUCCESS,
    payload: message,
  };
};

export const deleteTodoError = (error) => {
  return {
    type: DELETE_TODO_ERROR,
    payload: error,
  };
};
