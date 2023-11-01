import React from "react";
import PhotoListItem from './PhotoListItem';
import photos from '../mocks/photos';
import "../styles/PhotoList.scss";

const PhotoList = (props) => {

  //Mock Data
  const sampleDataForPhotoList = photos;

  const listOfPhotos = sampleDataForPhotoList.map(item => {
    return (
      <PhotoListItem
        key={item.id}
        photoId={item.id}
        location={item.location}
        imageSource={item.urls.regular}
        name={item.user.name}
        profile={item.user.profile}
        addFavourite={props.addFavourite}
      />
    );
  });

  return (
    <ul className="photo-list">
      {listOfPhotos}
    </ul>
  );
};

export default PhotoList;
