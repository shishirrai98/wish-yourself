import { useEffect, useRef } from 'react';

interface MusicToggleProps {
  isPlaying: boolean;
  setIsPlaying: (isPlaying: boolean) => void;
}

const MusicToggle = ({ isPlaying, setIsPlaying }: MusicToggleProps) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(() => {
          // Autoplay was prevented
          setIsPlaying(false);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, setIsPlaying]);

  return (
    <div className='music-toggle'>
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? '🔇 Mute' : '🔊 Play Music'}
      </button>
      <audio ref={audioRef} src='/music/happy-birthday.mp3' loop />
    </div>
  );
};

export default MusicToggle;
