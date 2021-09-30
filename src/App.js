import React, {useState,useRef} from 'react';
import "./styles/app.scss";
// Adding components 
import Player from './components/Player';
import Song from './components/Song';
//Import Data
import data from "./data";
import Library from './components/Library';

function App() {
  //Ref
  const audioRef = useRef(null);
  //State
  const [songs,setSongs] = useState(data());
  const [currentSong,setCurrentSong] = useState(songs[0]);
  const [isPlaying,setIsPlaying] = useState(false);
  
  const [songInfo,setSongInfo] = useState({
    currentTime: 0,
    duration:0,
  });
  
  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({...setSongInfo,currentTime:current , duration:duration});
};

  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player songInfo={songInfo}  audioRef={audioRef} currentSong={currentSong} isPlaying={isPlaying} setIsPlaying={setIsPlaying}  />
      <Library isPlaying={isPlaying} audioRef={audioRef} songs={songs} setSongInfo={setSongInfo} setCurrentSong={setCurrentSong} />
      <audio onLoadedMetadata={timeUpdateHandler} onTimeUpdate={timeUpdateHandler} ref={audioRef} src={currentSong.audio}></audio>
    </div>
  );
}

export default App;