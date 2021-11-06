import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  LOGOUT_USER,
  LOGOUT_USER_SUCCESS,
} from "./actionTypes";

const initialState = {
  error: "",
  user: null,
};

const login = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      state = {
        ...state,
        error: "",
      };
      break;
    case LOGIN_USER_SUCCESS:
      state = {
        ...state,
        user: action.payload,
        error: "",
      };
      break;
    case LOGIN_USER_ERROR:
      state = {
        ...state,
        error: action.payload,
      };
      break;
    case LOGOUT_USER:
      state = {
        ...state,
      };
      break;
    case LOGOUT_USER_SUCCESS:
      state = {
        ...state,
      };
      break;
    default:
      state = {
        ...state,
      };
      break;
  }
};

export default login;
