'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const phases = [
  "“WHAT IF?”",
  "“LET’S PLAN IT.”",
  "“IT’S LIVE.”"
];

export default function TextFlipper() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % phases.length);
    }, 2200);
    return () => clearInterval(timer);
  }, []);

  return (
    
      
        
          {phases[index]}
        
      
    
  );
}
