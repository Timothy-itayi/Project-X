import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import AudioPlayer from './AudioPlayer';

interface MusicPlayerProps {
  isPlaying: boolean;
  setPlaying: Dispatch<SetStateAction<boolean>>;
}

function MusicPlayer({ isPlaying, setPlaying }: MusicPlayerProps) {
  const [currentSong, setCurrentSong] = useState<string>('8AM');
  const AUDIO_BASE_URL: string = '/';
  const audioRef = useRef<HTMLAudioElement>();

  const playMusic = (): void => {
    if (!audioRef.current) {
      audioRef.current = new Audio(`${AUDIO_BASE_URL}${currentSong}.mp3`);
      audioRef.current.load();
    }
    setPlaying(true);
    audioRef.current.play();
  };

  const pauseMusic = (): void => {
    if (audioRef.current) {
      setPlaying(false);
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  const nextSong = (): void => {
    let newSong: string = '';
    if (currentSong === 'romantic') {
      newSong = 'Palace';
    } else if (currentSong === 'Palace') {
      newSong = '8AM';
    } else if (currentSong === '8AM') {
      newSong = 'romantic';
    }
    setCurrentSong(newSong);
    pauseMusic();
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = undefined;
    }
  }, [currentSong]);

  return (
    <AudioPlayer
      currentSong={currentSong}
      isPlaying={isPlaying}
      playMusic={playMusic}
      pauseMusic={pauseMusic}
      nextSong={nextSong}
    />
  );
}

export default MusicPlayer
