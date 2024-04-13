// components/Card.tsx
import React from 'react';

interface CardProps {
  title: string;
  content: string;
}

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="w-11/12 md:w-2/3 lg:w-1/2 bg-black rounded-lg border border-white border-opacity-10 p-5 text-white shadow-[0_10px_15px_rgba(255,255,255,0.2)]">
      <h2 className="text-2xl font-bold text-center">{title}</h2>
      <p className="mt-2">{content}</p>
    </div>
  );
};

export default Card;


