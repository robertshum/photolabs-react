import React, { useState } from 'react';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {
  
  const [photoInfo, setPhotoInfo] = useState(null);

  const showModal = (photoInfo) => {
    photoInfo === null ? setPhotoInfo(null) : setPhotoInfo(photoInfo);
  };

  return (
    <div className="App">
      {photoInfo &&
        <PhotoDetailsModal
          showModal={showModal}
          photoInfo={photoInfo}
        />}
      <HomeRoute showModal={showModal} />
    </div>
  );
};

export default App;
