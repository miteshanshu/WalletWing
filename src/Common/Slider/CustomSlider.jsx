// /* eslint-disable react/prop-types */
// import { useEffect, useMemo, useRef, useState } from 'react';
// import { IoIosArrowRoundForward, IoIosArrowRoundBack } from 'react-icons/io';
// import Carousel from 'react-multi-carousel';
// import category from '../../assets/cat-1.png';
// import category2 from '../../assets/cat-2.png';
// import category3 from '../../assets/cat-3.png';
// import category4 from '../../assets/cat-4.png';
// import category5 from '../../assets/cat-5.png';
// import category6 from '../../assets/cat-15.png';
// import category7 from '../../assets/cat-13.png';
// import category8 from '../../assets/cat-3.png';
// import category9 from '../../assets/cat-9.png';
// import category11 from '../../assets/cat-11.png';
// import category12 from '../../assets/cat-12.png';
// import category13 from '../../assets/cat-13.png';
// import category14 from '../../assets/cat-14.png';
// import category15 from '../../assets/cat-15.png';
// import './Slider.css';
// import 'react-multi-carousel/lib/styles.css';
// import 'react-multi-carousel/lib/styles.css';

// export default function CustomSlider() {
//    const data = useMemo(
//       () => [
//          {
//             id: 1,
//             name: 'Vegetables',
//             image: category,
//             item: `Item ${Math.floor(Math.random() * 1000)}`,
//             backgroundColor: '#F2FCE4',
//             type: 'Vegetables',
//          },
//          {
//             id: 2,
//             name: 'Strawberry',
//             image: category2,
//             item: `Item ${Math.floor(Math.random() * 1000)}`,
//             backgroundColor: '#F2FCE4',
//             type: 'Vegetables',
//          },
//          {
//             id: 3,
//             name: 'Snakes',
//             image: category3,
//             item: `Item ${Math.floor(Math.random() * 1000)}`,
//             backgroundColor: '#FFFCEB',
//             type: 'Vegetables',
//          },
//          {
//             id: 4,
//             name: 'Black pulm',
//             image: category4,
//             item: `Item ${Math.floor(Math.random() * 1000)}`,
//             backgroundColor: '#FEEFEA',
//             type: 'Vegetables',
//          },
//          {
//             id: 5,
//             name: 'Custard Apple',
//             image: category5,
//             item: `Item ${Math.floor(Math.random() * 1000)}`,
//             backgroundColor: '#FFF3EB',
//             type: 'Fruits',
//          },
//          {
//             id: 6,
//             name: 'Headphones',
//             image: category6,
//             item: `Item ${Math.floor(Math.random() * 1000)}`,
//             backgroundColor: '#FFF3FF',
//             Type: 'Snakes',
//          },
//          {
//             id: 7,
//             name: 'Cake & Pastry',
//             image: category7,
//             item: `Item ${Math.floor(Math.random() * 1000)}`,
//             backgroundColor: '#F2FCE4',
//             Type: 'Cake & Milk',
//          },
//          {
//             id: 8,
//             name: 'Snakes',
//             image: category8,
//             item: `Item ${Math.floor(Math.random() * 1000)}`,
//             backgroundColor: '#FEEFEA',
//             Type: 'Snakes',
//          },
//          {
//             id: 9,
//             name: 'Red Apple',
//             image: category9,
//             item: `Item ${Math.floor(Math.random() * 1000)}`,
//             backgroundColor: '#FFFCEB',
//             type: 'Fruits',
//          },
//          {
//             id: 11,
//             name: 'Peach',
//             image: category11,
//             item: `Item ${Math.floor(Math.random() * 1000)}`,
//             backgroundColor: '#FFF3EB',
//             type: 'Fruits',
//          },
//          {
//             id: 12,
//             name: 'Organic Kiwi',
//             image: category12,
//             item: `Item ${Math.floor(Math.random() * 1000)}`,
//             backgroundColor: '#F2FCE4',
//             type: 'Fruits',
//          },
//          {
//             id: 13,
//             name: 'Cake & Pastry',
//             image: category13,
//             item: `Item ${Math.floor(Math.random() * 1000)}`,
//             backgroundColor: '#FEEFEA',
//             Type: 'Snakes',
//          },
//          {
//             id: 14,
//             name: 'Coffee & Tea',
//             image: category14,
//             item: `Item ${Math.floor(Math.random() * 1000)}`,
//             backgroundColor: '#FFFCEB',
//             Type: 'Cake & Milk',
//          },
//          {
//             id: 15,
//             name: 'Headphones',
//             image: category15,
//             item: `Item ${Math.floor(Math.random() * 1000)}`,
//             backgroundColor: '#FEEFEA',
//          },
//       ],
//       []
//    );
//    const carouselRef = useRef(null);
//    const [filter, setFilter] = useState(null);
//    const [filteredData, setFilteredData] = useState(data);

//    useEffect(() => {
//       setFilteredData(
//          filter
//             ? data.filter(
//                  (item) => item.type === filter || item.Type === filter
//               )
//             : data
//       );
//    }, [filter, data]);

//    const nextSlide = () => {
//       carouselRef.current.next();
//    };

//    const previousSlide = () => {
//       carouselRef.current.previous();
//    };
//    const responsive = {
//       desktop: {
//          breakpoint: { max: 3000, min: 1024 },
//          items: 8,
//          slidesToSlide: 1,
//       },
//       tablet: {
//          breakpoint: { max: 1024, min: 464 },
//          items: 6,
//          slidesToSlide: 1,
//       },
//       mobile: {
//          breakpoint: { max: 464, min: 0 },
//          items: 4,
//          slidesToSlide: 1,
//       },
//    };
 

//    return (
//       <div className='p-6 mt-6'>
//          <div className='w-full rounded-2xl overflow-hidden relative'>
//             <div className='flex items-center paragraph'>
//                <div className='px-2'>
//                   <h1 className='commonHeading'>Featured Categories</h1>
//                </div>
//                <div className='flex items-center justify-center ml-10  cursor-pointer paragraph'>
//                   <p onClick={() => setFilter('Cake & Milk')}>Cake & Milk</p>
//                   <p onClick={() => setFilter('Fruits')}>Fruits</p>
//                   <p onClick={() => setFilter('Vegetables')}>Vegetables</p>
//                   <p onClick={() => setFilter('Snakes')}>Snakes</p>
//                </div>
//             </div>

//             <Carousel
//                responsive={responsive}
//                showDots={false}
//                infinite
//                autoPlaySpeed={3000}
//                autoPlay={true}
               
               
//                className='pt-[3rem] px-4 pb-[2rem] relative'
//                arrows={false}
//                ref={carouselRef}
//             >
//                {filteredData.map((item, id) => (
//                   <div
//                      key={id}
//                      className='item'
//                      style={{
//                         backgroundColor: item.backgroundColor,
//                         minHeight: '190px',
//                      }}
//                   >
//                      <img src={item.image} alt={item.name} />
//                      <h3 className='text-[#253d4e] font-bold text-md'>
//                         {item.name}
//                      </h3>
//                      <h4 className='text-sm'>{item.item}</h4>
//                   </div>
//                ))}
//             </Carousel>
//             <div className='custom-arrowSlider absolute  top-0 right-0  mx-5'>
//                <button
//                   className='custom-nextSlider rounded-full mr-8'
//                   onClick={previousSlide}
//                >
//                   <IoIosArrowRoundBack size={35} />
//                </button>
//                <button
//                   className='custom-prevSlider rounded-full '
//                   onClick={nextSlide}
//                >
//                   <IoIosArrowRoundForward size={35} />
//                </button>
//             </div>
//          </div>
//       </div>
//    );
// }
