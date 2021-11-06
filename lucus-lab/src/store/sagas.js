import { all } from "redux-saga/effects";
import LoginSaga from "./login/saga";

export default function* rootSaga() {
  yield all([LoginSaga()]);
}
