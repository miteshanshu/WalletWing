/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { useMemo, useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';
import { Rating, Slider } from '@mui/material';
import { FiFilter } from 'react-icons/fi';

import category1 from '../assets/category-1.svg';
import category2 from '../assets/category-2.svg';
import category3 from '../assets/category-3.svg';
import category4 from '../assets/category-4.svg';
import banner11 from '../assets/banner-11.png';

const SideBar = ({
  productData,
  setBrand,
  setPriceRange,
  priceRange,
  HighestPrice,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [startAnimation, setStartAnimation] = useState(false);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);

  const data = useMemo(
    () => [
      {
        src: category1,
        alt: 'category-1',
        name: 'groceries',
        count: 30,
      },
      {
        src: category2,
        alt: 'category-2',
        name: 'electronics',
        count: 40,
      },
      {
        src: category3,
        alt: 'category-3',
        name: 'fashion',
        count: 20,
      },
      {
        src: category4,
        alt: 'category-4',
        name: 'home decor',
        count: 51,
      },
      {
        src: category4,
        alt: 'category-4',
        name: 'Fresh',
        count: 52,
      },
    ],
    []
  );

  const categoryRef = useRef(null);

  const handleScroll = () => {
    const offsetTop = categoryRef.current.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (offsetTop < windowHeight - 400) {
      setIsVisible(true);
      window.removeEventListener('scroll', handleScroll);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const resetFilters = () => {
    setBrand('');
    setPriceRange([minPrice, HighestPrice])
  };

  const handleAnimationStart = () => {
    setStartAnimation(true);
  };

  useEffect(() => {
    if (productData.length > 0) {
      const min = Math.min(...productData.map((product) => product.price));
      const max = Math.max(...productData.map((product) => product.price));
      setMinPrice(min);
      setMaxPrice(max);
      setPriceRange([min, max]);
    }
  }, []);

  const handlePriceRangeChange = (event, newValue) => {
    setPriceRange(newValue);
  };
  const handleBrandChange = (event) => {
    setBrand(event.target.value);
  };


  return (
    <div>
      <div className='sidebar-widget mb-8'>
        <h3 className='section-title mb-8'>Category</h3>
        {data.map((item, index) => (
          <ul className='cursor-pointer' key={index}>
            <Link
              to={`/${item.name.toLowerCase().replace(/\s+/g, '-')}`}
              className='block'
            >
              <li ref={index === 0 ? categoryRef : null}>
                <img src={item.src} alt={item.alt} className='w-[40px]' />
                <span className='text-sm'>{item.name.toUpperCase()}</span>

                <span className='count'>
                  {isVisible ? (
                    <CountUp
                      start={startAnimation ? 0 : item.count}
                      end={item.count}
                      duration={15}
                      onStart={handleAnimationStart}
                    />
                  ) : (
                    <span style={{ transition: 'opacity 0.5s' }}>
                      {item.count}
                    </span>
                  )}
                </span>
              </li>
            </Link>
          </ul>
        ))}
      </div>
      <div className='sidebar-widget price_range range mb-8'>
        <h5 className='section-title style-1 mb-2'>Fill by price</h5>
        {/* Material-UI Slider */}
        <div className='price-filter-inner'>
          <Slider
            value={priceRange}
            onChange={handlePriceRangeChange}
            min={minPrice || 0}
            max={maxPrice || HighestPrice}
            valueLabelDisplay='auto'
            aria-labelledby='range-slider'
            sx={{
              color: '#3BB77E',
              '& .MuiSlider-thumb': {
                backgroundColor: '#3BB77E',
              },
              '& .MuiSlider-track': {
                backgroundColor: '#3BB77E',
              },
              '& .MuiSlider-rail': {
                backgroundColor: '#3BB77E',
              },
            }}
          />
          <div className='flex justify-between'>
            <div className='caption'>
              From: <strong className='text-brand'>₹{priceRange[0]}</strong>
            </div>
            <div className='caption'>
              To: <strong className='text-brand'>₹{priceRange[1]}</strong>
            </div>
          </div>
        </div>
        <div className='mb-4 mt-4'>
          <label className='font-bold'>Brand</label>
          <div
            className='mb-4 mt-2'
            style={{ maxHeight: '270px', overflowY: 'auto' }}
          >
            {[...new Set(productData.map((item) => item.brand))]
              .filter((brand) => brand)
              .map((brand, index) => (
                <div
                  key={index}
                  className='flex items-center cursor-pointer text-gray-500'
                >
                  <input
                    type='radio'
                    name='brand'
                    id={`brand${index}`}
                    value={brand}
                    className='h-4 w-4 text-gray-600 border-2 my-1 border-gray-300 mr-2 rounded-sm accent-pink-500'
                    onChange={handleBrandChange}
                  />
                  <label
                    htmlFor={`brand${index}`}
                    className='ml-2 text-[#687188] text-[15px] my-0.5 dark:text-white'
                  >
                    {brand}
                  </label>
                </div>
              ))}
          </div>
        </div>
        <Link
          to='#'
          onClick={resetFilters}
          className='inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#3BB77E] hover:bg-indigo-700'
        >
          <FiFilter className='mr-2' />
          Reset Filter
        </Link>
      </div>
      <div className='sidebar-widget product-sidebar mb-6 p-6 rounded-md'>
        <h5 className='section-title style-1 mb-6'>New products</h5>
        {productData.slice(0, 3).map((item, index) => (
          <div className='single-post clearfix' key={index}>
            <div className='image'>
              <img src={item.catImg} alt='product-img' />
            </div>
            <div className='content pt-3'>
              <h5>
                <Link to={`/product/details/${item.id}`}>
                  {item.productName}
                </Link>
              </h5>
              <p className='price mb-0 mt-1'>₹{item.price}</p>
              <div className='product-rate'>
                <Rating
                  name='half-rating-read'
                  value={parseFloat(item.rating)}
                  precision={0.5}
                  readOnly
                  className='rating'
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className='banner-img animate-fadeIn lg:mb-0 lg:block hidden'>
        <img src={banner11} alt='' />
        <div className='banner-text'>
          <span>Organic</span>
          <h4>
            Save 17% <br />
            on <span className='text-brand'>Organic</span>
            <br />
            Juice
          </h4>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
