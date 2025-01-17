interface MusicPlayerProps {
  isPlaying: boolean;
}

const MusicPlayer = ({ isPlaying }: MusicPlayerProps) => {
  return (
    <audio className='song' loop autoPlay={isPlaying}>
      <source src='/music/hbd.mp3' type='audio/mp3' />
      Your browser isn't invited for super fun audio time.
    </audio>
  );
};

export default MusicPlayer;
