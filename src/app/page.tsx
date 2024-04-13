// pages/index.tsx
import type { NextPage } from 'next';
import Card from './components/Card';

const Home: NextPage = () => {
  const cardsData = [
    {
      title: "Ebook",
      content: "This is the content of card 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      title: "Curso",
      content: "This is the content of card 2. Vestibulum in neque et nisl consectetur convallis."
    },
    {
      title: "Mentoria",
      content: "This is the content of card 3. Vestibulum in neque et nisl consectetur convallis."
    }
  ];

  return (
    <div>
      <div className="relative w-full bg-black overflow-hidden image-background">
      <img 
        src="/background.jpg" 
        alt="Background" 
        className="w-full object-cover object-center" 
        style={{ height: 'calc(100vh - 4rem)' }}
      />
        <div className="absolute top-0 left-0 right-0 flex flex-col items-center justify-center min-h-screen">
          <h1 className="text-5xl font-bold text-center text-white">
          Arte da Influência
          </h1>
          <p className="text-lg mt-5 text-white">
          O seu guia completo para a Criação de Conteúdo Digital!
          </p>
        </div>
      </div>
      <div className="bg-black flex flex-col items-center w-full py-10 gap-y-10">
        {cardsData.map((card, index) => (
          <Card key={index} title={card.title} content={card.content} />
        ))}
      </div>
      <div className="absolute inset-x-0 bottom-6 z-10 flex justify-center mb-4">
        <img src="/seta.png" alt="Scroll Down" className="h-10 slow-bounce" />
      </div>
    </div>
  );
};

export default Home;



