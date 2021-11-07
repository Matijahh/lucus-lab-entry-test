import { all } from "redux-saga/effects";
import LoginSaga from "./login/saga";
import SearchSaga from "./gallery/saga";

export default function* rootSaga() {
  yield all([LoginSaga(), SearchSaga()]);
}
