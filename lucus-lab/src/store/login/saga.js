import { takeEvery, fork, put, all } from "redux-saga/effects";

// Login Redux States
import { LOGIN_USER } from "./actionTypes";
import { loginUserSuccess, loginUserError } from "./actions";

export function* loginUser({ payload }) {
  try {
    // In Local Storage Create Some Credentials for Authentication
    const response = localStorage.getItem("authLucusLab");
    const resObj = JSON.parse(response);
    if (resObj) {
      if (payload.email === resObj.email && payload.pass === resObj.pass) {
        yield put(loginUserSuccess(resObj));
        payload.history.push("/home");
      } else {
        yield put(loginUserError({ error: "Wrong Email or Pass" }));
      }
    }
  } catch (error) {
    yield put(loginUserError(error));
  }
}

export function* watchUserLogin() {
  yield takeEvery(LOGIN_USER, loginUser);
}

function* loginSaga() {
  yield all([fork(watchUserLogin)]);
}

export default loginSaga;
