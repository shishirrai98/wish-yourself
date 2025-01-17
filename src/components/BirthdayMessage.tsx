import { useEffect, useState } from 'react';

const messages = [
  'Hey there! 👋',
  "It's your birthday!! 🎉",
  'I really wanted to do something special...',
  "Because you're special! ✨",
  "So here's a little surprise for you...",
  'Happy Birthday! 🎂',
  'May all your wishes come true! 🌟',
  'Click anywhere to replay! 🔄',
];

const BirthdayMessage = () => {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    if (!isAnimating) return;

    const timer = setInterval(() => {
      setCurrentMessage((prev) => {
        if (prev === messages.length - 1) {
          setIsAnimating(false);
          clearInterval(timer);
          return prev;
        }
        return prev + 1;
      });
    }, 2000);

    return () => clearInterval(timer);
  }, [isAnimating]);

  const handleRestart = () => {
    setCurrentMessage(0);
    setIsAnimating(true);
  };

  return (
    <div className='birthday-message' onClick={handleRestart}>
      <h2 className={isAnimating ? 'message-animate' : ''}>
        {messages[currentMessage]}
      </h2>
    </div>
  );
};

export default BirthdayMessage;
