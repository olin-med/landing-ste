// components/Card.tsx
import React from 'react';

interface CardProps {
  title: string;
  content: string;
}

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="flex flex-col items-center w-full mt-8">
      <h2 className="text-2xl text-white mb-6 playfair">{title}</h2>
      <div className="w-3/4 sm:w-1/2 lg:w-3/4 bg-black rounded-lg border border-white border-opacity-25 hover:text-shadow-white-glow transition-all duration-700 p-5 text-center text-white cursor-pointer shadow-[0_10px_15px_rgba(255,255,255,0.2)] hover:shadow-[0_20px_20px_rgba(255,255,255,0.3)] pb-20">
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Card;
