'use client'
import type { NextPage } from 'next';
import { useRouter } from 'next/navigation';

const Ebook: NextPage = () => {
  const router = useRouter();

  // Example YouTube video ID
  const videoId = "YOUR_YOUTUBE_VIDEO_ID"; // Replace this with your video ID

  // YouTube embed URL construction
  const embedUrl = `https://youtu.be/dQw4w9WgXcQ?feature=shared`;

  return (
    <div>
      <div className="relative w-full bg-black overflow-hidden image-background">
        <img 
          src="./background.jpg" 
          alt="Background" 
          className="w-full object-cover object-center" 
          style={{ height: 'calc(100vh)', objectPosition: '50% 35%', filter: 'blur(6px)' }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center min-h-screen">
          <h1 className="text-4xl sm:text-8xl text-center text-white playfair cursor-default">
            Ebook
          </h1>
          <p className="text-sm sm:text-lg text-center text-white cursor-default p-4 sm:p-8">
            O seu guia completo para a Criação de Conteúdo Digital!
          </p>
          {/* Video Embed */}
          <div className="w-full max-w-4xl p-4">
            <iframe
              className="w-full aspect-video"
              src='https://www.youtube.com/embed/dQw4w9WgXcQ?si=vBkTCV06cuO2WZ0R'
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ebook;
