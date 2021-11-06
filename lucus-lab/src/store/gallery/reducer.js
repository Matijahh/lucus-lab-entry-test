import {
  SEARCH_GALLERY,
  SEARCH_GALLERY_SUCCESS,
  SEARCH_GALLERY_ERROR,
} from "./actionTypes";

const initialState = {
  error: "",
  query: "",
};

const gallery = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_GALLERY:
      state = {
        ...state,
      };
      break;
    case SEARCH_GALLERY_SUCCESS:
      state = {
        ...state,
        query: action.payload,
      };
      break;
    case SEARCH_GALLERY_ERROR:
      state = {
        ...state,
        error: action.payload,
      };
      break;
    default:
      state = { ...state };
      break;
  }
  return state;
};

export default gallery;
