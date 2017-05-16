import localForage from 'localforage';

import {
  PICTURES_DB_KEY,
  SAVE_PICTURES_TO_SESSION,
  SAVE_PICTURES_TO_DB_START,
  SAVE_PICTURES_TO_DB_SUCCESS,
  SAVE_PICTURES_TO_DB_FAILURE,
  LOAD_PICTURES_FROM_DB_START,
  LOAD_PICTURES_FROM_DB_SUCCESS,
  LOAD_PICTURES_FROM_DB_FAILURE,
  INCREASE_PICTURE_RATING,
  DECREASE_PICTURE_RATING
} from './constants';

function getUrlsToFiles(files) {
  return Array.from(files)
    .map((file) => window.URL.createObjectURL(file));
}

function savePicturesToLocalForage(pictures) {
  return localForage.setItem(PICTURES_DB_KEY, pictures);
}

function loadPicturesFromLocalForage() {
  return localForage.getItem(PICTURES_DB_KEY);
}

export function savePicturesToSession(pictures) {
  return {
    type: SAVE_PICTURES_TO_SESSION,
    picturesUrls: getUrlsToFiles(pictures)
  };
}

export function savePicturesToDBStart() {
  return {
    type: SAVE_PICTURES_TO_DB_START
  };
}

export function savePicturesToDBSuccess() {
  return {
    type: SAVE_PICTURES_TO_DB_SUCCESS
  };
}

export function savePicturesToDBFailure(error) {
  return {
    error,
    type: SAVE_PICTURES_TO_DB_FAILURE
  };
}

export function loadPicturesFromDBStart() {
  return {
    type: LOAD_PICTURES_FROM_DB_START
  };
}

export function loadPicturesFromDBSuccess() {
  return {
    type: LOAD_PICTURES_FROM_DB_SUCCESS
  };
}

export function loadPicturesFromDBFailure(error) {
  return {
    error,
    type: LOAD_PICTURES_FROM_DB_FAILURE
  };
}

export function increasePictureRating(pictureUrl) {
  return {
    pictureUrl,
    type: INCREASE_PICTURE_RATING
  };
}

export function decreasePictureRating(pictureUrl) {
  return {
    pictureUrl,
    type: DECREASE_PICTURE_RATING
  };
}

export function savePicturesToDB(pictures) {
  return async function (dispatch) {
    dispatch(savePicturesToDBStart());

    try {
      await savePicturesToLocalForage(pictures);

      return dispatch(savePicturesToDBSuccess());
    } catch (error) {
      return dispatch(savePicturesToDBFailure(error));
    }
  };
}

export function loadPicturesFromDB() {
  return async function (dispatch) {
    let pictures;

    dispatch(loadPicturesFromDBStart());

    try {
      pictures = await loadPicturesFromLocalForage();

      dispatch(loadPicturesFromDBSuccess());
    } catch (error) {
      dispatch(loadPicturesFromDBFailure(error));
    }

    return pictures || [];
  };
}

export function savePictures(pictures) {
  return async function (dispatch) {
    dispatch(savePicturesToDB(pictures));

    return dispatch(savePicturesToSession(pictures));
  };
}

export function loadPictures() {
  return async function (dispatch) {
    const pictures = await dispatch(loadPicturesFromDB());

    return dispatch(savePicturesToSession(pictures));
  };
}
