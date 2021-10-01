import React from 'react'
import { playAudio } from '../util';

const LibrarySong = ({song , setCurrentSong ,songs ,id , audioRef,isPlaying,setSongs}) => {
    //Handler
    const songSelectHandler = () => {
        //const selectedSong = songs.filter((state) => state.id === id)
        //setCurrentSong(selectedSong[0]);
        setCurrentSong(song);

        const newSong = songs.map((song) => {
            if(song.id === id){
                return{
                    ...song,
                    active:true,
                };
            }else{
                return{
                    ...song,
                    active:false,
                };
            }
        });
        setSongs(newSong);
        playAudio(isPlaying,audioRef);
        audioRef.current.play();
    };

    return (
        <div className={`library-song ${song.active ? "selected" : "" }`} onClick={songSelectHandler} >
            <img alt={song.name} src={song.cover}></img>
            <div className="song-description">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    );
};

export default LibrarySong;