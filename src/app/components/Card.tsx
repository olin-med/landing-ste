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
      <div className="w-3/4 md:w-1/2 lg:w-1/3 bg-black rounded-lg border border-white border-opacity-25 p-5 text-white cursor-pointer shadow-[0_10px_15px_rgba(255,255,255,0.2)] pb-20">
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Card;
