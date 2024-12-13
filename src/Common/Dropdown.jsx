/* eslint-disable react/prop-types */
import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Transition } from '@headlessui/react';
import { HiChevronDown } from 'react-icons/hi';
import '../index.css';

const Dropdown = ({ title, items }) => {
   const [isOpen, setIsOpen] = useState(false);
   const closeMenu = () => {
      setIsOpen(false);
   };

   return (
     <div
       className='relative group text-black dark:text-white z-999'
       onClick={closeMenu}
     >
       <Menu as='div' className='relative inline-block text-left'>
         <Menu.Button
           className='hover:text-green-600 dark:hover:text-white focus:outline-none flex items-center whitespace-nowrap cursor-pointer'
           onClick={() => setIsOpen(!isOpen)}
         >
           <Link
             to={`/${title.replace(/\s+/g, '-').toLowerCase()}`}
             className='hover:text-green-600 dark:hover:text-white'
           >
             {title}
           </Link>
           <HiChevronDown
             className={`${
               isOpen ? 'transform rotate-180' : ''
             } w-5 h-5 text-gray-700 dark:text-white`}
           />
         </Menu.Button>

         <Transition
           as={Fragment}
           enter='transition ease-out duration-100'
           enterFrom='transform opacity-0 scale-95'
           enterTo='transform opacity-100 scale-100'
           leave='transition ease-in duration-75'
           leaveFrom='transform opacity-100 scale-100'
           leaveTo='transform opacity-0 scale-95'
         >
           {/* Menu items */}
           <Menu.Items className='dark:bg-gray-900 text-black  absolute left-[-60px] top-10 mt-2 py-4 bg-white border rounded-md shadow-lg z-10 transition-all duration-500 sub-menu'>
             <div className='space-y-1 text-gray-700 dark:text-white dark:border-none'>
               {items.map((item, index) => (
                 <Menu.Item key={index}>
                   <Link
                     to={`/${title.replace(
                       /\s+/g,
                       '-'
                     )}/${item.cat_name.replace(/\s+/g, '-')}`.toLowerCase()}
                     className={`text-gray-900 group flex dark:text-white mx-4 items-center rounded-md px-2 py-2 text-[15px] hover:bg-gray-200 dark:hover:bg-orange-800  `}
                   >
                     {item.cat_name}
                   </Link>
                 </Menu.Item>
               ))}
             </div>
           </Menu.Items>
         </Transition>
       </Menu>
     </div>
   );
};

export default Dropdown;
