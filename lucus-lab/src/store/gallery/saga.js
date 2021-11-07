import { takeEvery, fork, put, all, call } from "redux-saga/effects";
import { SEARCH_GALLERY } from "./actionTypes";

import { searchGallerySuccess, searchGalleryError } from "./actions";

const getSearchImages = async (query) => {
  try {
    const clientId = "Lv8Olhsa28dAqyYSnazjV3BnI8nvSBbT0s7qO7qvlF4";
    const response = await fetch(
      `https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=${clientId}`
    );
    return response.json();
  } catch (error) {
    return error.response;
  }
};

export function* searchGallery({ payload }) {
  try {
    const response = yield call(getSearchImages, payload.query);
    if (response) {
      yield put(
        searchGallerySuccess({
          photos: response && response.results,
        })
      );
    }
  } catch (error) {
    yield put(searchGalleryError(error));
  }
}

export function* watchSearch() {
  yield takeEvery(SEARCH_GALLERY, searchGallery);
}

function* searchSaga() {
  yield all([fork(watchSearch)]);
}

export default searchSaga;
