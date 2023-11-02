import { useReducer } from 'react';

const ADD_FAVOURITE = "addFavourite";
const REMOVE_FAVOURITE = "removeFavourite";
const SET_PHOTO_INFO = "setPhotoInfo";

//It's just a state setter
function reducer(state, action) {

  if (action.type === ADD_FAVOURITE) {
    return [...state, action.value];
  }

  if (action.type === REMOVE_FAVOURITE) {
    return state.filter(id => id != action.value);
  }

  if(action.type === SET_PHOTO_INFO) {
    return action.value;
  }

  return state;
}

export const useApplicationData = () => {

  const [photoInfo, setPhotoInfo] = useReducer(reducer, null);
  const [listOfFavPhotos, setListOfFavPhotos] = useReducer(reducer, []);

  const showModal = (photoInfo) => {
    if (photoInfo === null) {
      setPhotoInfo({ type: SET_PHOTO_INFO, value: null });
      return;
    }

    setPhotoInfo({ type: SET_PHOTO_INFO, value: photoInfo });
  };

  const toggleFavourite = (photoId) => {

    if (listOfFavPhotos.includes(photoId)) {

      setListOfFavPhotos({ type: REMOVE_FAVOURITE, value: photoId });
      return;
    }

    //add
    setListOfFavPhotos({ type: ADD_FAVOURITE, value: photoId });
  };

  //on render, this will give us an updated 'heart' value
  const isThereAFavourite = (list = listOfFavPhotos) => {
    return list.length !== 0;
  };

  const isFavourite = (photoId) => {
    return listOfFavPhotos.includes(photoId);
  };

  // return addFavourite fn to allow components to add photos
  // return isThereAHeart to tell if Nav should 'fill' the heart
  // return photoinfo, an {} that contains info about the photo that was clicked
  // return showModal fn that hides or closes the modal
  return { toggleFavourite, isFavourite, isThereAFavourite, photoInfo, showModal };
};



