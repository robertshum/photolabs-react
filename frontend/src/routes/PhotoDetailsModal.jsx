import React from 'react';
import PhotoList from 'components/PhotoList';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoListItem from 'components/PhotoListItem';
import '../styles/PhotoDetailsModal.scss';

const PhotoDetailsModal = (props) => {

  //convert relatedPhotos to array
  const relatedPhotos = Object.values(props.photoInfo.similar_photos);

  return (
    <div className="photo-details-modal">

      <button
        className="photo-details-modal__close-button"
        onClick={() => props.showModal(null)}>
        <img src={closeSymbol} alt="close symbol" />
      </button>

      <PhotoListItem
        displayType="modal"
        // Don't get mad, I can't lift this up to parent because we need to pass in different props.toggleFavourite compared to the photo list below!
        toggleFavourite={() => props.toggleFavourite(props.photoInfo.photoId)}
        selected={props.selected}
        {...props.photoInfo}
      />

      <div className="photo-details-modal__header">Related Photos</div>

      <div className="photo-details-modal__images">
        <PhotoList
          displayType="related"
          toggleFavourite={props.toggleFavourite}
          isFavourite={props.isFavourite}
          photos={relatedPhotos} />
      </div>

    </div>
  );
};

export default PhotoDetailsModal;
