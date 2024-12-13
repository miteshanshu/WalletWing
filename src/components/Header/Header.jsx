/* eslint-disable react/prop-types */
import { FaAngleRight, FaSearch } from 'react-icons/fa';
import Logo from '../../assets/mitesh.png';

import { IoGitCompareOutline } from 'react-icons/io5';
import { MdFavoriteBorder } from 'react-icons/md';
import './Header.css';
import DarkNightMode from '../../Common/DarkNightMode';
import DropdownMenu from '../../Common/DropdownUser';
import Navbar from './Navbar/Navbar';
import { Link, useLocation } from 'react-router-dom';
import { FiHome } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FiX } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import product from '../../../db.json';
import { useNavigate } from 'react-router-dom';
import { removeItem } from '../../store/cartSlice.js';
import { setSearchResults } from '../../store/searchResult.js';

const Header = () => {
  const location = useLocation();
  const [helmet, setHelmet] = useState('');
  const [searchInput, setSearchInput] = useState('');
  // const [category, setCategory] = useState('');

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.items.length);
  const Compare = useSelector((state) => state.product.productItems.length);
  const cart = useSelector((state) => state.cart.cart);
  const subtotal = useSelector((state) => state.cart.subTotal);



  useEffect(() => {
    const pathnameParts = location.pathname.split('/');
    const currentPage = pathnameParts[pathnameParts.length - 1];
    setHelmet(currentPage);
  }, [location]);


  const productsName = product.productData.map((item) =>
    item.items.map((item) => item)
  );
  const productFilterName = productsName.flat();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchInput === '') {
      dispatch(setSearchResults([]));
    }

    let results = [];
    productFilterName.forEach((item) => {
      item.products.forEach((product) => {
        if (
          product.productName.toLowerCase().includes(searchInput.toLowerCase())
        ) {
          results.push(product);
        }
      });
    });
    
   dispatch(setSearchResults(results));

   if (results.length > 0) {
     navigate(`/product/${searchInput.replace(/ /g, '-').toLowerCase()}`);
   }
  };




  const handleDeleteCartItem = (id) => {
    const product = cart.find((product) => product.id === id);
    if (product) {
      dispatch(removeItem(product));
    }
  };


  return (
    <>
      <div className='header flex justify-between items-center mx-2'>
        <div className='logo flex justify-center items-center w-[11%]'>
          <Link to='/'>
            <img src={Logo} alt='logo' className='h-[150px] w-full' />
          </Link>
        </div>
        <div className='Search  h-11 flex items-center w-[45%] mx-5 my-autocomplete'>
          <input
            id='search-input'
            type='text'
            placeholder='Search products, brands, and more'
            className='outline-none pl-5 flex-1 dark:bg-gray-900 dark:text-white placeholder-black dark:placeholder-white'
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onClick={handleSearch}
            
          />

          <div
            className='search-icon cursor-pointer dark:text-white'
            // disabled="true"
          >
            <FaSearch />
          </div>
        </div>

        <div className='options w-[35%] flex justify-around items-center'>
          <div className='flex items-center justify-center'>
            <Link to='/compare'>
              <div className='flex justify-center items-center space-x-2 relative cursor-pointer'>
                <IoGitCompareOutline className='h-7 w-7' />
                <span className='text-sm font-semibold dark:text-white text-black'>
                  Compare
                </span>
                <span className='absolute top-[-20px] left-2 bg-[#29a56c] dark:bg-white text-white dark:text-black rounded-full h-7 w-7 flex items-center justify-center text-xs font-bold'>
                  {Compare}
                </span>
              </div>
            </Link>
          </div>

          <div className='flex items-center justify-center'>
            <Link to='/wishlist'>
              <div className='flex justify-center items-center space-x-2 relative cursor-pointer'>
                <MdFavoriteBorder className='h-7 w-7' />
                <span className='text-sm font-semibold dark:text-white text-black'>
                  Wishlist
                </span>
                <span className='absolute top-[-20px] left-0 bg-[#29a56c] dark:bg-white text-white dark:text-black rounded-full h-7 w-7 flex items-center justify-center text-xs font-bold'>
                  {wishlist}
                </span>
              </div>
            </Link>
          </div>
          <div className='dropdown-cart'>
            <div className='flex items-center justify-center'>
              <Link to='/cart'>
                <div className='flex justify-center items-center space-x-2 relative cursor-pointer'>
                  <AiOutlineShoppingCart className='h-7 w-7 flex justify-center items-center' />
                  <span className='text-sm font-semibold dark:text-white text-black'>
                    Cart
                  </span>
                  <span className='absolute top-[-20px] left-1 bg-[#29a56c] dark:bg-white  dark:text-black text-white rounded-full h-7 w-7 flex items-center justify-center text-xs font-bold'>
                    {cart.length}
                  </span>
                </div>
              </Link>
            </div>

            <div className='cart-dropdown-wrap cart-dropdown-hm2'>
              <ul>
                {cart.length === 0 ? (
                  <li className='empty-cart flex flex-col items-center justify-center space-y-2 py-4'>
                    <span className='text-lg font-semibold text-gray-700'>
                      Your shopping cart is empty.
                    </span>
                    <span className='text-sm text-gray-500'>
                      Start adding products to fill it up!
                    </span>
                  </li>
                ) : (
                  cart.slice(0, 2).map((item) => (
                    <li key={item.id}>
                      <div className='shopping-cart-img'>
                        <img alt='Nest' src={item.catImg} />
                      </div>
                      <div className='shopping-cart-title'>
                        <Link to='/cart'>
                          <h3 className='text-sm'>{item.productName}</h3>
                        </Link>
                        <h4>
                          <span>{item.quantity} × </span>₹{item.price}
                        </h4>
                      </div>
                      <div className='shopping-cart-delete'>
                        <Link
                          to='#'
                          onClick={() => handleDeleteCartItem(item.id)}
                        >
                          <FiX />
                        </Link>
                      </div>
                    </li>
                  ))
                )}
              </ul>
              {cart.length > 2 && (
                <div className='more-items-message bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 mt-2 rounded'>
                  <span className='block'>
                    Only the first 2 items are displayed.
                  </span>
                  <span className='block mt-1'>
                    Open the cart to see all items.
                  </span>
                </div>
              )}
              {cart.length > 0 && (
                <div className='shopping-cart-footer'>
                  <div className='shopping-cart-total'>
                    <h4>
                      Total <span>₹{subtotal}</span>
                    </h4>
                  </div>
                  <div className='shopping-cart-button text-center'>
                    <Link className='outline' to='/cart'>
                      View cart
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className='flex justify-center item-center  relative  cursor-pointer'>
            <DropdownMenu />
          </div>
          <div>
            <DarkNightMode />
          </div>
        </div>
      </div>
      {/* Navbar section Start Here */}
      <Navbar />
      {/* Navbar section End Here */}
      {location.pathname === '/' ? null : (
        <div className='page-header breadcrumb-wrap mb-[30px]'>
          <div className='container'>
            <div className='breadcrumb font-normal'>
              <Link to={'/'} rel='nofollow'>
                <FiHome className='inline mr-1' /> Home
              </Link>
              <FaAngleRight /> Pages <FaAngleRight /> {helmet}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
