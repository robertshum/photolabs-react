import React, { useEffect } from 'react';
import PhotoList from 'components/PhotoList';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoListItem from 'components/PhotoListItem';
import '../styles/PhotoDetailsModal.scss';

//I totally did not rip this off from Chat GPT, and I totally understand everything.
const scrollToTop = function() {
  // Get a reference to the element you want to scroll to the top
  const element = document.getElementById('photo-modal');
  // Scroll the element to the top
  if (element) {
    const duration = 500; // Duration of the scroll animation in milliseconds
    const start = element.scrollTop;
    const end = 0;

    //track the time starting now().
    const startTime = performance.now();

    //this nested function will increment the progress from 0 to 1
    //the progress % is translated into the scrollTop value.
    function scrollStep(timestamp) {
      const progress = (timestamp - startTime) / duration;
      if (progress < 1) {
        //you want to eventually progress where '(end - start) * progress' gets 
        //high enough to cancel out 'start'.
        element.scrollTop = start + (end - start) * progress;

        //recursively call scrollStep
        requestAnimationFrame(scrollStep);
      } else {
        //end the recursion, hard code the scroll to 0 (the top).
        element.scrollTop = end;
      }
    }

    //built in browser API to schedule animations.
    //executes at a rate of 60fps
    requestAnimationFrame(scrollStep);
  }
};

const PhotoDetailsModal = (props) => {

  //convert relatedPhotos to array
  const relatedPhotos = Object.values(props.photoInfo.similar_photos);

  //Smooth scroll to the top of the modal
  //Run this effect every time anytime a NEW image gets loaded.
  useEffect(() => {
    scrollToTop();
  }, [props.photoInfo]);

  return (
    <div className="photo-details-modal" id="photo-modal">

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

        // Like giving your brother a game controller so you can play together.
        // Your brother doesn't even know the controller is not connected.
        showModal={() => { }}
        {...props.photoInfo}
      />

      <div className="photo-details-modal__header">Related Photos</div>

      <div className="photo-details-modal__images">
        <PhotoList
          displayType="related"
          toggleFavourite={props.toggleFavourite}
          isFavourite={props.isFavourite}
          showModal={props.showModal}
          photos={relatedPhotos} />
      </div>

    </div>
  );
};

export default PhotoDetailsModal;
