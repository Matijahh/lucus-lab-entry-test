import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
} from "./actionTypes";

export const loginUser = (email, pass, history) => {
  return {
    type: LOGIN_USER,
    payload: { email, pass, history },
  };
};

export const loginUserSuccess = (message) => {
  return {
    type: LOGIN_USER_SUCCESS,
    payload: message,
  };
};

export const loginUserError = (error) => {
  return {
    type: LOGIN_USER_ERROR,
    payload: error,
  };
};
