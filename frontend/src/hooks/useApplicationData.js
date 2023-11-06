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

const intialState = {
  photoData: [],
  topicData: [],
  photoInfo: null,
  listOfFavPhotos: []
};

export const useApplicationData = () => {

  const [state, dispatch] = useReducer(reducer, intialState);

  //get photos AND photo topics from server via axios.
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
        // console.log(error.message);
      });

    //called once.
  }, []);

  //Show or Hide the modal
  const showModal = (photoInfo) => {
    if (photoInfo === null) {
      dispatch({ type: SET_PHOTO_INFO, value: null });
      return;
    }

    //we need to repopulate similar photos, if it's undefined
    let foundPhoto = null;
    if (photoInfo.similar_photos === undefined) {

      const id = photoInfo.photoId;
      foundPhoto = state.photoData.find(photo => photo.id === id);
    }

    //if we found it, update the photoInfo
    if (foundPhoto) {
      photoInfo.similar_photos = foundPhoto.similar_photos;
    }

    dispatch({ type: SET_PHOTO_INFO, value: photoInfo });
  };

  //add or remove the photo from a list of favourites
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

  //checks if photo is a favourite.
  const isFavourite = (photoId) => {
    return state.listOfFavPhotos.includes(photoId);
  };

  //Get photos based on topic ID
  const getPhotosById = (topicId) => {
    axios.get(`/api/topics/photos/${topicId}`)
      .then(response => {
        const photosByTopic = response.data;
        dispatch({ type: SET_PHOTO_DATA, value: photosByTopic });
      })
      .catch(error => {
        //handle error
        // console.log(error.message);
      });
  };

  //show favourited phot that is selected
  const selected = state.photoInfo && isFavourite(state.photoInfo.photoId);

  return {
    toggleFavourite,
    isFavourite,
    isThereAFavourite,
    showModal,
    getPhotosById,
    selected,
    state
  };
};