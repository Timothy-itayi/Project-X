import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react'
import AudioPlayer from './AudioPlayer'

interface MusicPlayerProps {
  isPlaying: boolean
  setPlaying: Dispatch<SetStateAction<boolean>>
}

function MusicPlayer({ isPlaying, setPlaying }: MusicPlayerProps) {
  const [currentSong, setCurrentSong] = useState<string>('8AM')

  const AUDIO_BASE_URL: string = '/'
  const audioRef = useRef<HTMLAudioElement>()
  const songs = ['8AM.mp3', 'Palace.mp3', 'romantic.mp3']

  const playMusic = (): void => {
    if (!audioRef.current) {
      audioRef.current = new Audio(`${AUDIO_BASE_URL}${currentSong}.mp3`)
      audioRef.current.addEventListener('ended', handleSongEnded)
      audioRef.current.load()
    }
    setPlaying(true)
    audioRef.current.play()
  }

  const handleSongEnded = (): void => {
    // play next song when current song ends
    setCurrentSong((prevSong: string) => {
      const currentIndex = songs.findIndex((song) => song !== prevSong)
      const nextIndex = (currentIndex + 1) % songs.length
      return songs[nextIndex]
    })
  }

  const pauseMusic = (): void => {
    if (audioRef.current) {
      setPlaying(false)
      audioRef.current.pause()
      audioRef.current.currentTime = 0
    }
  }

  const nextSong = (): void => {
    let newSong: string = ''
    if (currentSong === 'romantic') {
      newSong = 'Palace'
    } else if (currentSong === 'Palace') {
      newSong = '8AM'
    } else if (currentSong === '8AM') {
      newSong = 'romantic'
    }
    setCurrentSong(newSong)
    pauseMusic()
  }

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current = undefined
    }
  }, [currentSong])

  return (
    <AudioPlayer
      currentSong={currentSong}
      isPlaying={isPlaying}
      playMusic={playMusic}
      pauseMusic={pauseMusic}
      nextSong={nextSong}
    />
  )
}

export default MusicPlayer
