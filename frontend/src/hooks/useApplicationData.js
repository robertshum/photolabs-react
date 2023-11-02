import { useState } from 'react';

export const useApplicationData = () => {

  const [photoInfo, setPhotoInfo] = useState(null);
  const [listOfFavPhotos, setListOfFavPhotos] = useState([]);

  const showModal = (photoInfo) => {
    photoInfo === null ? setPhotoInfo(null) : setPhotoInfo(photoInfo);
  };

  const addFavourite = (photoId) => {

    if (listOfFavPhotos.includes(photoId)) {

      //remove
      setListOfFavPhotos((prevElements) =>
        prevElements.filter(id => id != photoId));
      return;
    }

    //add
    setListOfFavPhotos((prevElements) => [...prevElements, photoId]);
  };

  //on render, this will give us an updated 'heart' value
  const isThereAHeart = isThereAFavourite(listOfFavPhotos);

  // return addFavourite fn to allow components to add photos
  // return isThereAHeart to tell if Nav should 'fill' the heart
  // return photoinfo, an {} that contains info about the photo that was clicked
  // return showModal fn that hides or closes the modal
  return { addFavourite, isThereAHeart, photoInfo, showModal };
};

const isThereAFavourite = (list) => {
  return list.length !== 0;
};