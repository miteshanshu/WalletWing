/* eslint-disable react/prop-types */

import { Link as RouterLink } from 'react-router-dom';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { AiFillHome } from 'react-icons/ai';
import { FiActivity } from 'react-icons/fi';
import { GiWheat } from 'react-icons/gi';

export default function Breadcrumb({ titles }) {
   return (
      <div>
         <Breadcrumbs aria-label='breadcrumb'>
            {titles.map((title, index) => (
               <Link
                  key={index}
                  underline='hover'
                  sx={{ display: 'flex', alignItems: 'center' }}
                  color='inherit'
                  component={RouterLink}
                  to={index === 0 ? '/' : '#'}
                  className='dark:text-white'
               >
                  {index === 0 && (
                     <AiFillHome sx={{ mr: 0.5 }} fontSize='inherit' />
                  )}
                  {index === 1 && (
                     <FiActivity sx={{ mr: 0.5 }} fontSize='inherit' />
                  )}
                  {index === 2 && (
                     <GiWheat sx={{ mr: 0.5 }} fontSize='inherit' />
                  )}
                  {title}
               </Link>
            ))}
         </Breadcrumbs>
      </div>
   );
}
