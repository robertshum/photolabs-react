import React from 'react';
import PhotoList from './components/PhotoList';
import './App.scss';

//temp remove when done
import TopicList from 'components/TopicList';

// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className="App">
      <TopicList />
    </div>
  );
};

export default App;
