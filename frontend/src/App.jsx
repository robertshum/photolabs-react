import React, { useState } from 'react';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {

  const [photoInfo, setPhotoInfo] = useState(null);
  const [listOfFavPhotos, setListOfFavPhotos] = useState([]);

  //adds a element to our list (photo ids)
  //removes if it's on the list
  const addFavourite = (photoId) => {

    if (listOfFavPhotos.includes(photoId)) {

      //remove
      setListOfFavPhotos((prevElements) =>
        prevElements.filter(id => id != photoId));
      return;
    }

    //add
    setListOfFavPhotos((prevElements) => [...prevElements, photoId]);
  };

  //on render, this will give us an updated 'heart' value
  const isThereAHeart = isThereAFavourite(listOfFavPhotos);

  const showModal = (photoInfo) => {
    photoInfo === null ? setPhotoInfo(null) : setPhotoInfo(photoInfo);
  };

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
