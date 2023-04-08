import { useState } from 'react'
import MusicPlayer from './MusicPlayer'
import MyForm from './Discover'
import ProfilePageSelector from './ProfileImage'
import { useEffect } from 'react'
import { isButtonElement } from 'react-router-dom/dist/dom'
import { Route } from 'react-router-dom'

function App() {
  const [currentSong, setCurrentSong] = useState('') // Set default song name
  const audio = new Audio('Palace.mp3')
  audio.loop = true
  const pauseMusic = () => {
    audio.pause()
  }
  const playMusic = () => {
    audio.play()
  }
  const nextSong = () => {
    if (currentSong === 'romantic') {
      setPlaying(false);
      setCurrentSong('Palace');
    } else if (currentSong === 'Palace') {
      setPlaying(false);
      setCurrentSong('8AM');
    } else if (currentSong === '8AM') {
      setPlaying(false);
      setCurrentSong('romantic');
    }
    playMusic()
  }
  interface Props{
    name: string
    password: string
  }
  

  
  return (
    <>
    
      <div style={{ height: '100px', position: 'relative' }}>
        <div className="img-wrapper" style={{ position: 'relative' }}>
          <MusicPlayer music="Palace.mp3" />
          <img className="img" src="/./images/backGround.png" alt="Image"></img>
          <img  className="img" src="/./images/8009-ferrari-formula-1.jpg" alt="Image"></img>
           <switch>

  


  <MyForm />
 
           </switch>
           
         
          
        </div>

        <h1 className="header">Project-X</h1>
        <div style={{ display: 'flex', justifyContent: 'left' }}>
          <button onClick={playMusic}>Play</button>
          <button onClick={pauseMusic}>Pause</button>
          <button  onClick={nextSong}>Next Song</button>
          
        </div>
      </div>
    </>
  )
}

export default App
function setPlaying(_arg0: boolean) {
  throw new Error('Function not implemented.')
}

