import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import React, { useEffect } from 'react'

function MusicPlayer({ music = '' }) {


  const audio = new Audio('/8AM.mp3')
  audio.loop = true

  useEffect(() => {
    console.log('MusicPlayer mounted')
    audio.play()

    return () => {
      audio.pause()
      audio.currentTime = 0
      console.log('MusicPlayer unmounted')
    }
  }, [audio])

  return null
}

export default MusicPlayer
