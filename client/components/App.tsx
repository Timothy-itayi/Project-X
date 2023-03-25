import { useState } from 'react'
import MusicPlayer from './MusicPlayer'
import { useEffect } from 'react'

function App() {
  const [currentSong, setCurrentSong] = useState('romantic') // Set default song name
  const audio = new Audio('8AM')
  audio.loop = true
  const pauseMusic = () => {
    audio.pause()
  }
  const playMusic = () => {
    audio.play()
  }
  // const nextSong = () => {
  //   if (currentSong === 'romantic') {
  //     setCurrentSong('Palace')
  //   } else if (currentSong === 'Palace') {
  //     setCurrentSong('8AM')
  //   } else if (currentSong === '8AM') {
  //     setCurrentSong('romantic')
  //   }
  // }
  return (
    <>
      <div style={{ height: '100px', position: 'relative' }}>
        <div className="img-wrapper" style={{ position: 'relative' }}>
          <MusicPlayer music="Palace.mp3" />
          <img className="img" src="/./images/backGround.png" alt="Image"></img>
        </div>

        <h1 className="header">Project-X</h1>
        <div style={{ display: 'flex', justifyContent: 'left' }}>
          <button onClick={playMusic}>Play</button>
          <button onClick={pauseMusic}>Pause</button>
          {/* <button onClick={nextSong}>Next Song</button> */}
        </div>
      </div>
    </>
  )
}

export default App
