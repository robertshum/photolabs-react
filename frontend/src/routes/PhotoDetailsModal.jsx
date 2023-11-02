import React from 'react';
import PhotoList from 'components/PhotoList';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoListItem from 'components/PhotoListItem';
import '../styles/PhotoDetailsModal.scss';

const PhotoDetailsModal = (props) => {

  const handleClick = () => {

    const showModal = props.showModal;
    showModal(null);
  };

  //convert relatedPhotos to array
  const relatedPhotos = Object.values(props.photoInfo.relatedPhotos);

  return (
    <div className="photo-details-modal">
      <button
        className="photo-details-modal__close-button"
        onClick={handleClick}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <PhotoListItem
        displayType="modal"
        addFavourite={props.addFavourite}
        {...props.photoInfo} />
      <div className="photo-details-modal__header">Related Photos</div>
      <div className="photo-details-modal__images">
        <PhotoList
          displayType="related"
          addFavourite={props.addFavourite}
          photos={relatedPhotos} />
      </div>

    </div>
  );
};

export default PhotoDetailsModal;
