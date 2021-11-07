import { takeEvery, fork, put, all, call } from "redux-saga/effects";

import { GET_POSTS } from "./actionTypes";
import { getPostsSuccess, getPostsError } from "./actions";

const fetchPosts = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    return response.json();
  } catch (error) {
    return error.response;
  }
};

export function* getPosts() {
  try {
    const response = yield call(fetchPosts);
    if (response) {
      yield put(getPostsSuccess(response));
    } else {
      yield put(getPostsError("Something went Wrong"));
    }
  } catch (error) {
    yield put(getPostsError(error));
  }
}

export function* watchGetPosts() {
  yield takeEvery(GET_POSTS, getPosts);
}

function* postsSaga() {
  yield all([fork(watchGetPosts)]);
}

export default postsSaga;
