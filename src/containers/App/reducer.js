import {
  SAVE_PICTURES_TO_SESSION
} from './constants';

const pictures = (state = [], action) => {
  switch (action.type) {
    case SAVE_PICTURES_TO_SESSION:
      return action.picturesUrls.map((url) => {
        return {
          url,
          rating: 0
        }
      });
    default:
      return state;
  }
};

export default pictures;
