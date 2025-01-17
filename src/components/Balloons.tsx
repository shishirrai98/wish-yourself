import { useEffect, useState } from 'react';
import '../styles/Balloons.css';

const BALLOON_COLORS = ['#FF1744', '#D500F9', '#2979FF', '#00E676', '#FFD600'];

const Balloons = () => {
  const [balloons, setBalloons] = useState<
    Array<{ id: number; color: string; style: any }>
  >([]);

  useEffect(() => {
    // Create initial balloons with staggered animations
    const initialBalloons = Array.from({ length: 15 }, (_, index) => ({
      id: index,
      color: BALLOON_COLORS[index % BALLOON_COLORS.length],
      style: {
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 2}s`,
        transform: `scale(${0.8 + Math.random() * 0.4})`,
      },
    }));
    setBalloons(initialBalloons);
  }, []);

  return (
    <div className='balloons-container'>
      {balloons.map((balloon) => (
        <div
          key={balloon.id}
          className='balloon'
          style={{
            backgroundColor: balloon.color,
            ...balloon.style,
          }}
        >
          <div className='balloon-string'></div>
        </div>
      ))}
    </div>
  );
};

export default Balloons;
