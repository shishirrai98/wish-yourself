import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import BirthdayContainer from './components/BirthdayContainer';
import MusicPlayer from './components/MusicPlayer';
import './styles/App.css';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    Swal.fire({
      title: 'Do you want to play music in the background?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.isConfirmed) {
        setIsPlaying(true);
      }
      setIsVisible(true);
    });
  }, []);

  return (
    <>
      <MusicPlayer isPlaying={isPlaying} />
      <div className={`container ${isVisible ? 'visible' : ''}`}>
        <BirthdayContainer />
        {/* <Balloons /> */}
      </div>
    </>
  );
}

export default App;
