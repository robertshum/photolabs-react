import React, { useState } from 'react';
import PhotoList from './PhotoList';
import TopNavigationBar from './TopNavigationBar';
import '../styles/HomeRoute.scss';

const HomeRoute = () => {

  const [listOfFavPhotos, setListOfFavPhotos] = useState([]);

  //adds a element to our list (photo ids)
  //helper method to pass down via props.
  //goes to PhotoFavButton
  //input photoId = id to add, boolean = true to add, false to remove
  const addFavourite = (photoId, isAdd) => {
    if (isAdd) {
      setListOfFavPhotos((prevElements) => [...prevElements, photoId]);
      return;
    }

    //remove photo
    setListOfFavPhotos((prevElements) =>
      prevElements.filter(id => id != photoId));
  };

  return (
    <div className='home-route'>
      <TopNavigationBar></TopNavigationBar>
      <PhotoList addFavourite={addFavourite}></PhotoList>
    </div>
  );
};

export default HomeRoute;