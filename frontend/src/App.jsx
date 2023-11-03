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
    showModal,
    selected,
    state
  } = useApplicationData();

  return (
    <div className="App">
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
        showModal={showModal}
        isFavourite={isFavourite}
        toggleFavourite={toggleFavourite}
        isThereAFavourite={isThereAFavourite()}
      />
    </div>
  );
};

export default App;
