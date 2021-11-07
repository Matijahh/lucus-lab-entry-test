import { GET_POSTS, GET_POSTS_SUCCESS, GET_POSTS_ERROR } from "./actionTypes";

export const getPosts = () => {
  return {
    type: GET_POSTS,
    payload: {},
  };
};

export const getPostsSuccess = (posts) => {
  return {
    type: GET_POSTS_SUCCESS,
    payload: posts,
  };
};

export const getPostsError = (error) => {
  return {
    type: GET_POSTS_ERROR,
    payload: error,
  };
};
