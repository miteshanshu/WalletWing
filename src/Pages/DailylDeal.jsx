/* eslint-disable react/prop-types */
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import { FaTruckArrowRight } from 'react-icons/fa6';
import banner4 from '../assets/banner-4.png';
import {
   CustomLeftArrow,
   CustomRightArrow,
} from '../components/Card/DailyDealCard';
import DailyDealCard from '../components/Card/DailyDealCard';
import { useSelector } from 'react-redux';
import { useState } from 'react';



 const responsive = {
   desktop: {
     breakpoint: { max: 3000, min: 1024 },
     items: 4,
     slidesToSlide: 1,
   },
   tablet: {
     breakpoint: { max: 1024, min: 464 },
     items: 2,
     slidesToSlide: 1,
   },
   mobile: {
     breakpoint: { max: 464, min: 0 },
     items: 1,
     slidesToSlide: 1,
   },
 };

const DailyDeal = () => {

   const [filteredData, setFilteredData] = useState([]);
   const [activeTab, setActiveTab] = useState(null);



   const filterData = (catName) => {
      if (activeTab === catName) {
       setActiveTab(null);
       setFilteredData([]);
      } else {
         setActiveTab(catName);
         setFilteredData(
            data.filter((item) => item.cat_name === catName)
         );
      }
   }

  
   const data  = useSelector((state) => state.data.data);
   return (
     <div className='p-6  banner-img '>
       <div className='px-2 pb-10 flex justify-between '>
         <h1 className='commonHeading'>Daily Best Sells</h1>
         <div className='flex items-center justify-center ml-5  cursor-pointer paragraph'>
           {data.map((item, index) => (
             <p
               key={index}
               className={` ${
                 activeTab === item.cat_name ? 'active-tab' : ''
               }`}
               onClick={() => filterData(item.cat_name)}
             >
               {item.cat_name.replace(/-/g, ' ').charAt(0).toUpperCase() +
                 item.cat_name.slice(1)}
             </p>
           ))}
         </div>
       </div>
       <div className='flex justify-between items-start'>
         <div className='relative w-[25%]'>
           <div>
             <img
               src={banner4}
               alt='banner4'
               className='rounded-[15px] h-[450px] bg-cover w-full'
             />
           </div>
           <div className='absolute top-10 left-10'>
             <div className='max-w-[280px] flex justify-center items-center'>
               <h2 className='text-[43px] text-[#253D4E]  leading-12 font-bold'>
                 Bring nature into your home
               </h2>
             </div>
             <div>
               <button className='bg-[#253d4e] text-white primary-btn flex justify-center items-center mt-12'>
                 Shop Now
                 <FaTruckArrowRight className='inline-block ml-2 icon animate-icon' />
               </button>
             </div>
           </div>
         </div>
         <div className='w-[73%]'>
           <Carousel
             responsive={responsive}
            //  autoPlay
             infinite={true}
             slidesToSlide={1}
             customLeftArrow={<CustomLeftArrow />}
             customRightArrow={<CustomRightArrow />}
           >
             {(filteredData.length > 0 ? filteredData : data)
               .flatMap((item) => item.items.flatMap((items) => items.products))
               .map((product, index) => (
                 <div className='w-[20%] px-2 pb-12' key={index}>
                   <DailyDealCard
                     productData={product}
                     currentImage={product.catImg}
                     image2={product.productImages[1]}
                   />
                 </div>
               ))}
           </Carousel>
         </div>
       </div>
     </div>
   );
};

export default DailyDeal;
