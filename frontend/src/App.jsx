import React from 'react';

import PhotoListItem from './components/PhotoListItem';
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


// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className="App">
      <PhotoListItem
        
        key={item.id}
        location={item.location}
        imageSource={item.imageSource}
        userName={item.username}
        profile={item.profile} />
    </div>
  );
};

export default App;
