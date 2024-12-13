import ArrowDown from '../../../assets/ArrowDown.svg';
import icon from '../../../assets/icon-hot.svg';
import Apps from '../../../assets/apps.svg';
import { Link, useLocation } from 'react-router-dom';
import category1 from '../../../assets/category-1.svg';
import category2 from '../../../assets/category-2.svg';
import category3 from '../../../assets/category-3.svg';
import category5 from '../../../assets/category-5.svg';
import category6 from '../../../assets/category-6.svg';
import category8 from '../../../assets/category-8.svg';
import category9 from '../../../assets/category-9.svg';
import category10 from '../../../assets/category-10.svg';

import { megaMenuData } from '../../../data/DropdownData';
import MegaDropDown from '../../../Common/MegaDropDown';
import { useEffect, useState } from 'react';
import { RiCustomerServiceLine } from 'react-icons/ri';
import Dropdown from '../../../Common/Dropdown';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const data = useSelector((state) => state.data.data);
  const location = useLocation();

  const toggleCategories = () => {
    setIsOpen(!isOpen);
  };
  const [isExpanded, setIsExpanded] = useState(false);

  const handleShowMoreClick = () => {
    setIsExpanded(!isExpanded);
    
  };
  useEffect(() => {
    const navbar = document.querySelector('.NavbarBorder');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        navbar.classList.add('Navbar-fixed');
      } else {
        navbar.classList.remove('Navbar-fixed');
      }
    });
  }, []);
  const categories = [
    {
      src: category1,
      alt: 'category-1',
      name: 'Dals & Pulses',
      link: '/Groceries/dals & Pulses',
    },
    {
      src: category2,
      alt: 'category-2',
      name: 'Ghee & Oils',
      link: '/Groceries/Ghee & Oils',
    },
    {
      src: category6,
      alt: 'category-3',
      name: 'TV & Speaker',
      link: '/Electronics/TV & Speaker',
    },
    {
      src: category6,
      alt: 'category-4',
      name: 'Mobiles & Tablets',
      link: '/Electronics/Mobiles & Tablets',
    },
    {
      src: category5,
      alt: 'category-5',
      name: 'Fresh Fruit',
      link: 'fresh/fresh-fruits',
    },
    {
      src: category3,
      alt: 'category-6',
      name: 'Men Clothes',
      link: '/Fashion/Men Clothes',
    },
    {
      src: category3,
      alt: 'category-7',
      name: 'Women Clothes',
      link: '/Fashion/Women Clothes',
    },
    {
      src: category8,
      alt: 'category-8',
      name: 'Living Room',
      link: '/Home Decor/Living Room',
    },
    {
      src: category9,
      alt: 'category-9',
      name: 'Fresh Vegetables',
      link: '/fresh/Fresh Vegetables',
    },
    {
      src: category10,
      alt: 'category-10',
      name: 'Fresh Fruits',
      link: '/fresh/fresh fruits',
    },
  ];
  return (
    <div className='NavbarBorder'>
      <div className='flex items-center justify-between mx-4 my-4'>
        <div
          className='NavbarLeft flex justify-center cursor-pointer items-center text-white'
          onClick={toggleCategories} 
          // style={{"backgroundColor":"red"}}
        >
          <img src={Apps} alt='logo' className='mr-2 h-5' />
          <h3 className='capitalize font-bold'>Browse All Categories</h3>
          <img
            src={ArrowDown}
            alt='arrow-icon'
            className={`h-7 mr-2 ${isOpen ? 'rotate-180' : ''}`}
          />
        </div>
        <div className='NavbarRight flex justify-center items-center'>
          <ul className='flex justify-between items-center capitalize text-[16px] gap-8 font-bold '>
            {location.pathname === '/product' ? (
              <li className='hover:text-green-600 dark:hover:text-white'>
                <Link
                  className='flex items-center justify-center'
                  to='#deals'
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById('deals')
                      .scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <img src={icon} alt='icon-hot' className='h-6 mr-2' />
                  Deal
                </Link>
              </li>
            ) : (
              <li className='hover:text-green-600 dark:hover:text-white'>
                <Link to={'/'}>Home</Link>
              </li>
            )}

            <li className='hover:text-green-600 dark:hover:text-white'>
              <Link to='/product'>Shop</Link>
            </li>

            {data.slice(0, 4).map((item, index) => (
              <li className='relative' key={index}>
                <Dropdown title={item.cat_name} items={item.items} />
              </li>
            ))}

            {/* <li className='relative'>
              <MegaDropDown title='Mega Menu' items={megaMenuData} />
            </li> */}
            <li className='hover:text-green-600 dark:hover:text-white'>
              <Link>Blogs</Link>
            </li>

            <li className='hover:text-green-600 dark:hover:text-white'>
              <Link to={'/about'}>About</Link>
            </li>
            <li className='hover:text-green-600 dark:hover:text-white'>
              <Link to={'/contact-us'}>Contact</Link>
            </li>
          </ul>
        </div>

        <div className='NavbarCenter flex justify-end items-end'>
          <div className='help-section flex items-center text-lg cursor-pointer  dark:text-white'>
            <RiCustomerServiceLine size={35} />
            <p className='text-green-600 text-2xl ml-2 font-semibold block leading-none'>
            <a href="tel:7667499479" className="hover:underline">7667499479</a>
              <span className='block text-gray-500 text-sm font-medium tracking-wide dark:text-white'>
                24/7 Support Center
              </span>
            </p>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className='categories-dropdown absolute bg-white dark:bg-gray-900 w-full z-50 flex justify-center flex-col items-center py-4 shadow-lg border border-gray-200'>
          <div className='grid grid-cols-2 gap-4'>
            {categories.map((category, index) => {
              if (!isExpanded && index > 5) {
                return null;
              }

              return (
                <Link
                  to={category.link.replace(/\s+/g, '-').toLowerCase()}
                  key={index}
                  onClick={() => toggleCategories()}
                >
                  <div className='flex gap-3 justify-center items-center category-list hover-effect'>
                    <img
                      src={category.src}
                      alt={category.alt}
                      className='max-w-[20%]'
                    />
                    <span className='text-sm'>{category.name}</span>
                  </div>
                </Link>
              );
            })}
          </div>

          <div
            className='more_categories cursor-pointer flex justify-center items-center transition-effect'
            onClick={handleShowMoreClick}
          >
            <span
              className={`icon ${isExpanded ? 'iconMinus' : 'iconPlus'}`}
            ></span>
            <span className='text-[14px]'>
              {isExpanded ? 'Show less...' : 'Show more...'}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
