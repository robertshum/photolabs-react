import React from 'react';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import { useApplicationData } from 'hooks/useApplicationData';
import './App.scss';

const App = () => {

  // toggleFavourite, fn to allow components to add photos.
  // isFavourite, boolean to tell if the photo is favourited.
  // isThereAFavourite, boolean to tell if Nav should 'fill' the heart.
  // showModal, fn that hides or closes the modal.
  // getPhotosById, fn call to axios to fetch photos by Topic Id.
  // selected, boolean which checks if is photo selected and favourited.
  // state, which contains:
  // photoData - array of all photos.
  // topicData - array of all topics.
  // photoInfo - photo info of selected picture (see PhotoListItem.jsx)
  // listOfFavPhotos - array of currently favourited photos.
  const {
    toggleFavourite,
    isFavourite,
    isThereAFavourite,
    showModal,
    getPhotosById,
    selected,
    state
  } = useApplicationData();

  return (
    <div className="App">
      {/* Modal is the popup that appears when user clicks a picture. */}
      {state.photoInfo &&
        <PhotoDetailsModal
          showModal={showModal}
          photoInfo={state.photoInfo}
          isFavourite={isFavourite}
          selected={selected}
          toggleFavourite={toggleFavourite}
        />}
      <HomeRoute
        photos={state.photoData}
        topics={state.topicData}
        getPhotosById={getPhotosById}
        showModal={showModal}
        isFavourite={isFavourite}
        toggleFavourite={toggleFavourite}
        isThereAFavourite={isThereAFavourite()}
      />
    </div>
  );
};

export default App;
