import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { Transition } from '@headlessui/react';

const ScrollToTopButton = () => {
   const [showButton, setShowButton] = useState(false);

   const handleScroll = () => {
      if (window.scrollY > 300) {
         setShowButton(true);
      } else {
         setShowButton(false);
      }
   };

const scrollToTop = () => {
  const currentScroll = window.scrollY;
  const slowMotionDistance = 1200; 
  const targetSlowScroll = Math.max(currentScroll - slowMotionDistance, 0); 
  const slowMotionDuration = 500; 
  const duration = 1000; 
  let startTime = null;

  const animateSlowScroll = (timestamp) => {
    if (!startTime) startTime = timestamp;
    const elapsedTime = timestamp - startTime;
    const easing = easeInOutQuad(
      elapsedTime,
      currentScroll,
      -slowMotionDistance,
      slowMotionDuration
    );
    window.scrollTo(0, easing);
    if (elapsedTime < slowMotionDuration) {
      requestAnimationFrame(animateSlowScroll);
    } else {
      animateNormalScroll();
    }
  };

  const animateNormalScroll = () => {
    const animateScroll = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsedTime = timestamp - startTime;
      const easing = easeInOutQuad(
        elapsedTime,
        targetSlowScroll,
        -targetSlowScroll,
        duration
      );
      window.scrollTo(0, easing);
      if (elapsedTime < duration) {
        requestAnimationFrame(animateScroll);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    requestAnimationFrame(animateScroll);
  };

  requestAnimationFrame(animateSlowScroll);
};

// Easing function for smooth scrolling
const easeInOutQuad = (t, b, c, d) => {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t + b;
  t--;
  return (-c / 2) * (t * (t - 2) - 1) + b;
};







   useEffect(() => {
      window.addEventListener('scroll', handleScroll);

      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, []);

   return (
      <Transition
         show={showButton}
         enter='transition-opacity duration-300'
         enterFrom='opacity-0'
         enterTo='opacity-100'
         leave='transition-opacity duration-300'
         leaveFrom='opacity-100'
         leaveTo='opacity-0'
      >
         <div className='fixed bottom-4 right-4 transition transform customHover duration-300 z-50'>
            <button
               className='dark:bg-white animate-icon bg-white dark:text-black px-3 py-3 rounded-full text-black cursor-pointer border border-black dark:border-white'
               onClick={scrollToTop}
            >
               <FaArrowUp className='text-lg' />
            </button>
         </div>
      </Transition>
   );
};

export default ScrollToTopButton;
