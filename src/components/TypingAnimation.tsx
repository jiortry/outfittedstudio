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
    let phase = 0; // 0: typing wrong, 1: deleting L, 2: deleting P, 3: typing first P, 4: typing second P
    
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
        // Fase 2: Cancella "P" (torna a "SCARICA L'AL")
        if (currentIndex > baseText.length) {
          setDisplayText(wrongText.slice(0, currentIndex));
          currentIndex--;
        } else {
          // Pausa breve prima di cancellare "L"
          setTimeout(() => {
            phase = 2;
            currentIndex = baseText.length - 1;
          }, 150);
        }
      } else if (phase === 2) {
        // Fase 3: Cancella "L" (torna a "SCARICA L'A")
        if (currentIndex > baseText.length - 1) {
          setDisplayText(baseText.slice(0, currentIndex));
          currentIndex--;
        } else {
          // Pausa breve prima di scrivere primo "P"
          setTimeout(() => {
            phase = 3;
            currentIndex = baseText.length - 1;
          }, 150);
        }
      } else if (phase === 3) {
        // Fase 4: Scrive primo "P" (diventa "SCARICA L'AP")
        if (currentIndex < baseText.length) {
          setDisplayText(baseText.slice(0, currentIndex + 1) + "P");
          currentIndex++;
        } else {
          // Pausa breve prima di scrivere secondo "P"
          setTimeout(() => {
            phase = 4;
            currentIndex = baseText.length;
          }, 150);
        }
      } else if (phase === 4) {
        // Fase 5: Scrive secondo "P" (completa "SCARICA L'APP")
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
