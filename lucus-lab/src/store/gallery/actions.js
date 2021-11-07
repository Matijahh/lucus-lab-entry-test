import {
  SEARCH_GALLERY,
  SEARCH_GALLERY_SUCCESS,
  SEARCH_GALLERY_ERROR,
} from "./actionTypes";

export const searchGallery = (query) => {
  return {
    type: SEARCH_GALLERY,
    payload: { query },
  };
};
export const searchGallerySuccess = (photos) => {
  return {
    type: SEARCH_GALLERY_SUCCESS,
    payload: { photos },
  };
};
export const searchGalleryError = (error) => {
  return {
    type: SEARCH_GALLERY_ERROR,
    payload: error,
  };
};
