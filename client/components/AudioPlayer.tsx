// AudioPlayer.tsx

import React from 'react'

interface AudioPlayerProps {
  currentSong: string
  nextSong: string
  isPlaying: boolean
  playMusic: () => void
  pauseMusic: () => void
  playNextSong: (nextSong: string) => void // Updated prop type
}

function AudioPlayer({
  currentSong,
  nextSong,
  isPlaying,
  playMusic,
  pauseMusic,
  playNextSong, // Updated prop
}: AudioPlayerProps) {
  return (
    <div>
      <h3>Current Song: {currentSong}</h3>
      <h3>Next Song: {nextSong}</h3>
      <button onClick={playMusic}>Play</button>
      <button onClick={pauseMusic}>Pause</button>
      <button onClick={() => playNextSong(nextSong)}>Next Song</button>{' '}
      {/* Updated handler */}
    </div>
  )
}

export default AudioPlayer
