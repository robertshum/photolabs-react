import React from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";
import '../styles/PhotoDetailsModal.scss';

const PhotoListItem = (props) => {

  //we populate the photoInfo here, because it could be potentially sent back to the user to render (in the modal).  

  //Alternatively, we could send back a photo ID and construct the object in useAppData but that is expensive because we would have to do an array lookup everytime a user clicks on a photo.
  const photoInfo = {
    photoId: props.photoId,
    imageSourceFull: props.imageSourceFull,
    imageSourceRegular: props.imageSourceRegular,
    profile: props.profile,
    name: props.name,
    location:
    {
      city: props.location.city,
      country: props.location.country
    },
    similar_photos: props.similar_photos
  };

  //display type.
  const displayList = props.displayType === "list";
  const displayRelated = props.displayType === "related";
  const displayModal = props.displayType === "modal";

  let itemClassName = '';

  //if it's shown as a list'
  //display as normal, with the border
  if (displayList) {
    itemClassName = 'photo-list__item';
  }

  //if it's shown as a 'related'
  //display as normal, with the border, with specialized margins
  if (displayRelated) {
    itemClassName = 'photo-details-modal_related-image';
  }

  //if it's the main image (modal)
  //show with no borders
  if (displayModal) {
    itemClassName = 'photo-details-modal_item';
  }

  return (
    <div className={itemClassName}>
      {/* toggle on/off favourite icon. */}
      <PhotoFavButton
        toggleFavourite={props.toggleFavourite}
        selected={props.selected}
      />

      <div onClick={() => props.showModal(photoInfo)}>

        {/* Display the image as a basic list on front page */}
        {displayList && <img
          className='photo-list__image'
          src={photoInfo.imageSourceRegular}></img>}

        {/* Display the image as related photos in modal */}
        {displayRelated && <img
          className='photo-list__image'
          src={photoInfo.imageSourceRegular}></img>}

        {/* Display the image as the main photo in modal.  Full size! */}
        {displayModal && <img
          className='photo-details-modal__image'
          src={photoInfo.imageSourceFull}></img>}
      </div>

      <div className='photo-list__user-details'>
        <img className='photo-list__user-profile' src={photoInfo.profile}></img>
        <div className='photo-list__user-details-name-location'>
          <div className='photo-list__user-info'>{photoInfo.name}</div>
          <div className='photo-list__user-location'>
            {`${photoInfo.location.city}, ${photoInfo.location.country}`}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
