import {
  SAVE_PICTURES_TO_SESSION,
  INCREASE_PICTURE_RATING,
  DECREASE_PICTURE_RATING
} from './constants';

function addPictures(picturesUrls) {
  return picturesUrls.map((url) => {
    return {
      url,
      rating: 0
    };
  });
}

function updatePictureRating(pictures, pictureUrl, predicate) {
  const pictureIndex = pictures.findIndex((picture) => picture.url === pictureUrl);

  return pictureIndex === -1 ? pictures : [
    ...pictures.slice(0, pictureIndex),
    {
      ...pictures[pictureIndex],
      rating: predicate(pictures[pictureIndex])
    },
    ...pictures.slice(pictureIndex + 1),
  ];
}

const pictures = (state = [], action) => {
  switch (action.type) {
    case SAVE_PICTURES_TO_SESSION:
      return addPictures(action.picturesUrls);
    case INCREASE_PICTURE_RATING:
      return updatePictureRating(state, action.pictureUrl, (picture) => picture.rating + 1);
    case DECREASE_PICTURE_RATING:
      return updatePictureRating(state, action.pictureUrl, (picture) => picture.rating - 1);
    default:
      return state;
  }
};

export default pictures;
