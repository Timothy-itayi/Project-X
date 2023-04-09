import { useState } from 'react'
import MusicPlayer from './MusicPlayer'

import ProfilePageSelector from './ProfileImageSelector'
import { useEffect } from 'react'
import { isButtonElement } from 'react-router-dom/dist/dom'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './MainLayout'


function App() {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  interface Props{
    name: string
    password: string
  }
  

  
  return (
    <>
    
      <div style={{ height: '100px', position: 'relative' }}>
        <div className="img-wrapper" style={{ position: 'relative' }}>
        <MusicPlayer isPlaying={isPlaying} setPlaying={setIsPlaying} />
      
          <img className="img" src="/./images/backGround.png" alt="Image"></img>
          
         
           
         
          
        </div>

        <h1 className="header">Project-X</h1>
        <div style={{ display: 'flex', justifyContent: 'left' }}>
     
        
          <ProfilePageSelector />
        </div>
      </div>
    </>
  )
}

export default App
// function setPlaying(_arg0: boolean) {
//   throw new Error('Function not implemented.')
// }
