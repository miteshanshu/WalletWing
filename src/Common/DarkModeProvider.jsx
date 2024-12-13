/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from 'react';

const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
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

   const toggleDarkMode = () => {
      setIsChecked((prevState) => !prevState);
   };

   return (
      <DarkModeContext.Provider value={{ isChecked, toggleDarkMode }}>
         {children}
      </DarkModeContext.Provider>
   );
};
