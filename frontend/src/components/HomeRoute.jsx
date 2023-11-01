import React from 'react';
import PhotoList from './PhotoList';
import TopNavigationBar from './TopNavigationBar';
import '../styles/HomeRoute.scss';

const HomeRoute = () => {
  return (
    <div className='home-route'>
      <TopNavigationBar></TopNavigationBar>
      <PhotoList></PhotoList>
    </div>
  );
};

export default HomeRoute;