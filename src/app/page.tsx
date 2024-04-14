'use client';
import { useEffect, useRef } from 'react';
import { throttle } from 'lodash';
import type { NextPage } from 'next';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';
import Card from './components/Card';
import Arrow from './components/Arrow';

gsap.registerPlugin(ScrollToPlugin);

const Home: NextPage = () => {
  const cardsData = [
    {
      title: "EBOOK",
      content: "This is the content of card 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      title: "CURSO",
      content: "This is the content of card 2. Vestibulum in neque et nisl consectetur convallis."
    },
    {
      title: "MENTORIA",
      content: "This is the content of card 3. Vestibulum in neque et nisl consectetur convallis."
    }
  ];

  const lastScrollTop = useRef(0);

  useEffect(() => {
    lastScrollTop.current = window.scrollY;
    const handleScroll = () => {
      const currentScrollTop = window.scrollY;
      
      if (currentScrollTop > lastScrollTop.current) {
        gsap.to(window, {
          duration: 3,
          scrollTo: {y: document.body.scrollHeight, autoKill: false}
        });
      } else if (currentScrollTop < lastScrollTop.current) {
        gsap.to(window, {
          duration: 2,
          scrollTo: {y: 0, autoKill: false}
        });
      }
      lastScrollTop.current = currentScrollTop;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="relative w-full bg-black overflow-hidden image-background">
        <img 
          src="./background.jpg" 
          alt="Background" 
          className="w-full object-cover object-center" 
          style={{ height: 'calc(100vh - 6rem)', objectPosition: '50% 35%', filter: 'grayscale(0%)'  }}
        />
        <div className="absolute inset-0 flex flex-col flex-row items-center justify-center min-h-screen">
            <h1 className="text-4xl sm:text-8xl text-center text-white playfair cursor-default">
              Arte da Influência
            </h1>
            <p className="text-sm sm:text-lg mt-10 sm:mt-20 text-center text-white cursor-default">
              O seu guia completo para a Criação de Conteúdo Digital!
            </p>
        </div>

      </div>
      <div className="bg-black flex flex-col items-center w-full py- gap-y-2 sm:gap-y-5 md:gap-y-10 pb-10">
        {cardsData.map((card, index) => (
          <Card key={index} title={card.title} content={card.content}/>
        ))}
      </div>

      <Arrow />
    </div>
  );
};

export default Home;



