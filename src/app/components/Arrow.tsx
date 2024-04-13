'use client';
// components/ScrollToBottomArrow.tsx
import React from 'react';

const ScrollToBottomArrow: React.FC = () => {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToBottom}
      className="absolute inset-x-0 bottom-16 z-10 flex justify-center mb-10"
      aria-label="Scroll to bottom"
    >
      
        <img src="./seta.png" alt="Scroll Down" className="h-7 slow-bounce" />
    
    </button>
  );
};

export default ScrollToBottomArrow;
