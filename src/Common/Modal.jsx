/* eslint-disable react/prop-types */
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';

import {
  FiArrowLeft,
  FiArrowRight,
  FiChevronDown,
  FiChevronUp,
  FiSearch,
  FiShoppingCart,
  FiX,
} from 'react-icons/fi';
import { Rating } from '@mui/material';
import { Link } from 'react-router-dom';
import 'react-medium-image-zoom/dist/styles.css';
import ImageZoom from 'react-medium-image-zoom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import { toast } from 'react-hot-toast';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1,
  },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 2, slidesToSlide: 1 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1, slidesToSlide: 1 },
};

export default function QuickViewModal({ open, handleClose, productData }) {
  const [mainImage, setMainImage] = useState(productData.catImg);
  const [quantity, setQuantity] = useState(1);
  const [selectedWeight, setSelectedWeight] = useState(productData.weight[0]);
  const dispatch = useDispatch();

  useEffect(() => {
    setMainImage(productData.catImg);
  }, [productData.catImg]);

  const handleImageClick = (image) => {
    setMainImage(image);
  };
  const handleWeightSelect = (weight) => {
    setSelectedWeight(weight);
  };

const handleAddToCart = () => {
  if (productData.weight.length > 1 && !selectedWeight) {
    toast.error('Please select weight');
    return;
  }

  dispatch(addToCart({ product: productData, quantity }));
  toast.success('Product added to cart!');
  setQuantity(1);
};

  const increaseQuantity = () =>
    setQuantity((prevQuantity) => prevQuantity + 1);

  const decreaseQuantity = () =>
    quantity > 1 && setQuantity((prevQuantity) => prevQuantity - 1);


  

  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog
        as='div'
        className='fixed inset-0 z-[1000] overflow-hidden'
        open={open}
        onClose={handleClose}
      >
        <Transition.Child
          as={Fragment}
          enter='ease-in-out duration-500'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in-out duration-500'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black/25' />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0 scale-95'
          enterTo='opacity-100 scale-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100 scale-100'
          leaveTo='opacity-0 scale-95'
        >
          <div className='flex items-center justify-center w-full h-full'>
            <Dialog.Panel className='relative flex flex-col w-4/5 h-[90%] max-w-4xl max-h-4xl bg-white p-6 text-left rounded-2xl shadow-xl'>
              <div
                className='absolute top-0  right-1 p-2 cursor-pointer border border-[#3BB77E] hover:bg-[#3BB77E] hover:text-white rounded-full dark:bg-black dark:text-white dark:border-white'
                onClick={handleClose}
              >
                <FiX style={{ fontSize: '18px' }} />
              </div>

              <div className='relative flex justify-center'>
                <div className='w-1/2 flex flex-col justify-start'>
                  <div className='border border-[#ececec] rounded-[15px] p-2 relative'>
                    <ImageZoom
                      classDialog='custom-zoom'
                      zoomMargin={20}
                      overlayBgColorEnd='rgba(56, 58, 89, 1)'
                      zoomImg={{ src: mainImage, alt: '' }}
                      ZoomContent={({ img }) => <div>{img}</div>}
                    >
                      <img
                        src={mainImage}
                        alt={mainImage}
                        className='h-[400px] w-full rounded-[15px] object-inherit'
                      />
                    </ImageZoom>
                    <FiSearch
                      className='absolute top-4 right-4 text-2xl'
                      color='gray'
                    />
                  </div>

                  <Carousel
                    responsive={responsive}
                    showDots={false}
                    infinite
                    autoPlay
                    draggable={false}
                    autoPlaySpeed={3500}
                    customLeftArrow={<CustomLeftArrow />}
                    customRightArrow={<CustomRightArrow />}
                  >
                    {productData.productImages.map((image, index) => (
                      <div
                        className={`p-1 px-2 mt-3 border-2  ${
                          image === mainImage
                            ? 'border-[#3BB77E] rounded-2xl'
                            : 'border-transparent'
                        }`}
                        key={index}
                      >
                        <img
                          src={image}
                          alt=''
                          className='rounded-md w-[120px] h-[120px] cursor-pointer object-cover'
                          onClick={() => handleImageClick(image)}
                        />
                      </div>
                    ))}
                  </Carousel>
                </div>
                <div className='w-1/2 px-6 flex flex-col'>
                  <span className='stock-status out-stock w-1/3'>
                    {productData.brand}
                  </span>
                  <h3 className='title-detail'>
                    <Link className='text-heading' to='#'>
                      {productData.productName}
                    </Link>
                  </h3>

                  <div className='flex items-center text-sm dark:text-white dark:opacity-100 mb-3'>
                    <Rating
                      name='half-rating-read'
                      value={parseFloat(productData.rating)}
                      precision={0.5}
                      readOnly
                      className='rating-medium'
                    />
                    <div>
                      <span className='text-[#253D4E] ml-2 dark:text-white dark:opacity-100'>
                        {productData.rating}
                      </span>
                    </div>
                  </div>
                  <p className='text-md dark:text-black dark:opacity-100 line-clamp-4'>
                    {productData.description}
                  </p>
                  <div className='product-price primary-color flex-wrap '>
                    <span className='current-price text-brand'>
                      ₹{productData.price}
                    </span>
                    <span>
                      <span className='save-price  ml-[15px]'>
                        {productData.discount}% Off
                      </span>
                      <span className='old-price font-md ml-[15px]'>
                        ₹{productData.oldPrice}
                      </span>
                    </span>
                  </div>
                  <div className='detail-extralink'>
                    <div className='detail-qty border radius'>
                      <button className='qty-down' onClick={decreaseQuantity}>
                        <FiChevronDown />
                      </button>
                      <span className='qty-val'>{quantity}</span>
                      <button className='qty-up' onClick={increaseQuantity}>
                        <FiChevronUp className='' />
                      </button>
                    </div>
                    <div className='product-extra-link2'>
                      <button
                       
                        className='btn button-add-to-cart'
                        onClick={handleAddToCart}
                      >
                        <FiShoppingCart
                          className='custom-inline-flex mr-2'
                          size={20}
                        />
                        Add to cart
                      </button>
                    </div>
                  </div>
                  {productData.weight.length > 1 && (
                    <div className='select-weight'>
                      <p className='font-semibold mb-1'>Select Weight:</p>
                      <div className='flex flex-wrap'>
                        {productData.weight.map((weightOption, index) => (
                          <button
                            key={index}
                            className={`mr-2 mb-2 py-1 px-3 rounded border ${
                              selectedWeight === weightOption
                                ? ' text-white   bg-[#3BB77E]'
                                : 'bg-white dark:bg-black dark:text-white'
                            }`}
                            onClick={() => handleWeightSelect(weightOption)}
                          >
                            {weightOption} g
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className='font-base mt-2'>
                    <ul>
                      <li className='mb-[5px] dark:text-black'>
                        Vendor:{' '}
                        <span className='text-brand'>{productData.brand}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
}

const CustomLeftArrow = ({ onClick }) => (
  <button
    type='button'
    onClick={onClick}
    className='absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#F2F3F4] text-[#3BB77E] rounded-full w-10 h-10 flex items-center justify-center text-2xl hover:bg-[#3BB77E] hover:text-white '
  >
    <FiArrowLeft />
  </button>
);

const CustomRightArrow = ({ onClick }) => (
  <button
    type='button'
    onClick={onClick}
    className='absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#F2F3F4] text-[#3BB77E] rounded-full w-10 h-10 flex items-center justify-center text-2xl hover:bg-[#3BB77E] hover:text-white'
  >
    <FiArrowRight />
  </button>
);
