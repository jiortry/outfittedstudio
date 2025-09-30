import { useState, useEffect } from 'react';

const TypingAnimation = () => {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const text = "SCARICA L'APP";
    let currentIndex = 0;
    
    const typeText = () => {
      if (currentIndex < text.length) {
        setDisplayText(text.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        // Animazione completata - nasconde il cursore
        setTimeout(() => {
          setIsComplete(true);
          setShowCursor(false);
        }, 1000);
      }
    };

    const interval = setInterval(typeText, 150);
    
    // Cursor blinking solo se non completato
    const cursorInterval = setInterval(() => {
      if (!isComplete) {
        setShowCursor(prev => !prev);
      }
    }, 500);

    return () => {
      clearInterval(interval);
      clearInterval(cursorInterval);
    };
  }, []); // Rimuovo isComplete dalla dependency array per evitare loop infiniti

  return (
    <span className="typing-animation">
      {displayText}
      {!isComplete && (
        <span className={`typing-cursor ${showCursor ? 'opacity-100' : 'opacity-0'}`}></span>
      )}
    </span>
  );
};

export default TypingAnimation;
