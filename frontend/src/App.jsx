import React from 'react';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import { useApplicationData } from 'hooks/useApplicationData';
import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {

  const {
    addFavourite,
    isThereAHeart,
    photoInfo,
    showModal
  } = useApplicationData();

  return (
    <div className="App">
      {photoInfo &&
        <PhotoDetailsModal
          showModal={showModal}
          photoInfo={photoInfo}
          addFavourite={addFavourite}
        />}
      <HomeRoute
        showModal={showModal}
        isThereAFavourite={isThereAHeart}
        addFavourite={addFavourite}
      />
    </div>
  );
};

const isThereAFavourite = (list) => {
  return list.length !== 0;
};

export default App;
