import { Rating } from '@mui/material';
import { useSelector } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';

const BottomProduct = () => {
  const data = useSelector((state) => state.data.data);

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

let groceries = data
  .filter((item) => item.cat_name === 'Groceries')
  .flatMap((item) => item.items.flatMap((subItem) => subItem.products));

let storedProducts = JSON.parse(localStorage.getItem('products'));
let storedTime = localStorage.getItem('time');
let currentTime = new Date().getTime();
let timePassed = currentTime - storedTime;

if (!storedProducts || timePassed >= 28 * 60 * 60 * 1000) {
  groceries = shuffleArray(groceries).slice(0, 2);
  localStorage.setItem('products', JSON.stringify(groceries));
  localStorage.setItem('time', currentTime.toString());
} else {
  groceries = storedProducts;
}

let GroceriesProducts = shuffleArray(
  data
    .filter((item) => item.cat_name === 'Groceries')
    .flatMap((item) => item.items.flatMap((subItem) => subItem.products))
).slice(0, 2);

let ElectronicsProducts = shuffleArray(
  data
    .filter((item) => item.cat_name === 'Electronics')
    .flatMap((item) => item.items.flatMap((subItem) => subItem.products))
).slice(0, 2);

let FashionProducts = shuffleArray(
  data
    .filter((item) => item.cat_name === 'Fashion')
    .flatMap((item) => item.items.flatMap((subItem) => subItem.products))
).slice(0, 2);

let HomeDecorProducts = shuffleArray(
  data
    .filter((item) => item.cat_name === 'Home Decor')
    .flatMap((item) => item.items.flatMap((subItem) => subItem.products))
).slice(0, 2);

  return (
    <div className='p-6'>
      <div className='grid grid-cols-4 px-4 pb-4'>
        {data.slice(0,4).map((item, index) => (
          <React.Fragment key={index}>
            <div className='bottom-section-title'>{item.cat_name}</div>
          </React.Fragment>
        ))}
      </div>
      <div className='grid grid-cols-4 px-4 gap-4'>
        <div className='top-selling'>
          {GroceriesProducts.map((product, index) => (
            <React.Fragment key={index}>
              <Link to={`/product/details/${product.id}`}>
                <div className='flex gap-4 items-center justify-start hover-up my-4'>
                  <img
                    src={product.catImg}
                    alt=''
                    className='w-28 h-28 object-cover rounded-md'
                  />
                  <div>
                    <h4 className='text-[#253D4E] font-semibold dark:text-white line-clamp-2'>
                      {product.productName}
                    </h4>
                    <div className='flex items-center'>
                      <Rating
                        name='read-only'
                        value={product.rating}
                        precision={0.5}
                        readOnly
                      />
                      <p className='dark:text-white'>{product.rating}</p>
                    </div>

                    <div className='flex gap-4'>
                      <p className='text-[#3BB77E] font-bold text-[16px] dark:text-white'>
                        ₹{product.price}
                      </p>
                      <p className='text-[#253D4E] ml-2 line-through text-[14px] dark:text-white'>
                        ₹{product.oldPrice}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </React.Fragment>
          ))}
        </div>
        <div className='top-selling'>
          {ElectronicsProducts.map((product, index) => (
            <React.Fragment key={index}>
              <Link to={`/product/details/${product.id}`}>
                <div className='flex gap-4 items-center justify-start hover-up my-4'>
                  <img
                    src={product.catImg}
                    alt=''
                    className='w-28 h-28 object-cover rounded-md'
                  />
                  <div>
                    <h4 className='text-[#253D4E] font-semibold dark:text-white line-clamp-2'>
                      {product.productName}
                    </h4>
                    <div className='flex items-center'>
                      <Rating
                        name='read-only'
                        value={product.rating}
                        precision={0.5}
                        readOnly
                      />
                      <p className='dark:text-white'>{product.rating}</p>
                    </div>

                    <div className='flex gap-4'>
                      <p className='text-[#3BB77E] font-bold text-[16px] dark:text-white'>
                        ₹{product.price}
                      </p>
                      <p className='text-[#253D4E] ml-2 line-through text-[14px] dark:text-white'>
                        ₹{product.oldPrice}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </React.Fragment>
          ))}
        </div>
        <div className='top-selling'>
          {FashionProducts.map((product, index) => (
            <React.Fragment key={index}>
              <Link to={`/product/details/${product.id}`}>
                <div className='flex gap-4 items-center justify-start hover-up my-4'>
                  <img
                    src={product.catImg}
                    alt=''
                    className='w-28 h-28 object-cover rounded-md'
                  />
                  <div>
                    <h4 className='text-[#253D4E] font-semibold dark:text-white line-clamp-2'>
                      {product.productName}
                    </h4>
                    <div className='flex items-center'>
                      <Rating
                        name='read-only'
                        value={product.rating}
                        precision={0.5}
                        readOnly
                      />
                      <p className='dark:text-white'>{product.rating}</p>
                    </div>

                    <div className='flex gap-4'>
                      <p className='text-[#3BB77E] font-bold text-[16px] dark:text-white'>
                        ₹{product.price}
                      </p>
                      <p className='text-[#253D4E] ml-2 line-through text-[14px] dark:text-white'>
                        ₹{product.oldPrice}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </React.Fragment>
          ))}
        </div>
        <div className='top-selling'>
          {HomeDecorProducts.map((product, index) => (
            <React.Fragment key={index}>
              <Link to={`/product/details/${product.id}`}>
                <div className='flex gap-4 items-center justify-start hover-up my-4'>
                  <img
                    src={product.catImg}
                    alt=''
                    className='w-28 h-28 object-cover rounded-md'
                  />
                  <div>
                    <h4 className='text-[#253D4E] font-semibold dark:text-white line-clamp-2'>
                      {product.productName}
                    </h4>
                    <div className='flex items-center'>
                      <Rating
                        name='read-only'
                        value={product.rating}
                        precision={0.5}
                        readOnly
                      />
                      <p className='dark:text-white'>{product.rating}</p>
                    </div>

                    <div className='flex gap-4'>
                      <p className='text-[#3BB77E] font-bold text-[16px] dark:text-white'>
                        ₹{product.price}
                      </p>
                      <p className='text-[#253D4E] ml-2 line-through text-[14px] dark:text-white'>
                        ₹{product.oldPrice}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BottomProduct;
