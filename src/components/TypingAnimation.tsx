import { useState, useEffect } from 'react';

const TypingAnimation = () => {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const correctText = "SCARICA L'APP";
    const wrongText = "SCARICA L'ALP";
    const baseText = "SCARICA L'AL";
    
    let currentIndex = 0;
    let phase = 0; // 0: typing wrong, 1: deleting, 2: typing correct
    
    const typeText = () => {
      if (phase === 0) {
        // Fase 1: Scrive "SCARICA L'ALP"
        if (currentIndex < wrongText.length) {
          setDisplayText(wrongText.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          // Pausa di 300ms prima di cancellare
          setTimeout(() => {
            phase = 1;
            currentIndex = wrongText.length - 1;
          }, 300);
        }
      } else if (phase === 1) {
        // Fase 2: Cancella "LP" carattere per carattere (torna a "SCARICA L'AL")
        if (currentIndex > baseText.length) {
          setDisplayText(wrongText.slice(0, currentIndex));
          currentIndex--;
        } else {
          // Pausa breve prima di correggere
          setTimeout(() => {
            phase = 2;
            currentIndex = baseText.length;
          }, 200);
        }
      } else if (phase === 2) {
        // Fase 3: Aggiunge "PP" per completare "APP"
        if (currentIndex < correctText.length) {
          setDisplayText(correctText.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          // Animazione completata - nasconde il cursore
          setTimeout(() => {
            setIsComplete(true);
            setShowCursor(false);
          }, 1000);
        }
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
