import { useReducer, useEffect } from 'react';
import axios from 'axios';

const ADD_FAVOURITE = "addFavourite";
const REMOVE_FAVOURITE = "removeFavourite";
const SET_PHOTO_INFO = "setPhotoInfo";
const SET_PHOTO_DATA = "setPhotoData";
const SET_PHOTO_TOPICS = "setPhotoTopics";

//It's just a state setter
function reducer(state, action) {

  if (action.type === ADD_FAVOURITE) {
    return {
      ...state,
      listOfFavPhotos: [...state.listOfFavPhotos, action.value]
    };
  }

  if (action.type === REMOVE_FAVOURITE) {
    return {
      ...state,
      listOfFavPhotos: state.listOfFavPhotos.filter(id => id != action.value)
    };
  }

  if (action.type === SET_PHOTO_INFO) {
    return { ...state, photoInfo: action.value };
  }

  if (action.type === SET_PHOTO_DATA) {
    return { ...state, photoData: action.value };
  }

  if (action.type === SET_PHOTO_TOPICS) {
    return { ...state, topicData: action.value };
  }

  return state;
}

//TODO
// 
// photolist item returns back entire object with populated data.  could we do that here?  Might be easier to just get the object from photoData with the photo id and return it straight up.
// 
// TDO
export const useApplicationData = () => {

  const intialState = {
    photoData: [],
    topicData: [],
    photoInfo: null,
    listOfFavPhotos: []
  };

  const [state, dispatch] = useReducer(reducer, intialState);

  useEffect(() => {
    const photosFromApi = axios.get('/api/photos');
    const topicsFromApi = axios.get('/api/topics');

    //get all or nothing at all
    Promise.all([photosFromApi, topicsFromApi])
      .then(responses => {
        const photoData = responses[0].data;
        const topicsData = responses[1].data;

        dispatch({ type: SET_PHOTO_DATA, value: photoData });
        dispatch({ type: SET_PHOTO_TOPICS, value: topicsData });
      })
      .catch(error => {
        //handle error
        console.log(error.message);
      });

    //called once.
  }, []);

  const showModal = (photoInfo) => {
    if (photoInfo === null) {
      dispatch({ type: SET_PHOTO_INFO, value: null });
      return;
    }

    //TODO see to do above.
    dispatch({ type: SET_PHOTO_INFO, value: photoInfo });
  };

  const toggleFavourite = (photoId) => {

    if (state.listOfFavPhotos.includes(photoId)) {

      dispatch({ type: REMOVE_FAVOURITE, value: photoId });
      return;
    }

    //add
    dispatch({ type: ADD_FAVOURITE, value: photoId });
  };

  //on render, this will give us an updated 'heart' value
  const isThereAFavourite = (list = state.listOfFavPhotos) => {
    return list.length !== 0;
  };

  const isFavourite = (photoId) => {
    return state.listOfFavPhotos.includes(photoId);
  };

  const selected = state.photoInfo && isFavourite(state.photoInfo.photoId);

  // return toggleFavourite fn to allow components to add photos.
  // return isThereAFavourite to tell if Nav should 'fill' the heart.
  // return showModal fn that hides or closes the modal.
  // return isFavourite to tell if the photo is favourited.
  // return selected to if photo is favourited and modal is popped up.
  return {
    toggleFavourite,
    isFavourite,
    isThereAFavourite,
    showModal,
    selected,
    state
  };
};