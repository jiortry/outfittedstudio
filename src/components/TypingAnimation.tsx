import { useState, useEffect } from 'react';

type Language = "it" | "en";

interface TypingAnimationProps {
  language?: Language;
}

const TypingAnimation = ({ language = "it" }: TypingAnimationProps) => {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [isComplete, setIsComplete] = useState(false);
  const [animationPhase, setAnimationPhase] = useState<'typing' | 'error' | 'correcting' | 'retyping' | 'done'>('typing');

  useEffect(() => {
    const correctText = language === "it" ? "SCARICA L'APP" : "DOWNLOAD APP";
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    
    // Genera una posizione casuale per l'errore (escludendo la prima lettera)
    const errorPosition = Math.floor(Math.random() * (correctText.length - 1)) + 1;
    const wrongLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
    
    // Crea il testo con l'errore
    const textWithError = correctText.slice(0, errorPosition) + wrongLetter + correctText.slice(errorPosition + 1);
    
    let currentIndex = 0;
    let interval: NodeJS.Timeout;
    let cursorInterval: NodeJS.Timeout;
    
    const startTyping = () => {
      interval = setInterval(() => {
        if (currentIndex < textWithError.length) {
          setDisplayText(textWithError.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          // Errore completato, inizia la correzione dopo una pausa
          clearInterval(interval);
          setTimeout(() => {
            setAnimationPhase('correcting');
            startCorrecting();
          }, 1000);
        }
      }, 150);
    };
    
    const startCorrecting = () => {
      // Cancella caratteri dalla fine fino alla posizione dell'errore
      let deleteIndex = textWithError.length - 1;
      
      const deleteInterval = setInterval(() => {
        if (deleteIndex >= errorPosition) {
          setDisplayText(textWithError.slice(0, deleteIndex));
          deleteIndex--;
        } else {
          // Inizia a riscrivere correttamente
          clearInterval(deleteInterval);
          setAnimationPhase('retyping');
          startRetyping();
        }
      }, 100);
    };
    
    const startRetyping = () => {
      let retypeIndex = errorPosition;
      
      const retypeInterval = setInterval(() => {
        if (retypeIndex < correctText.length) {
          setDisplayText(correctText.slice(0, retypeIndex + 1));
          retypeIndex++;
        } else {
          // Animazione completata
          clearInterval(retypeInterval);
          setAnimationPhase('done');
          setTimeout(() => {
            setIsComplete(true);
            setShowCursor(false);
          }, 1000);
        }
      }, 150);
    };
    
    // Cursor blinking
    cursorInterval = setInterval(() => {
      if (!isComplete) {
        setShowCursor(prev => !prev);
      }
    }, 500);
    
    // Avvia l'animazione
    startTyping();

    return () => {
      if (interval) clearInterval(interval);
      if (cursorInterval) clearInterval(cursorInterval);
    };
  }, [language]);

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
