/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import sliderImage1 from '../../assets/slider-1.png';
import sliderImage2 from '../../assets/slider-2.png';
import sliderImage5 from '../../assets/slider-5.png';
import sliderImage6 from '../../assets/slider-6.png';

import { IoIosArrowRoundForward, IoIosArrowRoundBack } from 'react-icons/io';
import 'react-multi-carousel/lib/styles.css';
import '../../index.css';

export default function HomeSlider() {
   const responsive = {
      desktop: {
         breakpoint: { max: 3000, min: 1024 },
         items: 1,
         slidesToSlide: 1,
      },
      tablet: {
         breakpoint: { max: 1024, min: 464 },
         items: 1,
         slidesToSlide: 1,
      },
      mobile: {
         breakpoint: { max: 464, min: 0 },
         items: 1,
         slidesToSlide: 1,
      },
   };
   

   return (
     <section className='px-4 pt-4 pb-6'>
       <div className='w-full overflow-hidden relative rounded-2xl'>
         <Carousel
           responsive={responsive}
           showDots={true}
           infinite
           autoPlay
           autoPlaySpeed={3000}
           // removeArrowOnDeviceType={['tablet', 'mobile']}
           customButtonGroup={<></>}
           customLeftArrow={<CustomLeftArrow />}
           customRightArrow={<CustomRightArrow />}
           dotListClass='custom-dot-list'
         >
           <div>
             <img src={sliderImage1} alt='slider' className='w-full' />
             <div className='absolute top-1/2 left-[-80px] transform -translate-x-72 -translate-y-1/2 text-center w-full z-10'>
               <h2 className='text-7xl text-gray-800 font-bold mb-5'>
                 Don’t miss amazing
                 <br />
                 grocery deals
               </h2>
               <p className='text-3xl text-gray-500 font-medium mb-12'>
                 Save up to 50% off on your first order
               </p>
             </div>
           </div>
           <div>
             <img src={sliderImage2} alt='slider' className='w-full' />
             <div className='absolute top-1/2 left-[-80px] transform -translate-x-72 -translate-y-1/2 text-center w-full z-10'>
               <h2 className='text-7xl text-gray-800 font-bold mb-5'>
                 Fresh Vegetables
                 <br />
                 Big discount
               </h2>
               <p className='text-3xl text-gray-500 font-medium mb-12'>
                 Save up to 50% off on your first order
               </p>
             </div>
           </div>
           <div className='relative'>
             <img src={sliderImage5} alt='slider' className='w-full' />
             <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center flex-col z-10'>
               <div className='text-center'>
                 <h2 className='text-7xl text-gray-800 font-bold mb-5'>
                   Don't miss
                   <br />
                   Amazing deals
                 </h2>
                 <p className='text-3xl text-gray-500 font-medium mb-12'>
                   For your first order
                 </p>
               </div>
             </div>
           </div>
           <div className='relative'>
             <img src={sliderImage6} alt='slider' className='w-full' />
             <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center flex-col z-10'>
               <div className='text-center'>
                 <h2 className='text-7xl text-gray-800 font-bold mb-5'>
                   Fresh Vegetables
                   <br />
                   Big discount
                 </h2>
                 <p className='text-3xl text-gray-500 font-medium mb-12'>
                   Get Free Delivery
                 </p>
               </div>
             </div>
           </div>
         </Carousel>
       </div>
     </section>
   );
}

const CustomLeftArrow = ({ onClick }) => (
   <button
      type='button'
      onClick={onClick}
      className='custom-arrow custom-prev absolute rounded-full'
   >
      <IoIosArrowRoundBack size={40} />
   </button>
);

const CustomRightArrow = ({ onClick }) => (
   <button
      type='button'
      onClick={onClick}
      className='custom-arrow custom-next absolute rounded-full'
   >
      <IoIosArrowRoundForward size={40} />
   </button>
);
