import React from "react";
import PhotoListItem from './PhotoListItem';
import "../styles/PhotoList.scss";

const PhotoList = (props) => {

  //display type.
  const displayRelated = props.displayType === "related";

  //map over the photos and create an item
  const listOfPhotos = props.photos.map(item => {

    const selected = props.isFavourite(item.id);

    return (
      <PhotoListItem
        //from the DB
        key={item.id}
        photoId={item.id}
        location={item.location}
        imageSourceRegular={item.urls.regular}
        imageSourceFull={item.urls.full}
        name={item.user.name}
        profile={item.user.profile}
        similar_photos={item.similar_photos}

        // from props
        showModal={props.showModal}
        displayType={props.displayType}
        toggleFavourite={() => props.toggleFavourite(item.id)}
        selected={selected}
      />
    );
  });

  return (
    <ul className={displayRelated ? "similar-photos" : "photo-list"}>
      {listOfPhotos}
    </ul>
  );
};

export default PhotoList;
