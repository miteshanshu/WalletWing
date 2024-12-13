/* eslint-disable react/prop-types */
import { Pagination, Rating } from '@mui/material';
import Breadcrumb from '../Common/Breadcrumb';
import SideBar from '../Common/SideBar';
import Card from '../components/Card/Card';
import { styled } from '@mui/system';
import { Fragment, useEffect, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { FiChevronDown, FiGrid, FiCheck, FiShoppingCart } from 'react-icons/fi';
import { Link, useParams } from 'react-router-dom';
import { TbSortDescending2 } from 'react-icons/tb';
import Countdown from 'react-countdown';
import { useSelector } from 'react-redux';
import noProduct from '../assets/pnf.webp';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const StyledPagination = styled(Pagination)({
  '& .MuiPaginationItem-root': {
    color: '#7E7E7E',
    border: 'none',
    outline: 'none',
    backgroundColor: '#F2F3F4',
    fontSize: '18px',
    height: '40px',
    width: '40px',
    borderRadius: '50%',
    margin: '0 5px',
  },
  '& .Mui-selected': {
    backgroundColor: '#3BB77E !important',
    color: 'white !important',
  },
  '& .MuiPaginationItem-root:hover': {
    backgroundColor: '#3BB77E !important',
    color: 'white !important',
  },
});

const menuItems = [
  { text: 4 },
  { text: 8 },
  { text: 12 },
  { text: 16 },
  { text: 20 },
];
const menuItems2 = [
  { text: 'A to Z', filterKey: 'aToZ' },
  { text: 'Z to A', filterKey: 'zToA' },
  { text: 'Price, Low to High', filterKey: 'priceLowToHigh' },
  { text: 'Price, High to Low', filterKey: 'priceHighToLow' },
  { text: 'Rating', filterKey: 'rating' },
];




const ProductList = () => {
  // State variables
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [selectedItem1, setSelectedItem1] = useState(12);
  const [selectedItem2, setSelectedItem2] = useState('A to Z');
  const [currentPage, setCurrentPage] = useState(1);
  const [productData, setProductData] = useState([]);
  const [brand, setBrand] = useState('');


  const HighestPrice = Math.max(...productData.map((product) => product.price));


  const [priceRange, setPriceRange] = useState([0, HighestPrice]);

  useEffect(() => {
    const newHighestPrice = Math.max(
      ...productData.map((product) => product.price)
    );
    setPriceRange([0, newHighestPrice]);
  }, [productData, HighestPrice]); 
  


  // Data from Redux store
  const data = useSelector((state) => state.data.data);
  const searchResults = useSelector(
    (state) => state.setSearchResult.searchResults
  );

  const { category, subcategory } = useParams();

  
  





  useEffect(() => {
    let productData = [];
    if (searchResults && searchResults.length > 0) {
      productData = searchResults;
    } else if (category) {
      if (subcategory) {
        productData = data
          .filter(
            (item) =>
              item.cat_name.replace(/\s+/g, '-').toLowerCase() === category
          )
          .flatMap((item) => item.items)
          .filter(
            (item) =>
              item.cat_name.replace(/\s+/g, '-').toLowerCase() === subcategory
          )
          .flatMap((item) => item.products);
      } else {
        productData = data
          .filter(
            (item) =>
              item.cat_name.replace(/\s+/g, '-').toLowerCase() === category
          )
          .flatMap((item) => item.items.flatMap((items) => items.products));
      }
    } else {
      productData = data.flatMap((item) =>
        item.items.flatMap((items) => items.products)
      );
    }
    setProductData(productData);
  }, [searchResults, category, subcategory, data]);


  // Filter products based on selectedItem2
  const filterProducts = (products) => {
    let result = products;

    // Filter by price range
    result = result.filter(
      (product) =>
        product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    // Filter by brand
    if (brand) {
      result = result.filter((product) => product.brand === brand);
    }

    switch (selectedItem2) {
      case 'A to Z':
        result.sort((a, b) => a.productName.localeCompare(b.productName));
        break;
      case 'Z to A':
        result.sort((a, b) => b.productName.localeCompare(a.productName));
        break;
      case 'Price, Low to High':
        result.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
        break;
      case 'Price, High to Low':
        result.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
        break;
      case 'Rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }
    return result;
  };

  // Apply filtering and sorting
  const filteredProducts = filterProducts(productData);

  // Pagination
  const startIndex = (currentPage - 1) * selectedItem1;
  const endIndex = startIndex + selectedItem1;
  const currentItems = filteredProducts.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filteredProducts.length / selectedItem1);

  // Event handlers
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  //Product Show
  const products = productData.slice(0, 4);

  const handleButtonClick1 = () => {
    setIsOpen1(!isOpen1);
    setIsOpen2(false);
  };

  const handleItemClick1 = (item) => {
    setIsOpen1(false);
    setSelectedItem1(item);
  };

  const handleButtonClick2 = () => {
    setIsOpen2(!isOpen2);
    setIsOpen1(false);
  };

  const handleItemClick2 = (item) => {
    setIsOpen2(false);
    setSelectedItem2(item);
  };

  // Local storage handling
  let endTime = localStorage.getItem('endTime');

  if (!endTime || Date.now() - Number(endTime) > 1 * 60 * 60 * 1000) {
    endTime = Date.now() + 24 * 60 * 60 * 1000;
    localStorage.setItem('endTime', endTime);
  }

  endTime = Number(endTime);

  return (
    <div className='px-10 my-5'>
      <div className='breadcrumbs'>
        <h1 className='text-[38px] text-[#253D4E] font-semibold dark:text-white'>
          {category ? category.replace(/-/g, ' ').toUpperCase() : 'PRODUCTS'}
        </h1>
        <Breadcrumb
          titles={[
            'Home',
            category ? category.replace(/-/g, ' ').toUpperCase() : 'PRODUCTS',
            subcategory
              ? subcategory.replace(/-/g, ' ').toUpperCase()
              : 'DETAILS',
          ]}
        />
      </div>

      <div className='product-list py-10 flex justify-between'>
        <div className='w-[23%]'>
          <SideBar
            priceRange={priceRange}
            productData={productData}
            setPriceRange={setPriceRange}
            setBrand={setBrand}
            HighestPrice={HighestPrice}
          />
        </div>
        <div className='w-3/4'>
          <div className='shop-product-fillter'>
            <div className='totall-product'>
              <p className='dark:text-white'>
                We found <strong className='text-brand'>{selectedItem1}</strong>{' '}
                items for you!
              </p>
            </div>
            <div className=''>
              <Menu
                as='div'
                className='relative inline-block text-left product-wrap z-[55] mr-3'
              >
                <button
                  onClick={handleButtonClick1}
                  className='flex items-center w-full justify-center gap-x-1.5 rounded-md bg-white px-1 py-2 text-sm font-semibold text-gray-600 transition-all duration-300 cursor-pointer'
                >
                  <FiGrid />
                  Show: {selectedItem1}
                  <FiChevronDown
                    className={`ml-1 text-gray-600 transform ${
                      isOpen1 ? 'rotate-180' : 'rotate-0'
                    } transition-transform duration-300`}
                  />
                </button>
                <Transition
                  show={isOpen1}
                  as={Fragment}
                  enter='transition ease-out duration-300'
                  enterFrom='opacity-0 scale-95'
                  enterTo='opacity-100 scale-100'
                  leave='transition ease-in duration-200'
                  leaveFrom='opacity-100 scale-100'
                  leaveTo='opacity-0 scale-95'
                >
                  <Menu.Items className='absolute   z-10 mt-4  origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none w-[90%]'>
                    <div className='py-1'>
                      {menuItems.map((menuItem, index) => (
                        <Menu.Item key={index}>
                          {({ active }) => (
                            <Link
                              to={menuItem.path}
                              onClick={() => handleItemClick1(menuItem.text)}
                              className={classNames(
                                active
                                  ? 'bg-gray-100 text-gray-900'
                                  : 'text-gray-700',
                                'flex items-center px-4 py-2 text-sm transition-all duration-300 leading-7'
                              )}
                            >
                              {menuItem.text === selectedItem1 && (
                                <FiCheck color='#3BB77E' size={18} />
                              )}
                              {menuItem.text}
                            </Link>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
              <Menu
                as='div'
                className='relative inline-block text-left product-wrap z-[55]'
              >
                <button
                  onClick={handleButtonClick2}
                  className='flex items-center w-full justify-center gap-x-1.5 rounded-md bg-white px-1 py-2 text-sm font-semibold text-gray-600 transition-all duration-300 cursor-pointer'
                >
                  <TbSortDescending2 />
                  Sort by: {selectedItem2}
                  <FiChevronDown
                    className={`ml-1 text-gray-600 transform ${
                      isOpen2 ? 'rotate-180' : 'rotate-0'
                    } transition-transform duration-300`}
                  />
                </button>
                <Transition
                  show={isOpen2}
                  as={Fragment}
                  enter='transition ease-out duration-300'
                  enterFrom='opacity-0 scale-95'
                  enterTo='opacity-100 scale-100'
                  leave='transition ease-in duration-200'
                  leaveFrom='opacity-100 scale-100'
                  leaveTo='opacity-0 scale-95'
                >
                  <Menu.Items className='absolute right-[-10px]  z-10 mt-4 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                    <div className='py-1'>
                      {menuItems2.map((menuItem, index) => (
                        <Menu.Item key={index}>
                          {({ active }) => (
                            <Link
                              to={menuItem.path}
                              onClick={() => handleItemClick2(menuItem.text)}
                              className={classNames(
                                active
                                  ? 'bg-gray-100 text-gray-900'
                                  : 'text-gray-700',
                                'flex items-center px-4 py-2 text-sm transition-all duration-300 leading-7'
                              )}
                            >
                              {menuItem.text === selectedItem2 && (
                                <FiCheck color='#3BB77E' size={18} />
                              )}
                              {menuItem.text}
                            </Link>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
          <div className='flex flex-wrap justify-start items-start'>
            {currentItems.length === 0 ? (
              <div className='flex justify-center items-center'>
                <img
                  src={noProduct}
                  alt='No Product Found'
                  className='rounded-2xl'
                />
              </div>
            ) : (
              currentItems.map((product, index) => (
                <Link
                  className='w-[25%] px-2 pb-12'
                  key={index}
                  to={`/product/details/${product.id}`}
                >
                  <Card
                    productData={product}
                    currentImage={product.catImg}
                    image2={product.productImages[0]}
                  />
                </Link>
              ))
            )}
          </div>
          {currentItems.length === 0 ? null : (
            <StyledPagination
              count={totalPages}
              page={currentPage}
              onChange={(event, page) => handlePageChange(page)}
              variant='outlined'
              shape='rounded'
            />
          )}

          <div className='pt-10' id='deals'>
            <div className='section-title'>
              <h3 className='dark:text-white'>Deals Of The Day</h3>
            </div>
            <div className='product-list flex justify-start gap-4'>
              {products.map((product) => (
                <div key={product.id} className='product w-1/4 '>
                  <div className='product-img'>
                    <Link to={`/product/details/${product.id}`}>
                      <img
                        src={product.catImg}
                        alt=''
                        className='rounded-2xl w-[280px] h-[250px] mx-auto'
                      />
                    </Link>
                  </div>
                  <Link to={`/product/details/${product.id}`} className='block'>
                    <div className='product-info cursor-pointer transform transition-transform duration-200 hover:-translate-y-1 mx-auto'>
                      <div className=''>
                        <Countdown
                          date={endTime}
                          renderer={({
                            days,
                            hours,
                            minutes,
                            seconds,
                            completed,
                          }) =>
                            completed ? (
                              <div className='expired-badge'>
                                Deal expired. Try next time.
                              </div>
                            ) : (
                              <div className='flex justify-between items-center gap-3 mt-[-160px]'>
                                <div className='shadow flex flex-col p-2 px-3 rounded-md text-center product-one text-[#7E7E7E]'>
                                  <span className='text-[#3BB77E] text-xl'>
                                    {days}
                                  </span>{' '}
                                  Day
                                </div>
                                <div className='shadow flex flex-col p-2 px-2 rounded-md text-center product-one text-[#7E7E7E] '>
                                  <span className='text-[#3BB77E] text-xl'>
                                    {hours}
                                  </span>
                                  Hour
                                </div>
                                <div className='shadow flex flex-col p-2 px-3 rounded-md text-center product-one text-[#7E7E7E]'>
                                  <span className='text-[#3BB77E] text-xl'>
                                    {minutes}
                                  </span>
                                  Min
                                </div>
                                <div className='shadow flex flex-col p-2 px-3 rounded-md text-center product-one text-[#7E7E7E]'>
                                  <span className='text-[#3BB77E] text-xl'>
                                    {seconds}
                                  </span>
                                  Sec
                                </div>
                              </div>
                            )
                          }
                        />
                      </div>

                      <div className='py-[20px] wrap px-[20px] product-one mt-[20px] rounded-md'>
                        <h3 className='product-title line-clamp-2'>
                          {product.productName}
                        </h3>
                        <Rating
                          name='half-rating-read'
                          value={product.rating}
                          precision={0.5}
                          readOnly
                          size='small'
                        />
                        <p className='text-[#B6B6B6] text-sm'>
                          By{' '}
                          <span className='text-[#3BB77E]'>
                            {product.brand}
                          </span>
                        </p>
                        <div className='flex justify-between items-center'>
                          <div>
                            <span className='price text-md text-[#3BB77E] font-bold'>
                              ₹{product.price}
                            </span>
                            <span className='old-price strike'>
                              ₹{product.oldPrice}
                            </span>
                          </div>

                          <Link
                            className='add  bg-[#3BB77E] text-white hover:bg-[#29A56C] transform transition-transform hover:text-white duration-200 hover:-translate-y-1'
                            to=''
                          >
                            <FiShoppingCart className='mr-2' />
                            Add
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
