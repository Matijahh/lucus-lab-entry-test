import { GET_POSTS, GET_POSTS_SUCCESS, GET_POSTS_ERROR } from "./actionTypes";

const initialState = {
  error: "",
  posts: null,
};

const posts = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS: {
      state = {
        ...state,
      };
      break;
    }
    case GET_POSTS_SUCCESS: {
      state = {
        ...state,
        posts: action.payload,
      };
      break;
    }
    case GET_POSTS_ERROR: {
      state = {
        ...state,
        error: action.payload,
      };
      break;
    }
    default: {
      state = {
        ...state,
      };
      break;
    }
  }
  return state;
};

export default posts;
