import React from 'react';
import '../styles/TopNavigationBar.scss';
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = (props) => {

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={props.topics} getPhotosById={props.getPhotosById}></TopicList>
      {/* Shows a badge in Nav if there is ANY favourited item */}
      <FavBadge
        isThereAFavourite={props.isThereAFavourite}
      />
    </div>
  );
};

export default TopNavigation;