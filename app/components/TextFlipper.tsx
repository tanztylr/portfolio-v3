'use client';

import { useState, useEffect } from 'react';

interface TextFlipperProps {
  words: string[];
  interval?: number;
}

export default function TextFlipper({ words, interval = 3000 }: TextFlipperProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (words.length <= 1) return;

    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, interval);

    return () => clearInterval(timer);
  }, [words, interval]);

  return (
    <span className="inline-block transition-opacity duration-300">
      {words[index]}
    </span>
  );
}
