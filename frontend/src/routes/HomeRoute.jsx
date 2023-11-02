import React, { useState } from 'react';
import PhotoList from '../components/PhotoList';
import TopNavigationBar from '../components/TopNavigationBar';
import photos from '../mocks/photos';
import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {

  return (
    <div className='home-route'>
      <TopNavigationBar
        isThereAFavourite={props.isThereAFavourite}
      />
      <PhotoList
        photos={photos}
        showModal={props.showModal}
        displayType="list"
        addFavourite={props.addFavourite}>
      </PhotoList>
    </div>
  );
};

export default HomeRoute;