import { Link } from 'react-router-dom';
import maintenance from '../assets/maintenance.svg';

const MaintenancePage = () => {
   return (
     <div className='flex flex-col justify-center items-center px-6 mx-auto h-screen xl:px-0 dark:bg-gray-900'>
       <div className='block mb-5 md:max-w-md'>
         <img src={maintenance} alt='maintenance image' />
       </div>
       <div className='text-center xl:max-w-4xl'>
         <h1 className='mb-3 text-2xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl dark:text-white'>
           Under Maintenance
         </h1>
         <p className='mb-5 text-base font-normal text-gray-500 md:text-lg dark:text-white'>
           Sorry for the inconvenience but we’re performing some maintenance at
           the moment. If you need to, you can always{' '}
           <Link
             to='/contact-us'
             className='text-blue-700 hover:underline'
           >
             contact us
           </Link>
           , otherwise we’ll be back online shortly!.
         </p>
         <Link
           to='/'
           className='inline-flex items-center justify-center submit submit-auto-width bg-indigo-500 transition duration-300 ease-in-out text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline contact-from-button btn-md'
         >
           <svg
             className='mr-2 -ml-1 w-5 h-5'
             fill='currentColor'
             viewBox='0 0 20 20'
             xmlns='http://www.w3.org/2000/svg'
           >
             <path
               fillRule='evenodd'
               d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
               clipRule='evenodd'
             ></path>
           </svg>
           Go back home
         </Link>
       </div>
     </div>
   );
};

export default MaintenancePage;
