import React from 'react';
import PhotoList from '../components/PhotoList';
import TopNavigationBar from '../components/TopNavigationBar';
import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {

  return (
    <div className='home-route'>
      <TopNavigationBar
        topics={props.topics}
        isThereAFavourite={props.isThereAFavourite}
        getPhotosById={props.getPhotosById}
      />
      <PhotoList
        photos={props.photos}
        showModal={props.showModal}
        displayType="list"
        toggleFavourite={props.toggleFavourite}
        isFavourite={props.isFavourite}>
      </PhotoList>
    </div>
  );
};

export default HomeRoute;