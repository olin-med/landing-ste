'use client'
import { useRouter } from 'next/navigation';
import type { NextPage } from 'next';
import Card from './components/Card';
import Arrow from './components/Arrow';

const Home: NextPage = () => {
  const router = useRouter();

  const cardsData = [
    {
      title: "EBOOK",
      content: "This is the content of card 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      route: "/ebook"
    },
    {
      title: "CURSO",
      content: "This is the content of card 2. Vestibulum in neque et nisl consectetur convallis.",
      route: "/curso"
    },
    {
      title: "MENTORIA",
      content: "This is the content of card 3. Vestibulum in neque et nisl consectetur convallis.",
      route: "/mentoria"
    }
  ];


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
            <p className="text-sm sm:text-lg mt-10 sm:mt-20 text-center text-white cursor-default p-4 sm:p-8">
              O seu guia completo para a Criação de Conteúdo Digital!
            </p>
        </div>

      </div>
      <div className="bg-black flex flex-col items-center w-full py- gap-y-2 sm:gap-y-5 md:gap-y-10 pb-10">
        {cardsData.map((card, index) => (
          <div onClick={() => router.push(card.route)} key={index}>
            <Card title={card.title} content={card.content}/>
          </div>
        ))}
      </div>

      <Arrow />
    </div>
  );
};

export default Home;



