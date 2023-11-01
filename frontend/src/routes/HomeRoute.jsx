import React, { useState } from 'react';
import PhotoList from '../components/PhotoList';
import TopNavigationBar from '../components/TopNavigationBar';
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

  //on render, this will give us an updated 'heart' value
  const isThereAHeart = isThereAFavourite(listOfFavPhotos);

  return (
    <div className='home-route'>
      <TopNavigationBar
        isThereAFavourite={isThereAHeart}
      />
      <PhotoList addFavourite={addFavourite}></PhotoList>
    </div>
  );
};

const isThereAFavourite = (list) => {
  return list.length !== 0;
};

export default HomeRoute;