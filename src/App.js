import React, {useState} from 'react';
import "./styles/app.scss";
// Adding components 
import Player from './components/Player';
import Song from './components/Song';
//Import Data
import data from "./data";
import Library from './components/Library';

function App() {
  //State
  const [songs,setSongs] = useState(data());
  const [currentSong,setCurrentSong] = useState(songs[0]);
  const [isPlaying,setIsPlaying] = useState(false);

  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player currentSong={currentSong} isPlaying={isPlaying} setIsPlaying={setIsPlaying}  />
      <Library songs={songs} setCurrentSong={setCurrentSong} />
    </div>
  );
}

export default App;