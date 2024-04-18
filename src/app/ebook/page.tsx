'use client'
import type { NextPage } from 'next';
import { useRouter } from 'next/navigation';

const Ebook: NextPage = () => {
    const router = useRouter();
    return (
      <div>
        <h1>EBOOK</h1>
        <p>This is the content of card 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    );
  };
  
  export default Ebook;