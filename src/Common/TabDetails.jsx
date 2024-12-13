/* eslint-disable react/no-unescaped-entities */
import { Tab } from '@headlessui/react';
import { Rating } from '@mui/material';
import { Link } from 'react-router-dom';
import clinet1 from '../assets/clinet1.png';
import clinet2 from '../assets/client2.jpg';

const TabDetails = () => {
  return (
    <div className='w-full py-10 px-10 border border-solid border-gray-300 rounded-xl mt-16'>
      <Tab.Group>
        <Tab.List className='flex gap-6 p-1 space-x-1  rounded-xl mb-8'>
          <Tab
            className={({ selected }) =>
              selected
                ? 'w-full py-2.5 text-sm leading-5 font-medium rounded-lg tab active-tab hover-up'
                : 'w-full py-2.5 text-sm leading-5 font-medium rounded-lg tab hover-up'
            }
          >
            Description
          </Tab>
          <Tab
            className={({ selected }) =>
              selected
                ? 'w-full py-2.5 text-sm leading-5 font-medium rounded-lg tab active-tab hover-up'
                : 'w-full py-2.5 text-sm leading-5 font-medium rounded-lg tab hover-up'
            }
          >
            Additional info
          </Tab>
          <Tab
            className={({ selected }) =>
              selected
                ? 'w-full py-2.5 text-sm leading-5 font-medium rounded-lg tab active-tab hover-up'
                : 'w-full py-2.5 text-sm leading-5 font-medium rounded-lg tab hover-up'
            }
          >
            Purchase Guide
          </Tab>
          <Tab
            className={({ selected }) =>
              selected
                ? 'w-full py-2.5 text-sm leading-5 font-medium rounded-lg tab active-tab hover-up'
                : 'w-full py-2.5 text-sm leading-5 font-medium rounded-lg tab hover-up'
            }
          >
            Reviews
          </Tab>
        </Tab.List>
        <Tab.Panels className='mt-2'>
          <Tab.Panel>
            <div className='tab-content'>
              <p className='py-1'>
                Our products are carefully crafted with attention to detail. We
                source the finest ingredients and ensure that our manufacturing
                process adheres to the highest standards of quality.
              </p>
              <p className='py-1'>
                We believe in transparency and want our customers to know
                exactly what they're getting. Here are some details about the
                product you're viewing:
              </p>
              <ul className='product-more-infor custom-flex mt-8'>
                <li className='flex'>
                  <span>Type Of Packing</span> Bottle
                </li>
                <li className='flex'>
                  <span>Color</span> Green, Pink, Powder Blue, Purple
                </li>
                <li className='flex'>
                  <span>Quantity Per Case</span> 100ml
                </li>
                <li className='flex'>
                  <span>Ethyl Alcohol</span> 70%
                </li>
                <li className='flex'>
                  <span>Piece In One</span> Carton
                </li>
              </ul>
              <hr className='wp-block-separator is-style-dots'></hr>
              <p>
                We're committed to delivering your order as quickly and
                affordably as possible. We offer a range of delivery options to
                suit your needs.
              </p>
              <h4 className='mt-8'>Packaging &amp; Delivery</h4>
              <hr className='wp-block-separator is-style-wide'></hr>
              <p className='py-1'>
                Our products are securely packaged to ensure they reach you in
                perfect condition. We work with reliable delivery partners to
                offer fast and efficient shipping.
              </p>
              <p className='py-1'>
                Once your order is dispatched, we'll send you a tracking number
                so you can follow its journey to your doorstep.
              </p>
              <h4 className='mt-8'>Suggested Use</h4>
              <hr className='wp-block-separator is-style-dots'></hr>

              <ul className='product-more-infor mt-8'>
                <li>Refrigeration not necessary.</li>
                <li>Stir before serving</li>
              </ul>

              <h4 className='mt-8'>Other Ingredients</h4>
              <hr className='wp-block-separator is-style-dots'></hr>

              <ul className='mt-8 product-more-infor show-dot-important'>
                <li className=''>Organic raw pecans, organic raw cashews.</li>
                <li>
                  This butter was produced using a LTG (Low Temperature
                  Grinding) process
                </li>
                <li>
                  Made in machinery that processes tree nuts but does not
                  process peanuts, gluten, dairy or soy
                </li>
              </ul>
              <h4 className='mt-8'>Warnings</h4>
              <hr className='wp-block-separator is-style-dots'></hr>

              <ul className='product-more-infor mt-8'>
                <li>
                  Oil separation occurs naturally. May contain pieces of shell.
                </li>
              </ul>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className='additional'>
              <h3 className='text-lg font-semibold text-[#7e7e7e] mb-4 dark:text-white'>
                Additional Information
              </h3>
              <table className='text-base'>
                <tbody>
                  <tr className='stand-up'>
                    <th className='pr-4 py-2'>Stand Up</th>
                    <td>
                      <p>35″L x 24″W x 37-45″H(front to back wheel)</p>
                    </td>
                  </tr>
                  <tr className='folded-wo-wheels'>
                    <th className='pr-4 py-2'>Folded (w/o wheels)</th>
                    <td>
                      <p>32.5″L x 18.5″W x 16.5″H</p>
                    </td>
                  </tr>
                  <tr className='folded-w-wheels'>
                    <th className='pr-4 py-2'>Folded (w/ wheels)</th>
                    <td>
                      <p>32.5″L x 24″W x 18.5″H</p>
                    </td>
                  </tr>
                  <tr className='door-pass-through'>
                    <th className='pr-4 py-2'>Door Pass Through</th>
                    <td>
                      <p>24</p>
                    </td>
                  </tr>
                  <tr className='frame'>
                    <th className='pr-4 py-2'>Frame</th>
                    <td>
                      <p>Aluminum</p>
                    </td>
                  </tr>
                  <tr className='weight-wo-wheels'>
                    <th className='pr-4 py-2'>Weight (w/o wheels)</th>
                    <td>
                      <p>20 LBS</p>
                    </td>
                  </tr>
                  <tr className='weight-capacity'>
                    <th className='pr-4 py-2'>Weight Capacity</th>
                    <td>
                      <p>60 LBS</p>
                    </td>
                  </tr>
                  <tr className='width'>
                    <th className='pr-4 py-2'>Width</th>
                    <td>
                      <p>24″</p>
                    </td>
                  </tr>
                  <tr className='handle-height-ground-to-handle'>
                    <th className='pr-4 py-2 font-bold'>
                      Handle height (ground to handle)
                    </th>
                    <td>
                      <p>37-45″</p>
                    </td>
                  </tr>
                  <tr className='wheels'>
                    <th className='pr-4 py-2 font-bold'>Wheels</th>
                    <td>
                      <p>12″ air / wide track slick tread</p>
                    </td>
                  </tr>
                  <tr className='seat-back-height'>
                    <th className='pr-4 py-2 font-bold'>Seat back height</th>
                    <td>
                      <p>21.5″</p>
                    </td>
                  </tr>
                  <tr className='head-room-inside-canopy'>
                    <th className='pr-4 py-2 font-bold'>
                      Head room (inside canopy)
                    </th>
                    <td>
                      <p>25″</p>
                    </td>
                  </tr>
                  <tr className='pa_color'>
                    <th className='pr-4 py-2 font-bold'>Color</th>
                    <td>
                      <p>Black, Blue, Red, White</p>
                    </td>
                  </tr>
                  <tr className='pa_size'>
                    <th className='pr-4 py-2 font-bold'>Size</th>
                    <td>
                      <p>M, S</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className='mb-12 single-content purchase '>
              <div className='mb-4'>
                <h3 className='mb-2'>1. Account Registration</h3>
                <p>Create an account to start exploring our offerings today!</p>
                <ul className='mb-7'>
                  <li className='custom-list-inside my-2'>Name</li>
                  <li className='custom-list-inside my-2'>Email Address</li>
                  <li className='custom-list-inside my-2'>
                    Mobile Phone Number
                  </li>
                </ul>
              </div>
              <div className='mb-4'>
                <h3>2. Browse Products</h3>
                <p>
                  Explore our wide range of products. Use the search bar or
                  filter options to find exactly what you're looking for.
                </p>
              </div>
              <div className='mb-4'>
                <h3>3. Add to Cart</h3>
                <p>
                  Found something you like? Add it to your cart. You can
                  continue shopping or proceed to checkout.
                </p>
              </div>
              <div className='mb-4'>
                <h3>4. Checkout</h3>
                <p>
                  Review your order details and enter your shipping information.
                  Apply any discount codes you have at this stage.
                </p>
              </div>
              <div className='mb-4'>
                <h3>5. Make Payment</h3>
                <p>
                  Choose your preferred payment method and make the payment. We
                  accept Visa, Mastercards, American Express, and Discover. All
                  transactions are secure and encrypted.
                </p>
              </div>
              <div className='mb-4'>
                <h3>6. Order Confirmation</h3>
                <p>
                  After successful payment, you'll receive a confirmation email
                  with your order details and estimated delivery date.
                </p>
              </div>
              <div className='mb-4'>
                <h3>7. Track Your Order</h3>
                <p>
                  Keep an eye on your order's progress with our order tracking
                  feature. You'll receive updates at every step of the way.
                </p>
              </div>
              <div className='mb-4'>
                <h3>8. Customer Support</h3>
                <p>
                  Need help? Our customer support team is here for you. Contact
                  us via email, phone, or
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
                <h3>9. Share Your Experience</h3>
                <p>
                  We love hearing from our customers. Share your shopping
                  experience with us and help us improve our services.
                </p>
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className=''>
              <h3 className='text-lg font-semibold text-[#7e7e7e] mb-4 dark:text-white'>
                Customer reviews
              </h3>
              <div className='review-list'>
                <div className='flex justify-between mb-8 single-comment'>
                  <div className='flex justify-between'>
                    <div className='text-center'>
                      <img src={clinet1} alt='' className='mx-auto' />
                      <Link to='#' className='font-heading text-brand'>
                        Sienna
                      </Link>
                    </div>
                    <div className='ml-4'>
                      <div className='flex justify-between mb-2 mx-4'>
                        <div className='flex items-center'>
                          <span className='text-xs text-gray-500 dark:text-white'>
                            December 4, 2024 at 3:12 pm{' '}
                          </span>
                        </div>
                        <Rating
                          name='half-rating-read'
                          value={4.5}
                          precision={0.5}
                          readOnly
                          size='small'
                        />
                      </div>
                      <p className='mb-2 mx-4 leading-6 dark:text-white'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Delectus, suscipit exercitationem accusantium
                        obcaecati quos voluptate nesciunt facilis itaque modi
                        commodi dignissimos sequi repudiandae minus ab deleniti
                        totam officia id incidunt?{' '}
                      </p>
                    </div>
                  </div>
                </div>
                <div className='flex justify-between mb-8 single-comment'>
                  <div className='flex justify-between'>
                    <div className='text-center'>
                      <img src={clinet2} alt='' className='mx-auto' />
                      <Link to='#' className='font-heading text-brand'>
                        Gemma
                      </Link>
                    </div>
                    <div className='ml-4'>
                      <div className='flex justify-between mb-2 mx-4'>
                        <div className='flex items-center'>
                          <span className='text-xs text-gray-500 dark:text-white'>
                            December 4, 2024 at 3:12 pm{' '}
                          </span>
                        </div>
                        <Rating
                          name='half-rating-read'
                          value={4.5}
                          precision={0.5}
                          readOnly
                          size='small'
                        />
                      </div>
                      <p className='mb-2 mx-4 leading-6 dark:text-white'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Delectus, suscipit exercitationem accusantium
                        obcaecati quos voluptate nesciunt facilis itaque modi
                        commodi dignissimos sequi repudiandae minus ab deleniti
                        totam officia id incidunt?{' '}
                      </p>
                    </div>
                  </div>
                </div>
                <div className='w-[75%]'>
                  <h3 className='mt-16 text-2xl font-semibold text-[#253D4E] mb-4 dark:text-white'>
                    Add a review
                  </h3>
                  <Rating
                    name='half-rating'
                    defaultValue={4.5}
                    precision={0.5}
                    size='medium'
                  />
                  <form action='' className='mt-4'>
                    <div className='flex'>
                      <div className='input-style mb-4 w-1/2 pr-2'>
                        <input
                          name='firstName'
                          placeholder='First Name'
                          type='text'
                          className='w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 dark:bg-gray-900 dark:text-white'
                        />
                      </div>
                      <div className='input-style mb-4 w-1/2 pl-2'>
                        <input
                          name='lastName'
                          placeholder='Last Name'
                          type='text'
                          className='w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 dark:bg-gray-900 dark:text-white'
                        />
                      </div>
                    </div>
                    <div className='mt-4'>
                      <textarea
                        rows={10}
                        placeholder='Write Comment Here...'
                        className='w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 dark:bg-gray-900 dark:text-white'
                      ></textarea>
                    </div>
                    <button
                      type='submit'
                      className='button button-contactForm mt-5'
                    >
                      Submit
                    </button>
                  </form>
                </div>
                
              </div>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default TabDetails;