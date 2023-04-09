import React from 'react';

interface AudioPlayerProps {
  currentSong: string;
  isPlaying: boolean;
  playMusic: () => void;
  pauseMusic: () => void;
  nextSong: () => void;
}

function AudioPlayer(props: AudioPlayerProps) {
  const { currentSong, isPlaying, playMusic, pauseMusic, nextSong } = props;

  return (
    <div>
      <h3>Current Song: {currentSong}</h3>
      {isPlaying ? (
        <button onClick={pauseMusic}>Pause</button>
      ) : (
        <button onClick={playMusic}>Play</button>
      )}
      <button onClick={nextSong}>Next Song</button>
    </div>
  );
}

export default AudioPlayer;
