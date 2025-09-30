import { useState, useEffect } from 'react';

const TypingAnimation = () => {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const text = "SCARICA L'APP";
    const wrongText = "SCARICA L'ALP";
    const partialText = "SCARICA L'AL";
    
    let currentIndex = 0;
    let isTyping = true;
    let wrongAttempts = 0;
    
    const typeText = () => {
      if (isTyping) {
        if (currentIndex < wrongText.length) {
          setDisplayText(wrongText.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          // Pausa prima di cancellare
          setTimeout(() => {
            isTyping = false;
            currentIndex = wrongText.length - 1;
          }, 1000);
        }
      } else {
        if (currentIndex > partialText.length) {
          setDisplayText(partialText);
          currentIndex--;
        } else {
          // Pausa prima di ricominciare
          setTimeout(() => {
            isTyping = true;
            currentIndex = partialText.length;
          }, 500);
        }
      }
    };

    const interval = setInterval(typeText, 200);
    
    // Cursor blinking
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearInterval(interval);
      clearInterval(cursorInterval);
    };
  }, []);

  return (
    <span className="typing-animation">
      {displayText}
      <span className={`typing-cursor ${showCursor ? 'opacity-100' : 'opacity-0'}`}></span>
    </span>
  );
};

export default TypingAnimation;
