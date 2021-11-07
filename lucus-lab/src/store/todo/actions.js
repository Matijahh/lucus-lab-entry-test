import {
  GET_TODOS,
  GET_TODOS_SUCCESS,
  GET_TODOS_ERROR,
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

export const getTodos = () => {
  return {
    type: GET_TODOS,
    payload: {},
  };
};

export const getTodosSuccess = (todo) => {
  return {
    type: GET_TODOS_SUCCESS,
    payload: todo,
  };
};

export const getTodosError = (error) => {
  return {
    type: GET_TODOS_ERROR,
    payload: error,
  };
};

export const createTodo = (data) => {
  return {
    type: CREATE_TODO,
    payload: data,
  };
};

export const createTodoSuccess = (todo) => {
  return {
    type: CREATE_TODO_SUCCESS,
    payload: todo,
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
    payload: { data, id },
  };
};

export const updateTodoSuccess = (todo) => {
  return {
    type: UPDATE_TODO_SUCCESS,
    payload: todo,
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

export const deleteTodoSuccess = (todo) => {
  return {
    type: DELETE_TODO_SUCCESS,
    payload: todo,
  };
};

export const deleteTodoError = (error) => {
  return {
    type: DELETE_TODO_ERROR,
    payload: error,
  };
};
