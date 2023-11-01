import React from 'react';

import PhotoListItem from './components/PhotoListItem';

//TEMP CSS
import "./styles/PhotoList.scss";
import './App.scss';

const item = {
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
};

const tempList = new Array(3).fill(
  <PhotoListItem
    key={item.id}
    location={item.location}
    imageSource={item.imageSource}
    userName={item.username}
    profile={item.profile}
  />
);

// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    //Move photolist to actual list component.
    <div className="App photo-list">
      {tempList}
    </div>
  );
};

export default App;
