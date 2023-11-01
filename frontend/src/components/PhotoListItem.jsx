import React, { Fragment } from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";


const PhotoListItem = (props) => {
  return (
    <div className='photo-list__item'>
      <PhotoFavButton
        photoId={props.photoId}
        addFavourite={props.addFavourite}>

      </PhotoFavButton>
      <img className='photo-list__image' src={props.imageSource}></img>
      <div className='photo-list__user-details'>
        <img className='photo-list__user-profile' src={props.profile}></img>
        <div className='photo-list__user-details-name-location'>
          <div className='photo-list__user-info'>{props.name}</div>
          <div className='photo-list__user-location'>
            {`${props.location.city}, ${props.location.country}`}
          </div>
        </div>
      </div>

    </div>
  );
};

export default PhotoListItem;
