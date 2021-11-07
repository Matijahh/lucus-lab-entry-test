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

const initialState = {
  error: "",
  todo: null,
};

const todo = (state = initialState, action) => {
  switch (action.type) {
    case GET_TODOS: {
      state = {
        ...state,
      };
      break;
    }
    case GET_TODOS_SUCCESS: {
      state = {
        ...state,
        todo: action.payload,
      };
      break;
    }
    case GET_TODOS_ERROR: {
      state = {
        ...state,
        error: action.payload,
      };
      break;
    }
    case CREATE_TODO: {
      state = {
        ...state,
      };
      break;
    }
    case CREATE_TODO_SUCCESS: {
      state = {
        ...state,
        todo: action.payload,
      };
      break;
    }
    case CREATE_TODO_ERROR: {
      state = {
        ...state,
        error: action.payload,
      };
      break;
    }
    case UPDATE_TODO: {
      state = {
        ...state,
      };
      break;
    }
    case UPDATE_TODO_SUCCESS: {
      state = {
        ...state,
        todo: action.payload,
      };
      break;
    }
    case UPDATE_TODO_ERROR: {
      state = {
        ...state,
        error: action.payload,
      };
      break;
    }
    case DELETE_TODO: {
      state = {
        ...state,
      };
      break;
    }
    case DELETE_TODO_SUCCESS: {
      state = {
        ...state,
        todo: action.payload,
      };
      break;
    }
    case DELETE_TODO_ERROR: {
      state = {
        ...state,
        error: action.payload,
      };
      break;
    }
    default: {
      state = {
        ...state,
      };
      break;
    }
  }
  return state;
};

export default todo;
