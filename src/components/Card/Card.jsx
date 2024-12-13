/* eslint-disable react/prop-types */
import { useEffect, useMemo, useState } from 'react';
import Rating from '@mui/material/Rating';
import { AiOutlineHeart, AiOutlineSwap, AiOutlineEye } from 'react-icons/ai';
import { FaTruckArrowRight } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import QuickViewModal from '../../Common/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { addToWishlist } from '../../store/wishlistSlice';
import toast from 'react-hot-toast';
import { addToCompare } from '../../store/productSlice';

const Card = ({ productData }) => {
  const [currentImage, setCurrentImage] = useState(productData.catImg);
  const [hovered, setHovered] = useState(false);
  const memoizedCatImg = useMemo(() => productData.catImg, [productData]);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const ExistProduct = useSelector((state) =>
    state.wishlist.items.find((item) => item.id === productData.id)
  );
  const ExistCompare = useSelector((state) => state.product.productItems.find((item) => item.id === productData.id));
  const CompareLength = useSelector((state) => state.product.productItems.length);
  const limit = useSelector((state) => state.product.limit);
 
 

  useEffect(() => {
    setCurrentImage(memoizedCatImg);
  }, [memoizedCatImg]);
  const handleMouseMove = () => {
    if (!hovered) {
      setHovered(true);
      if (productData.productImages[1]) {
        setCurrentImage(productData.productImages[1]);
      } else {
        setCurrentImage(productData.productImages[0]);
      }
    }
  };



  const handleAddToWishlist = () => {
    const stockStatus = Math.random() < 0.8 ? 'In Stock' : 'Out of Stock';
    if (!ExistProduct) {
      dispatch(
        addToWishlist({
          id: productData.id,
          name: productData.productName,
          price: productData.price,
          rating: productData.rating,
          image: productData.catImg,
          stockStatus: stockStatus,
          inStock: stockStatus === 'In Stock',
        })
      );
      toast.success('Product added to wishlist!');
    } else {
      toast.error('Product already added in wishlist');
    }
  };

  const handleMouseLeave = () => {
    setHovered(false);

    setCurrentImage(productData.productImages[0]);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


    const handleAddCompare = () => {
      const stockStatus = Math.random() < 0.8 ? 'In Stock' : 'Out of Stock';
    if(CompareLength < limit) {
  if (!ExistCompare) {
    dispatch(
      addToCompare({
        id: productData.id,
        name: productData.productName,
        image: productData.catImg,
        price: productData.price,
        rating: productData.rating,
        stockStatus: stockStatus,
        description: productData.description,
        weight: productData.weight,
        inStock: stockStatus === 'In Stock',
      })
    );
    toast.success('Product added to Compare!');
  } else {
    toast.error('Product already in Compare List!');
  }
    } else {
      toast.error('Sorry! You can only compare 4 products at a time.');
      return;
    }
    
    };

  return (
    <div
      className='py-4 px-3 w-full cardDesign relative'
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <span className='badge absolute top-0 left-0 z-[50] text-white bg-red-500 px-2 py-1 rounded'>
        {productData.discount}% Off
      </span>
      <Link to={`/product/details/${productData.id}`}>
        <div className='imgWrapper relative flex items-center justify-center'>
          <img
            src={currentImage}
            alt='product'
            className='w-[220px] h-[220px] object-inherit rounded-md'
          />
          <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center'>
            <ul className='bg-white dark:bg-gray-900 w-[200px] h-auto py-2 px-2 border border-solid border-[#BCE3C9] flex justify-between items-center product_list'>
              <Link tooltip='Add to Wishlist' onClick={handleAddToWishlist}>
                <li className='product_border'>
                  <AiOutlineHeart size={25} />
                </li>
              </Link>
              <Link tooltip='Compare' onClick={handleAddCompare}>
                <li className='product_border'>
                  <AiOutlineSwap size={25} />
                </li>
              </Link>
              <Link tooltip='Quick View' onClick={handleOpen}>
                <li className='product_border'>
                  <AiOutlineEye size={25} />
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </Link>
      <QuickViewModal
        open={open}
        handleClose={handleClose}
        productData={productData}
      />

      <div className='productInfo min-h-[180px] gap-2 flex  justify-end flex-col'>
        <span className='opacity-50 text-black  text-sm dark:text-white dark:opacity-100 '>
          {productData.brand}
        </span>
        <p className='text-[16px] max-w-[95%] w-[260px] font-semibold dark:text-white dark:opacity-100 truncate'>
          {productData.productName}
        </p>

        <div className='flex items-center text-sm  dark:text-white dark:opacity-100'>
          <Rating
            name='half-rating-read'
            value={parseFloat(productData.rating)}
            precision={0.5}
            readOnly
            className='rating'
          />
          <div>
            <span className='text-[#253D4E] ml-2 dark:text-white dark:opacity-100'>
              {productData.rating}
            </span>
          </div>
        </div>
        <div className='flex justify-between items-center dark:text-white dark:opacity-100 flex-wrap'>
          <div className='flex  justify-between items-center w-full mb-3'>
            <p className='text-[#3BB77E] font-bold text-[16px] dark:text-white'>
              ₹{productData.price}
            </p>
            <p className='text-[#253D4E] ml-2 line-through text-[14px] dark:text-white'>
              ₹{productData.oldPrice}
            </p>
          </div>
          <Link to={`/product/details/${productData.id}`} className='w-full'>
            <div className='w-full flex justify-center items-center'>
              <button className='text-white product-btn flex justify-center items-center w-full '>
                Shop Now
                <FaTruckArrowRight className='inline-block ml-2 icon animate-icon' />
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
