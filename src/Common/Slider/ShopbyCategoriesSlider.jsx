/* eslint-disable react/prop-types */
import { useMemo, useRef } from 'react';
import {
   IoIosArrowRoundForward,
   IoIosArrowRoundBack,
   IoIosArrowForward,
} from 'react-icons/io';
import Carousel from 'react-multi-carousel';
import category1 from '../../assets/category-1.svg';
import category2 from '../../assets/category-2.svg';
import category3 from '../../assets/category-3.svg';
import category5 from '../../assets/category-5.svg';
import category6 from '../../assets/category-6.svg';
import category8 from '../../assets/category-8.svg';
import category9 from '../../assets/category-9.svg';
import category10 from '../../assets/category-10.svg';
import './Slider.css';
import 'react-multi-carousel/lib/styles.css';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';

export default function ShopbyCategoriesSlider() {
   const data = useMemo(
     () => [
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
     ],
     []
   );
   const carouselRef = useRef(null);

   const nextSlide = () => {
      carouselRef.current.next();
   };

   const previousSlide = () => {
      carouselRef.current.previous();
   };
   const responsive = {
      desktop: {
         breakpoint: { max: 3000, min: 1024 },
         items: 8,
         slidesToSlide: 1,
      },
      tablet: {
         breakpoint: { max: 1024, min: 464 },
         items: 6,
         slidesToSlide: 1,
      },
      mobile: {
         breakpoint: { max: 464, min: 0 },
         items: 4,
         slidesToSlide: 1,
      },
   };
   const customBeforeChange = (nextSlide, { currentSlide }) => {
      if (nextSlide !== currentSlide) {
         return false;
      }
      return true;
   };

   return (
      <div className='p-6 mt-6'>
         <div className='w-full rounded-2xl overflow-hidden relative'>
            <div className='flex items-center paragraph'>
               <div className='px-2 flex justify-center items-center gap-8'>
                  <h1 className='commonHeading'>Shop by Categories</h1>
                  <div className='flex justify-center items-center gap-1 cursor-pointer'>
                     <Link to='/product'>
                     <h3>All Categories</h3>
                     </Link>
                     <IoIosArrowForward />
                  </div>
               </div>
            </div>

            <Carousel
               responsive={responsive}
               showDots={false}
               infinite
               autoPlay
               autoPlaySpeed={3000}
               beforeChange={customBeforeChange}
               className='pt-[3rem] px-4 pb-[2rem] relative'
               arrows={false}
               ref={carouselRef}
            >
               {data.map((item, id) => (
                 <Link to={item.link.replace(/\s+/g, '-').toLowerCase()} key={id}>
                  <div key={id} className='item category'>
                     <img
                        src={item.src}
                        alt={item.name}
                        className='Shop-by-Categories-img'
                     />

                     <h3 className='text-[#253d4e] text-md'>{item.name}</h3>
                  </div>
                  </Link>
               ))}
            </Carousel>
            <div className='custom-arrowSlider absolute top-0 right-0  mx-5'>
               <button
                  className='custom-nextSlider rounded-full mr-8'
                  onClick={previousSlide}
               >
                  <IoIosArrowRoundBack size={35} />
               </button>
               <button
                  className='custom-prevSlider rounded-full '
                  onClick={nextSlide}
               >
                  <IoIosArrowRoundForward size={35} />
               </button>
            </div>
         </div>
      </div>
   );
}
