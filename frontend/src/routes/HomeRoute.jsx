import React, { useState } from 'react';
import PhotoList from '../components/PhotoList';
import TopNavigationBar from '../components/TopNavigationBar';
import photos from '../mocks/photos';
import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {

  const [listOfFavPhotos, setListOfFavPhotos] = useState([]);

  //adds a element to our list (photo ids)
  //removes if it's on the list
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

  return (
    <div className='home-route'>
      <TopNavigationBar
        isThereAFavourite={isThereAHeart}
      />
      <PhotoList
        photos={photos}
        showModal={props.showModal}
        displayType="list"
        addFavourite={addFavourite}></PhotoList>
    </div>
  );
};

const isThereAFavourite = (list) => {
  return list.length !== 0;
};

export default HomeRoute;