/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom';
import GuideImg  from '../assets/guide-1.png'


const ShopingGuide = () => {
    const date = new Date();
    date.setDate(date.getDate() - 7);
    const dateString = date.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });

  return (
    <div className='w-[75%] mx-auto py-[40px]'>
      <div className='single-header style-2'>
        <h2 className='text-[40px] font-bold text-[#253D4E] leading-6 dark:text-white'>
          Purchase Guide
        </h2>
        <div className='text-[14px] mt-[25px] mb-[25px]  text-[#7e7e7e] flex justify-start items-center gap-4 shoping-guide'>
          <span className='post-by'>
            By{' '}
            <Link to={'#'} className='text-[#3BB77E]'>
              Hunter
            </Link>
          </span>
          <span className='post-on has-dot dark:text-white'>{dateString}</span>
          <span className='time-reading has-dot dark:text-white'>
            8 mins read
          </span>
          <span className='hit-count has-dot dark:text-white'>29k Views</span>
        </div>
      </div>
      <figure className='mb-8 rounded-2xl'>
        <img src={GuideImg} alt='Guide' className='w-full rounded-2xl' />
      </figure>
      <div className='mb-12 single-content'>
        <ul className='mb-7'>
          <li className='custom-list-inside my-2'>Name</li>
          <li className='custom-list-inside my-2'>Email Address</li>
          <li className='custom-list-inside my-2'>Mobile Phone Number</li>
        </ul>
        <div className='mb-4'>
          <h3>2. Select Product</h3>
          <p>
            Our store offers a wide range of products. Browse through the
            categories, check out the new arrivals, and read the product
            descriptions to make an informed purchase.
          </p>
        </div>
        <div className='mb-4'>
          <h3>3. Confirm Order Content</h3>
          <p>
            Before proceeding to payment, make sure to review your order. Check
            the product names, quantities, and prices. You can also save
            products for later or add them to your wishlist.
          </p>
        </div>
        <div className='mb-4'>
          <h3>4. Make Payment</h3>
          <p>
            We offer several payment methods for your convenience. Choose the
            one that suits you best and proceed to make the payment. Don't
            forget to apply any discount codes you have!
          </p>
        </div>
        <div className='mb-4'>
          <h3>5. Transaction Completed</h3>
          <p>
            Once the payment is successful, your transaction is completed. You
            will receive a confirmation email with the details of your order and
            the estimated delivery date.
          </p>
        </div>
        <div className='mb-4'>
          <h3>6. Accepted Credit Cards</h3>
          <ul>
            <li className='custom-list-inside my-2'>Visa</li>
            <li className='custom-list-inside my-2'>Mastercards</li>
            <li className='custom-list-inside my-2'>American Express</li>
            <li className='custom-list-inside my-2'>Discover</li>
          </ul>
          <p>
            We accept the above credit cards. All transactions are secure and
            encrypted.
          </p>
        </div>
        <div className='mb-4'>
          <h3>7. Customer Support </h3>
          <p>
            If you have any questions or need assistance, our customer support
            team is here to help. Contact us via email, phone, or
            <Link
              to={'/contact-us'}
              className='text-blue-500 hover:underline ml-2'
            >
              message us
            </Link>
            .
          </p>
        </div>
        <div className='mb-4'>
          <h3>8. Feedback and Suggestions </h3>
          <p>
            We value your feedback and suggestions. Let us know how we can
            improve our services and products to better serve you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShopingGuide;
