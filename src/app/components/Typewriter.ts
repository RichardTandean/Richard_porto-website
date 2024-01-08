"use client"
import React, { useEffect, useState } from 'react';

interface TypewriterProps {
  text: string;
  initialDelay?: number;
  typingSpeed?: number;
}

const Typewriter: React.FC<TypewriterProps> = ({ text, initialDelay = 0, typingSpeed = 50 }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;

    const startTyping = () => {
      const intervalId = setInterval(() => {
        setDisplayedText((prevText) => prevText + text.charAt(index));
        index += 1;

        if (index === text.length) {
          clearInterval(intervalId);
        }
      }, typingSpeed); // Adjust the speed as needed
    };

    const delayId = setTimeout(startTyping, initialDelay);

    return () => {
      clearTimeout(delayId);
    };
  }, [text, initialDelay, typingSpeed]);

  return displayedText;
};

export default Typewriter;