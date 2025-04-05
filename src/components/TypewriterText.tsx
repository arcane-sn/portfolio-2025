
import React, { useState, useEffect } from 'react';

interface TypewriterTextProps {
  strings: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetween?: number;
}

const TypewriterText = ({
  strings,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetween = 1500
}: TypewriterTextProps) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingDelay, setTypingDelay] = useState(typingSpeed);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Current string from the array
      const i = loopNum % strings.length;
      const fullText = strings[i];

      // Set the typing speed based on whether we're deleting or typing
      setTypingDelay(isDeleting ? deletingSpeed : typingSpeed);

      if (isDeleting) {
        // If deleting, remove the last character
        setText(fullText.substring(0, text.length - 1));
      } else {
        // If typing, add the next character
        setText(fullText.substring(0, text.length + 1));
      }

      // Check if we're done typing or deleting
      if (!isDeleting && text === fullText) {
        // Start deleting after delay
        setTimeout(() => setIsDeleting(true), delayBetween);
      } else if (isDeleting && text === '') {
        // Move to next string and start typing
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    }, typingDelay);

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingDelay, strings, typingSpeed, deletingSpeed, delayBetween]);

  return (
    <span className="inline-block">
      {text}
      <span className="font-medium text-theme-yellow animate-blink">|</span>
    </span>
  );
};

export default TypewriterText;
