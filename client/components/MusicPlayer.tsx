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
  const [nextSong, setNextSong] = useState<string>('Palace')

  const AUDIO_BASE_URL: string = '/'
  const audioRef = useRef<HTMLAudioElement>()
  const songs = ['8AM', 'Palace', 'romantic']

  const playMusic = (): void => {
    if (!audioRef.current) {
      audioRef.current = new Audio(`${AUDIO_BASE_URL}${currentSong}.mp3`)
      audioRef.current.addEventListener('ended', handleSongEnded)
      audioRef.current.load()
    }
    setPlaying(true)
    audioRef.current.play()
    console.log(`Playing: ${currentSong}`)
  }

  const handleSongEnded = (): void => {
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0

      setCurrentSong((prevSong: string) => {
        const currentIndex = songs.findIndex((song) => song === prevSong)
        const nextIndex = currentIndex % songs.length
        const nextSong = songs[nextIndex]
        setNextSong(nextSong)
        audioRef.current = new Audio(`${AUDIO_BASE_URL}${nextSong}.mp3`)
        audioRef.current.addEventListener('ended', handleSongEnded)
        if (isPlaying) {
          playMusic()
          audioRef.current.play()
        }
        return nextSong
      })
    }
  }

  const pauseMusic = (): void => {
    if (audioRef.current) {
      setPlaying(false)
      audioRef.current.pause()
      audioRef.current.currentTime = 0
    }
    console.log(`Paused: ${currentSong}`)
  }

  const playNextSong = (nextSong: string): void => {
    setCurrentSong(nextSong)
  }

  return (
    <div>
      <h1>Music Player</h1>
      <AudioPlayer
        currentSong={currentSong}
        nextSong={nextSong}
        isPlaying={isPlaying}
        playMusic={playMusic}
        pauseMusic={pauseMusic}
        playNextSong={playNextSong}
      />
    </div>
  )
}

export default MusicPlayer

// import React, {
//   Dispatch,
//   SetStateAction,
//   useEffect,
//   useRef,
//   useState,
// } from 'react'
// import AudioPlayer from './AudioPlayer'

// interface MusicPlayerProps {
//   isPlaying: boolean
//   setPlaying: Dispatch<SetStateAction<boolean>>
// }

// function MusicPlayer({ isPlaying, setPlaying }: MusicPlayerProps) {
//   const [currentSong, setCurrentSong] = useState<string>('8AM')

//   const AUDIO_BASE_URL: string = '/'
//   const audioRef = useRef<HTMLAudioElement>()
//   const songs = ['8AM', 'Palace', 'romantic']

//   const playMusic = (): void => {
//     if (!audioRef.current) {
//       audioRef.current = new Audio(`${AUDIO_BASE_URL}${currentSong}.mp3`)
//       audioRef.current.addEventListener('ended', handleSongEnded)
//       audioRef.current.load()
//     }
//     setPlaying(true)
//     audioRef.current.play()
//     console.log(`Playing: ${currentSong}`) // Add console log for song play
//   }

//   const handleSongEnded = (): void => {
//     if (audioRef.current) {
//       // Pause the current audio
//       audioRef.current.pause()
//       audioRef.current.currentTime = 0

//       setCurrentSong((prevSong: string) => {
//         const currentIndex = songs.findIndex((song) => song === prevSong)
//         const nextIndex = (currentIndex + 1) % songs.length
//         const nextSong = songs[nextIndex]
//         audioRef.current = new Audio(`${AUDIO_BASE_URL}${nextSong}.mp3`)
//         audioRef.current.addEventListener('ended', handleSongEnded)
//         if (isPlaying) {
//           playMusic()
//           audioRef.current.play()
//           console.log(`Next Song: ${nextSong}`) // Add console log for next song play
//         }
//         return nextSong
//       })
//     }
//   }

//   const pauseMusic = (): void => {
//     if (audioRef.current) {
//       setPlaying(false)
//       audioRef.current.pause()
//       audioRef.current.currentTime = 0
//     }
//     console.log(`Paused: ${currentSong}`)
//   }

//   const nextSong = (): void => {
//     if (audioRef.current) {
//       audioRef.current.pause()
//       audioRef.current.currentTime = 0
//     }
//     let newSong: string = ''
//     if (currentSong === 'romantic') {
//       newSong = 'Palace'
//     } else if (currentSong === 'Palace') {
//       newSong = '8AM'
//     } else if (currentSong === '8AM') {
//       newSong = 'romantic'
//     }
//     setCurrentSong(newSong)
//   }

//   useEffect(() => {
//     if (audioRef.current) {
//       audioRef.current.pause()
//       audioRef.current = undefined
//     }
//   }, [currentSong])

//   // console.log(`Current Song: ${currentSong}`) // Add console log for current song

//   return (
//     <AudioPlayer
//       currentSong={currentSong}
//       isPlaying={isPlaying}
//       playMusic={playMusic}
//       pauseMusic={pauseMusic}
//       nextSong={nextSong}
//     />
//   )
// }

// export default MusicPlayer
