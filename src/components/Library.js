import React from 'react';
import LibrarySong from './LibrarySong';

function Library({songs , setCurrentSong,audioRef,isPlaying, setSongs}) {
    return (
        <div className="library">
            <h2>Library</h2>
            <div className="library-songs">
                {songs.map((song) => (
                    <LibrarySong setSongs={setSongs} isPlaying={isPlaying} audioRef={audioRef} key={song.id} id={song.id} songs={songs} song={song} setCurrentSong={setCurrentSong} />
                ))}
            </div>
        </div>
    );
};

export default Library;
