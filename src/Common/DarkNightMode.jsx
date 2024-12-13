import { useState, useEffect } from 'react';
import { BsSun, BsMoon } from 'react-icons/bs';

const DarkNightMode = () => {
   const [isChecked, setIsChecked] = useState(() => {
      try {
         const storedTheme = localStorage.getItem('theme');
         return storedTheme ? JSON.parse(storedTheme) : false;
      } catch (error) {
         console.error('Error parsing stored theme:', error);
         return false;
      }
   });

   useEffect(() => {
      localStorage.setItem('theme', JSON.stringify(isChecked));

      document.body.classList.toggle('dark', isChecked);
   }, [isChecked]);

   const handleCheckboxChange = () => {
      setIsChecked((prevState) => !prevState);
   };

   return (
      <label className='theme-switcher relative inline-flex cursor-pointer select-none items-center'>
         <input
            type='checkbox'
            checked={isChecked}
            onChange={handleCheckboxChange}
            className='sr-only'
         />
         <span className='icon flex items-center transition-all duration-300 ease-in-out text-2xl'>
            {isChecked ? <BsMoon className='dark:text-white' /> : <BsSun />}
         </span>
      </label>
   );
};

export default DarkNightMode;
