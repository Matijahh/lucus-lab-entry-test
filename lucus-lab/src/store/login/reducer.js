import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
} from "./actionTypes";

const initialState = {
  user: null,
  error: "",
};

const login = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      state = {
        ...state,
      };
      break;
    case LOGIN_USER_SUCCESS:
      state = {
        ...state,
        user: action.payload,
      };
      break;
    case LOGIN_USER_ERROR:
      state = {
        ...state,
        error: action.payload,
      };
      break;
    default:
      state = {
        ...state,
      };
      break;
  }
  return state;
};

export default login;
