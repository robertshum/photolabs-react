import React from 'react';
import PhotoList from './components/PhotoList';
import './App.scss';

//temp remove when done
import TopNavigationBar from 'components/TopNavigationBar';

// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className="App">
      <TopNavigationBar />
    </div>
  );
};

export default App;
