import { useContext } from 'react';
import { DarkModeContext } from './DarkModeProvider';

export const useDarkMode = () => {
   return useContext(DarkModeContext);
};
