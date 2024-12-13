/* eslint-disable react/prop-types */
import {
   FiArrowLeft,
   FiArrowRight,
   FiHeart,
   FiSearch,
   FiShuffle,
} from 'react-icons/fi';
import Carousel from 'react-multi-carousel';
import { Link, useParams } from 'react-router-dom';
import {  Rating } from '@mui/material';
import { useEffect, useState } from 'react';
import { FiChevronDown, FiChevronUp, FiShoppingCart } from 'react-icons/fi';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import { useDispatch, useSelector } from 'react-redux';
import TabDetails from '../Common/TabDetails';
import toast from 'react-hot-toast';
import { addToWishlist } from '../store/wishlistSlice';
import { addToCompare } from '../store/productSlice';
import { addToCart } from '../store/cartSlice';

const responsive = {
   desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1,
   },
   tablet: { breakpoint: { max: 1024, min: 464 }, items: 2, slidesToSlide: 1 },
   mobile: { breakpoint: { max: 464, min: 0 }, items: 1, slidesToSlide: 1 },
};


const ProductDetailsPage = () => {
  const [selectedWeight, setSelectedWeight] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [image, setMainImage] = useState(null);



  const { productId } = useParams();
  const { data } = useSelector((state) => state.data);
  const productIdInt = parseInt(productId);

  const productData = data.flatMap((item) =>
    item.items.flatMap((items) => items.products)
  );
  const product = productData.find((product) => product.id === productIdInt);


  const ExistProduct = useSelector((state) =>
    state.wishlist.items.find((item) => item.id === productData.id)
  );
  const ExistCompare = useSelector((state) =>
    state.product.productItems.some((item) => item.id === product.id)
  );
  const CompareLength = useSelector(
    (state) => state.product.productItems.length
  );
  const limit = useSelector((state) => state.product.limit);

  const dispatch = useDispatch();

  useEffect(() => {
    setMainImage(product.productImages[0]);
  }, []);

  const handleWeightSelect = (weight) => setSelectedWeight(weight);
  const handleImageClick = (newImage) => setMainImage(newImage);

  const handleAddToCart = () => {
    if(product.weight.length > 1 && !selectedWeight) {
      toast.error('Please select weight');
      return;
    }
  
     dispatch(addToCart({ product, quantity }));
    toast.success('Product added to cart!');
    setQuantity(1);
  };

  const increaseQuantity = () =>
    setQuantity((prevQuantity) => prevQuantity + 1);

  const decreaseQuantity = () =>
    quantity > 1 && setQuantity((prevQuantity) => prevQuantity - 1);



  const handleAddToWishlist = () => {
    const stockStatus = Math.random() < 0.8 ? 'In Stock' : 'Out of Stock';
    if (!ExistProduct) {
      dispatch(
        addToWishlist({
          id: product.id,
          name: product.productName,
          price: product.price,
          rating: product.rating,
          image: product.catImg,
          stockStatus: stockStatus,
          inStock: stockStatus === 'In Stock',
        })
      );
      toast.success('Product added to wishlist!');
    } else {
      toast.error('Product already added in wishlist');
    }
  };

  const handleAddCompare = () => {
    const stockStatus = Math.random() < 0.8 ? 'In Stock' : 'Out of Stock';
    if (CompareLength < limit) {
      if (!ExistCompare) {
        dispatch(
          addToCompare({
            id: product.id,
            name: product.productName,
            image: product.catImg,
            price: product.price,
            rating: product.rating,
            stockStatus: stockStatus,
            description: product.description,
            weight: product.weight,
            inStock: stockStatus === 'In Stock',
          })
        );
        toast.success('Product added to Compare!');
      } else {
        toast.error('Product already in Compare List!');
      }
    } else {
      toast.error('Sorry! You can only compare 4 products at a time.');
    }
  };


  return (
    <div className='w-[90%] mx-auto py-4'>
      <div className='flex justify-center gap-10'>
        <div className='w-[40%] flex flex-col space-y-4'>
          <div className='border border-[#ececec] rounded-[15px]  relative'>
            <Zoom classDialog='custom-zoom1' zoomMargin={45}>
              <img src={image} alt='product' className='rounded-[15px] p-2' />
            </Zoom>
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
            {product.productImages.map((img, index) => (
              <div key={index} className={`m-2`}>
                <img
                  src={img}
                  alt='product'
                  className={`rounded-md cursor-pointer object-cover ${
                    image === img ? 'border-2 border-[#29A56C]  p-3' : ''
                  }`}
                  onClick={() => handleImageClick(img)}
                />
              </div>
            ))}
          </Carousel>
        </div>
        <div className='w-1/2 px-6 flex flex-col space-y-4 mt-1'>
          <span className='stock-status out-stock w-1/3'> {product.brand}</span>
          <h3 className='title-detail max-w-[80%]'>
            <Link className='text-heading text-4xl dark:text-white' to='#'>
              {product.productName}
            </Link>
          </h3>

          <div className='flex items-center text-sm dark:text-white dark:opacity-100 mb-3'>
            <Rating
              name='half-rating-read'
              value={parseFloat(product.rating)}
              precision={0.5}
              readOnly
              className='rating-medium'
            />
            <div>
              <span className='text-[#253D4E] ml-2 dark:text-white dark:opacity-100'>
                {product.rating}
              </span>
            </div>
          </div>

          <div className='product-price primary-color flex-wrap '>
            <span className='current-price text-brand'>₹{product.price}</span>
            <span>
              <span className='save-price  ml-[15px]'>
                {product.discount}% Off
              </span>
              <span className='old-price font-md ml-[15px]'>
                ₹{product.oldPrice}
              </span>
            </span>
          </div>
          <p className='text-md dark:text-white dark:opacity-100 max-w-[80%]'>
            {product.description}
          </p>
          {product.weight.length > 1 && (
            <div className='select-weight'>
              <p className='font-semibold mb-1 dark:text-white'>
                Size / Weight:
              </p>
              <div className='flex flex-wrap space-x-2'>
                {product.weight.map((weightOption, index) => {
                  return (
                    <button
                      key={index}
                      className={`py-1 px-3 rounded border ${
                        selectedWeight === weightOption
                          ? 'text-white bg-[#3BB77E]'
                          : 'bg-white dark:bg-gray-900'
                      }`}
                      onClick={() => handleWeightSelect(weightOption)}
                    >
                      {weightOption} g
                    </button>
                  );
                })}
              </div>
            </div>
          )}
          <div className='detail-extralink space-y-4'>
            <div className='detail-qty border radius flex space-x-2'>
              <button onClick={decreaseQuantity} className='qty-down'>
                <FiChevronDown />
              </button>
              <span className='qty-val'>{quantity}</span>
              <button onClick={increaseQuantity} className='qty-up'>
                <FiChevronUp className='' />
              </button>
            </div>
            <div className='product-extra-link2 flex space-x-2'>
              <button
                className='btn button-add-to-cart'
                onClick={() => handleAddToCart()}
              >
                <FiShoppingCart className='custom-inline-flex mr-2' size={20} />
                Add to cart
              </button>
              <button
                className='details hover-up border border-gray-300 text-gray-900 rounded-md transition-all duration-500 ease-out py-[9px] px-[5px]'
                onClick={() => handleAddToWishlist()}
              >
                <FiHeart className='custom-inline-flex mx-2 icon' size={22} />
              </button>
              <Link
                to='#'
                className='details hover-up border border-gray-300 text-gray-900 rounded-md transition-all duration-500 ease-out py-[9px] px-[5px]'
                onClick={handleAddCompare}
              >
                <FiShuffle className='custom-inline-flex mx-2 icon' size={22} />
              </Link>
            </div>
          </div>

          <div className='flex justify-between items-start w-[70%] text-sm'>
            <ul className='space-y-3 mt-4'>
              <li className='mb-1'>
                Type: <span className='text-brand'>Organic</span>
              </li>
              <li className='mb-1'>
                MFG:<span className='text-brand'> Jun 4.2024</span>
              </li>
              <li>
                LIFE: <span className='text-brand'>70 days</span>
              </li>
            </ul>
            <ul className='space-y-3 mt-4'>
              <li className='mb-1'>
                SKU:{' '}
                <Link to='#' className='text-brand'>
                  FWM15VKT
                </Link>
              </li>
              <li className='mb-1'>
                Tags:{' '}
                <Link to='#' rel='tag' className='text-brand'>
                  Snack
                </Link>
                ,{' '}
                <Link to='#' rel='tag' className='text-brand'>
                  Organic
                </Link>
                ,{' '}
                <Link to='#' rel='tag' className='text-brand'>
                  Brown
                </Link>
              </li>
              <li>
                Stock:
                <span className='in-stock text-brand ml-1'>
                  8 Items In Stock
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <TabDetails />
      {/* <div className='pt-10'>
        <div className='section-title'>
          <h5 className='dark:text-white text-2xl'>Related products</h5>
        </div>
        <div className='w-[20%] px-2 pb-12'>
               <Card
                  productData={product}
                  currentImage={product.productImages[0]}
                  image2={product.productImages[1]}
               />
            </div>
      </div> */}
    </div>
  );
};
const CustomLeftArrow = ({ onClick }) => (
   <button
      type='button'
      onClick={onClick}
      className='absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#3BB77E] text-white rounded-full w-10 h-10 flex items-center justify-center text-2xl hover:bg-[#2A9F85] hover:text-white'
   >
      <FiArrowLeft />
   </button>
);

const CustomRightArrow = ({ onClick }) => (
   <button
      type='button'
      onClick={onClick}
      className='absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#3BB77E] text-white rounded-full w-10 h-10 flex items-center justify-center text-2xl hover:bg-[#2A9F85] hover:text-white'
   >
      <FiArrowRight />
   </button>
);

export default ProductDetailsPage;
