import React from "react";
import PhotoListItem from './PhotoListItem';
import photos from '../mocks/photos';
import "../styles/PhotoList.scss";

//Mock Data
const sampleDataForPhotoList = photos;

const listOfPhotos = sampleDataForPhotoList.map(item => {
  return (
    <PhotoListItem
      key={item.id}
      location={item.location}
      imageSource={item.urls.regular}
      name={item.user.name}
      profile={item.user.profile}
    />
  );
});

const PhotoList = () => {
  return (
    <ul className="photo-list">
      {listOfPhotos}
    </ul>
  );
};

export default PhotoList;
