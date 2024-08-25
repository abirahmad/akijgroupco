
import AOS from 'aos';
import React,{useEffect} from 'react';

function AosAnimation({ Component, pageProps }) {
 useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation in milliseconds
      easing: 'ease-in-out', // Easing function for the animation
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);

  return <Component {...pageProps} />;
}

export default AosAnimation;
