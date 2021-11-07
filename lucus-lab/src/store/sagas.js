import { all } from "redux-saga/effects";
import LoginSaga from "./login/saga";
import PostsSaga from "./posts/saga";
import SearchSaga from "./gallery/saga";
import TodoSaga from "./todo/saga";

export default function* rootSaga() {
  yield all([LoginSaga(), PostsSaga(), SearchSaga(), TodoSaga()]);
}
