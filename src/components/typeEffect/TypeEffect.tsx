'use client';

import { useEffect, useState } from 'react';
import style from './typeEffect.module.scss';

interface Prop {
  textAI: string;
}

function TypeEffect({ textAI }: Prop): JSX.Element {
  const [displayText, setDisplayText] = useState<string>('');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [showCursor, setShowCursor] = useState<boolean>(true);

  useEffect(() => {
    if (!textAI.length) return;

    const intervalTime: NodeJS.Timer = setInterval(() => {
      if (currentIndex >= textAI.length) {
        clearInterval(intervalTime);
        setShowCursor(false);
        return;
      }

      const nextIndex: number = textAI.indexOf(' ', currentIndex + 1);
      if (nextIndex < 0) {
        setDisplayText(textAI);
        setCurrentIndex(textAI.length);
        return;
      }
      setDisplayText(textAI.slice(0, nextIndex));
      setCurrentIndex(currentIndex + 1);
    }, 30);

    return () => {
      clearInterval(intervalTime);
    };
  }, [textAI, currentIndex]);

  return <p className={showCursor ? style.cursor : ''}>{displayText}</p>;
}

export default TypeEffect;
