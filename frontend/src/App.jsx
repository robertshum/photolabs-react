import React from 'react';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import { useApplicationData } from 'hooks/useApplicationData';
import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {

  const {
    toggleFavourite,
    isFavourite,
    isThereAFavourite,
    photoInfo,
    showModal
  } = useApplicationData();

  const isAPhotoFavourited = isThereAFavourite();
  const selected = photoInfo && isFavourite(photoInfo.photoId);

  return (
    <div className="App">
      {photoInfo &&
        <PhotoDetailsModal
          showModal={showModal}
          photoInfo={photoInfo}
          isFavourite={isFavourite}
          selected={selected}
          toggleFavourite={toggleFavourite}
        />}
      <HomeRoute
        showModal={showModal}
        isFavourite={isFavourite}
        toggleFavourite={toggleFavourite}
        isThereAFavourite={isAPhotoFavourited}
      />
    </div>
  );
};

export default App;
