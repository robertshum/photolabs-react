import React from "react";
import PhotoListItem from './PhotoListItem';
import "../styles/PhotoList.scss";

const PhotoList = (props) => {

  const listOfPhotos = props.photos.map(item => {
    return (
      <PhotoListItem
        //from the item (mock or DB)
        key={item.id}
        photoId={item.id}
        location={item.location}
        imageSourceRegular={item.urls.regular}
        imageSourceFull={item.urls.full}
        name={item.user.name}
        profile={item.user.profile}
        relatedPhotos={item.similar_photos}

        // from props
        addFavourite={props.addFavourite}
        showModal={props.showModal}
        displayType={props.displayType}
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
