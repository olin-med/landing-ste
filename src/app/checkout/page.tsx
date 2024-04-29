'use client'
import React, { useEffect } from 'react';

const HotmartCheckout: React.FC = () => {
  useEffect(() => {
    // Function to dynamically load the Hotmart script
    const loadScript = () => {
      const script = document.createElement('script');
      script.src = "https://checkout.hotmart.com/lib/hotmart-checkout-elements.js";
      script.async = true;
      script.onload = () => initCheckout();
      document.body.appendChild(script);
    };

    // Initialize the Hotmart checkout
    const initCheckout = () => {
      // Ensure the checkoutElements object is available in the global scope
      const checkoutElements = (window as any).checkoutElements;
      
      if (checkoutElements) {
        const elements = checkoutElements.init('inlineCheckout', {
          offer: 'hF84179934X' // This should be your offer code
        });
        elements.mount('#inline_checkout');
      }
    };

    // Load the script when the component mounts
    loadScript();

    // Optional: Cleanup function to run when the component unmounts
    return () => {
      // Perform cleanup if necessary (like unmounting the checkout)
    };
  }, []); // Empty dependency array means this effect will only run once, after the initial render

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
          <div id="inline_checkout">
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotmartCheckout;
