'use client'
import { useRouter } from 'next/navigation';
import type { NextPage } from 'next';
import Arrow from '../components/Arrow';
import FlareOutlinedIcon from '@mui/icons-material/FlareOutlined';

const Home: NextPage = () => {
  const router = useRouter();

  

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
      <div className="bg-black flex flex-col items-center w-full gap-y-2">
        <div className="w-full max-w-4xl p-4 mt-16">
          <iframe
            className="w-full aspect-video"
            src='https://www.youtube.com/embed/dQw4w9WgXcQ?si=vBkTCV06cuO2WZ0R'
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <p className="text-sm sm:text-lg text-center font-bold text-white cursor-default mt-36 max-w-2xl mx-auto">
        Eu não sou ”mais uma coach de Instagram’‘…
        </p>
        <p className="text-sm sm:text-lg text-justify text-white cursor-default p-4 sm:p-8 max-w-5xl mx-auto">

        Oie, eu sou Sté Schuck. Tenho 23 anos e sou criadora digital. Falo sobre viagens e estilo de vida. Durante esse período como criadora de conteúdo, já assinei mais de 200 contratos com marcas, empresas e eventos.

        Mas nem sempre foi assim. Até 2020, eu recebia R$5,07 por hora, trabalhando como CLT na produção de uma empresa calçadista. Eu acordava de segunda a sexta-feira às 5h da manhã para pegar o ônibus e voltava para casa às 19h. Muitas vezes, também fazia horas extras, chegando em casa às 23h.
        </p>

        <img src="./foto-ste1.jpg" alt="" className='size-1/3'/>

        <p className="text-sm sm:text-lg text-center font-bold text-white cursor-default mt-36 max-w-2xl mx-auto">
        Eu já estive no seu lugar…
        </p>
        <p className="text-sm sm:text-lg text-justify text-white cursor-default p-4 sm:p-8 max-w-5xl mx-auto">

        E não vou te vender um curso de vender curso. Eu vou te ajudar a dar os teus próprios passos!

        </p>

        <img src="./foto-ste2.jpg" alt="" className='size-1/3'/>

        <div className="grid grid-cols-3 gap-4 mt-8 mb-20">
        {/* Grid Item 1 */}
          <div className="max-w-md p-8 hover:text-shadow-white-glow">
            <div className='center-icon'>
              <FlareOutlinedIcon style={{ fontSize: 40, color: 'white' }}/>
            </div>
            <h3 className="text-sm sm:text-lg text-center font-bold text-white cursor-default mt-4 mb-6">Aprenda a se posicionar</h3>
            <p className="text-sm sm:text-lg text-justify text-white cursor-default">Crie um posicionamento objetivo, com confiança e assertividade. Aqui, compartilho minhas estratégias para que você também possa alcançar seus objetivos.</p>
          </div>
          {/* Grid Item 2 */}
          <div className="max-w-md p-8">
            <div className='center-icon'>
              <FlareOutlinedIcon style={{ fontSize: 40, color: 'white' }}/>
            </div>
            <h3 className="text-sm sm:text-lg text-center font-bold text-white cursor-default mt-4 mb-6">Assine contratos de parcerias</h3>
            <p className="text-sm sm:text-lg text-justify text-white cursor-default">Aprenda a analisar e negociar parcerias com as estratégias certas e uma proposta irrecusável.</p>
          </div>
          {/* Grid Item 3 */}
          <div className="max-w-md p-8">
            <div className='center-icon'>
              <FlareOutlinedIcon style={{ fontSize: 40, color: 'white' }}/>
            </div>
            <h3 className="text-sm sm:text-lg text-center font-bold text-white cursor-default mt-4 mb-6">Mude a sua mentalidade</h3>
            <p className="text-sm sm:text-lg text-justify text-white cursor-default">Transforme sua mentalidade, se liberte de medos e crenças limitantes, e desbloqueie todo o potencial da criação de conteúdo digital.</p>
          </div>
          {/* Grid Item 4 */}
          <div className="max-w-md p-8">
            <div className='center-icon'>
              <FlareOutlinedIcon style={{ fontSize: 40, color: 'white' }}/>
            </div>
            <h3 className="text-sm sm:text-lg text-center font-bold text-white cursor-default mt-4 mb-6">Trabalhe de qualquer lugar</h3>
            <p className="text-sm sm:text-lg text-justify text-white cursor-default">As redes sociais possibilitam que você trabalhe de qualquer lugar, apenas com um celular e acesso à internet.</p>
          </div>
          {/* Grid Item 5 */}
          <div className="max-w-md p-8">
            <div className='center-icon'>
              <FlareOutlinedIcon style={{ fontSize: 40, color: 'white' }}/>
            </div>
            <h3 className="text-sm sm:text-lg text-center font-bold text-white cursor-default mt-4 mb-6">Realize os seus sonhos</h3>
            <p className="text-sm sm:text-lg text-justify text-white cursor-default">Vejo os seus sonhos e objetivos se realizarem diante dos seus olhos e antes do que você poderá imaginar.</p>
          </div>
          {/* Grid Item 6 */}
          <div className="max-w-md p-8">
            <div className='center-icon'>
              <FlareOutlinedIcon style={{ fontSize: 40, color: 'white' }}/>
            </div>
            <h3 className="text-sm sm:text-lg text-center font-bold text-white cursor-default mt-4 mb-6">Viva e não apenas sobreviva</h3>
            <p className="text-sm sm:text-lg text-justify text-white cursor-default">Viva a vida que você merece; liberte-se das correntes e dos limites de ser ‘apenas mais um’.</p>
          </div>
        </div>
        <button
          oonClick={() => router.push('https://pay.hotmart.com/F84179934X?off=ls6csdn4&checkoutMode=10')}
          className="bg-green-500 hover:bg-green-700 text-white text-xl font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-1/6 mb-20"
        >
          Compre já!
        </button>
        </div>
      <Arrow />
    </div>
  );
};

export default Home;

