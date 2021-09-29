import React from 'react';
import "./styles/app.scss";
// Adding components 
import Player from './components/Player';
import Song from './components/Song';
//Import Data
import data from "./data";

function App() {
  return (
    <div className="App">
      <Song/>
      <Player/>
    </div>
  );
}

export default App;