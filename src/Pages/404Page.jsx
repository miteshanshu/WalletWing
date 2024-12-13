import { Link } from 'react-router-dom';
import ErrorPage from '../assets/page-404.png'

const NotFoundPage = () => {
   return (
     <div className='w-[66%] mx-auto py-[100px] flex justify-center items-center'>
       <div className='mb-5 flex justify-center items-center flex-col'>
         <p className='page-404 mb-5'>
           <img src={ErrorPage} alt='' className='hover-up' />
         </p>
         <h1 className='display-2 mb-8 text-[#253D4E] font-bold'>
           Page Not Found
         </h1>
         <p className='font-base text-gray-700 mb-8'>
           The link you clicked may be broken or the page may have been removed.
           <br />
           Visit the{' '}
           <Link to='/'>
             {' '}
             <span className='text-[#3BB77E]'> Homepage</span>
           </Link>{' '}
           or{' '}
           <Link to='/contact-us'>
             <span className='text-[#3BB77E]'>Contact us</span>
           </Link>{' '}
           about the problem
         </p>
         <div className='flex justify-center items-center'>
           <Link to='/' className='btn btn-md hover-up mr-5'>
             Back to Home
           </Link>
           <Link to='/contact-us' className='btn btn-md hover-up'>
             Contact Us
           </Link>
         </div>
       </div>
     </div>
   );
};

export default NotFoundPage;