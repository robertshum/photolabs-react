import React, { useState } from 'react';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {

  const [isShowModal, setShowModal] = useState(false);

  const showModal = (isShow) => {
    setShowModal(isShow);
  };

  return (
    <div className="App">
      {isShowModal && <PhotoDetailsModal />}
      <HomeRoute showModal={showModal} />
    </div>
  );
};

export default App;
