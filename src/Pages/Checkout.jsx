import { FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import CountryDropdown from '../Common/CountryDropdown';
import { useState } from 'react';
import { GoSignOut } from 'react-icons/go';
import paypal from '../assets/payment-paypal.svg';
import visa from '../assets/payment-visa.svg';
import master from '../assets/payment-master.svg';
import zapper from '../assets/payment-zapper.svg';
import { Rating } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { applyPromoCode } from '../store/cartSlice';
import toast from 'react-hot-toast';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { RiCoupon3Line } from 'react-icons/ri';
import couponBg from '../assets/couponbg.png'



const Checkout = () => {
  const cart = useSelector((state) => state.cart.cart);
  const promoCodeApplied = useSelector((state) => state.cart.promoCodeApplied);

  const total = useSelector((state) => state.cart.total);

  const dispatch = useDispatch();

  const [checkout, setCheckout] = useState(false);
    const [open, setOpen] = useState(false);

  const couponCode = 'PROMO10';


  const handleCheckout = () => {
    setCheckout(!checkout);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const promoCode = event.target.elements[0].value;

    if (promoCodeApplied) {
      toast.error('Promo code is already applied.');
    } else if (promoCode === 'PROMO10') {
      dispatch(applyPromoCode(promoCode));
      
      toast.success('Promo code applied successfully!');
      event.target.reset();
    } else {
      toast.error('Invalid promo code. Please try again.');
    }
  };


  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(couponCode);
    toast.success('Coupon code copied to clipboard!');
  };




  return (
    <div className='w-[95%] mx-auto py-8'>
      <div className='flex justify-between items-center'>
        <div className=''>
          <h1 className='heading-bold mb-6 text-[44px] leading-4 dark:text-white'>
            Checkout
          </h1>
          <h6 className='text-body mb-10 text-[#7e7e7e] dark:text-white font-bold'>
            There are{' '}
            <span className='text-brand dark:text-white'>{cart.length}</span>{' '}
            products in your cart
          </h6>
        </div>
        <div className='flex justify-center items-center'>
          <Link
            to='#'
            className='btn flex justify-center items-center'
            onClick={handleOpen}
          >
            Check Coupons
            <RiCoupon3Line className='custom-inline-flex ml-2' size={18} />
          </Link>
        </div>
      </div>

      <div className='flex justify-between items-start  gap-6'>
        <div className='checkout-left w-[60%]'>
          <div className='flex justify-between items-center gap-2 mb-10'>
            <div className='toggle_info w-[55%]'>
              <span className='flex justify-start items-center gap-2'>
                <FiUser className='mr-2 custom-inline-flex' size={22} />
                <span className='text-muted text-[#B6B6B6]  text-[17px]'>
                  Already have an account?
                </span>{' '}
                <Link
                  to={'/login'}
                  data-bs-toggle='collapse'
                  className='text-[#3BB77E] text-[17px]'
                  aria-expanded='false'
                >
                  Click here to login
                </Link>
              </span>
            </div>
            <div className='w-[45%]'>
              <form className='apply-coupon flex' onSubmit={handleSubmit}>
                <input
                  type='text'
                  placeholder='Enter Coupon Code...'
                  className='w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 dark:bg-gray-900 dark:text-white'
                />
                <button className='btn  btn-md' name='login'>
                  Apply Coupon
                </button>
              </form>

              <Dialog
                open={open}
                onClose={handleClose}
                fullWidth
                maxWidth='md'
                PaperProps={{
                  style: {
                    backgroundImage: `url(${couponBg})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    objectFit: 'fill',
                  },
                }}
              >
                <DialogTitle
                  style={{
                    textAlign: 'center',
                    fontSize: '36px',
                    fontWeight: 'bold',
                    color: '#253D4E',
                    marginTop: '30px',
                  }}
                >
                  Thank you
                </DialogTitle>
                <DialogTitle
                  style={{
                    textAlign: 'center',
                    fontSize: '24px',
                    padding: '0',
                  }}
                >
                  for being a great customer
                </DialogTitle>
                <DialogContent>
                  <p
                    className='text-center mb-4'
                    style={{
                      fontSize: '36px',
                      fontWeight: 'bold',
                      margin: '20px 0',
                    }}
                  >
                    10% off
                  </p>
                  <p className='text-center mb-4 text-xl'>
                    using this coupon code:
                  </p>
                  <div className='border-dotted border-[#3BB77E] border-2 p-4 mb-4 w-[75%] mx-auto'>
                    <p className='text-center text-lg font-bold'>
                      {couponCode}
                    </p>
                  </div>
                </DialogContent>
                <DialogActions>
                  <div className='custom-inline-flex w-full' onClick={handleCopy}>
                  <Link
  to='#'
  className='p-4 mb-7 text-white bg-[#3BB77E] hover:bg-[#2A9F6E] transition-colors duration-200'
>
  Copy Coupon Code
</Link>
                  </div>
                </DialogActions>
              </Dialog>
            </div>
          </div>
          <div>
            <h3 className='mb-8 text-[23px] text-[#253D4E] font-bold leading-6 dark:text-white'>
              Billing Details
            </h3>
            <form action=''>
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
              <div className='flex'>
                <div className='input-style mb-4 w-1/2 pr-2'>
                  <input
                    name='firstName'
                    placeholder='Address'
                    type='text'
                    className='w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 dark:bg-gray-900 dark:text-white'
                  />
                </div>
                <div className='input-style mb-4 w-1/2 pl-2'>
                  <input
                    name='lastName'
                    placeholder='Address Line 2'
                    type='text'
                    className='w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 dark:bg-gray-900 dark:text-white'
                  />
                </div>
              </div>
              <div className='flex'>
                <CountryDropdown />
                <div className='input-style mb-4 w-1/2 pl-2'>
                  <input
                    name='City Town'
                    placeholder='CityTown'
                    type='text'
                    className='w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 dark:bg-gray-900 dark:text-white'
                  />
                </div>
              </div>
              <div className='flex'>
                <div className='input-style mb-4 w-1/2 pr-2'>
                  <input
                    name='Postcode / ZIP'
                    placeholder='Postcode / ZIP *'
                    type='text'
                    className='w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 dark:bg-gray-900 dark:text-white'
                  />
                </div>
                <div className='input-style mb-4 w-1/2 pl-2'>
                  <input
                    name='Mobile No'
                    placeholder='Mobile No'
                    type='tel'
                    className='w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 dark:bg-gray-900 dark:text-white'
                  />
                </div>
              </div>
              <div className='mb-8'>
                <textarea
                  rows={10}
                  placeholder='Additional Information'
                  className='w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 dark:bg-gray-900 dark:text-white'
                ></textarea>
              </div>
            </form>

            <label className='flex items-center text-gray-500 forget-check-lebal'>
              <input
                className='mr-2 leading-tight h-4 w-4'
                type='checkbox'
                onClick={handleCheckout}
              />
              <span className='text-md dark:text-white'>
                Ship to a different address?
              </span>
            </label>
          </div>
          {checkout && (
            <>
              <div>
                <h3 className='my-8 text-[23px] text-[#253D4E] font-bold leading-6 dark:text-white'>
                  Shipping Details
                </h3>
                <form action=''>
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
                  <div className='flex'>
                    <div className='input-style mb-4 w-1/2 pr-2'>
                      <input
                        name='firstName'
                        placeholder='Address'
                        type='text'
                        className='w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 dark:bg-gray-900 dark:text-white'
                      />
                    </div>
                    <div className='input-style mb-4 w-1/2 pl-2'>
                      <input
                        name='lastName'
                        placeholder='Address Line 2'
                        type='text'
                        className='w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 dark:bg-gray-900 dark:text-white'
                      />
                    </div>
                  </div>
                  <div className='flex'>
                    <CountryDropdown />
                    <div className='input-style mb-4 w-1/2 pl-2'>
                      <input
                        name='City Town'
                        placeholder='CityTown'
                        type='text'
                        className='w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 dark:bg-gray-900 dark:text-white'
                      />
                    </div>
                  </div>
                  <div className='flex'>
                    <div className='input-style mb-4 w-1/2 pr-2'>
                      <input
                        name='Postcode / ZIP'
                        placeholder='Postcode / ZIP *'
                        type='text'
                        className='w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 dark:bg-gray-900 dark:text-white'
                      />
                    </div>
                    <div className='input-style mb-4 w-1/2 pl-2'>
                      <input
                        name='Mobile No'
                        placeholder='Mobile No'
                        type='tel'
                        className='w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 dark:bg-gray-900 dark:text-white'
                      />
                    </div>
                  </div>
                </form>
              </div>
            </>
          )}
        </div>
        <div className='checkout-right w-[40%]'>
          <div className='border cart-total  p-10 ml-8 mb-12'>
            <div className='flex items-end justify-between mb-4'>
              <h4 className='text-[#253D4E] font-bold text-2xl dark:text-white'>
                Your Order
              </h4>
              <h6 className='text-white text-base font-semibold bg-[#253d4e]  p-2 rounded-md'>
                ₹{total}
              </h6>
            </div>
            <div className='w-full h-[1px] bg-gray-300 mb-8'></div>
            <div className='overflow-auto order_table checkout table-responsive'>
              <table className='table-auto w-full'>
                <tbody>
                  {cart.map((item) => (
                    <tr className='checkout-table' key={item.id}>
                      <td className='w-40 image product-thumbnail'>
                        <img src={item.catImg} alt='#' />
                      </td>
                      <td>
                        <h6 className='w-40 mb-1'>
                          <Link
                            className='text-heading text-base hover-change dark:text-white'
                            to='#'
                          >
                            {item.productName}
                          </Link>
                        </h6>
                        <div>
                          <div className='flex justify-start items-center'>
                            <Rating
                              name='read-only'
                              value={item.rating}
                              readOnly
                              precision={0.5}
                              size='small'
                              className=''
                            />
                            <span className='text-base ml-1 text-gray-500 dark:text-white'>
                              {item.rating}
                            </span>
                          </div>
                        </div>
                      </td>

                      <td>
                        <h6 className='text-muted font-bold pl-5 pr-5'>
                          x {item.quantity}
                        </h6>
                      </td>
                      <td>
                        <h4 className='text-brand font-bold text-xl'>
                          ₹{item.price}
                        </h4>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className='payment ml-8 mt-auto mb-auto'>
            <h4 className='mb-4 text-[#253D4E] font-bold text-[24px] dark:text-white'>
              Payment
            </h4>
            <div className='payment_option flex flex-col gap-3'>
              <div className='custome-radio flex items-center'>
                <input
                  className='form-check-input h-4 w-4 text-blue-600 rounded'
                  required
                  type='radio'
                  name='payment_option'
                  id='exampleRadios3'
                  defaultChecked
                />
                <label
                  className='form-check-label ml-2  '
                  htmlFor='exampleRadios3'
                >
                  Direct Bank Transfer
                </label>
              </div>
              <div className='custome-radio flex items-center'>
                <input
                  className='form-check-input h-4 w-4 text-blue-600 rounded'
                  required
                  type='radio'
                  name='payment_option'
                  id='exampleRadios4'
                />
                <label
                  className='form-check-label ml-2  '
                  htmlFor='exampleRadios4'
                >
                  Cash on delivery
                </label>
              </div>
              <div className='custome-radio flex items-center'>
                <input
                  className='form-check-input h-4 w-4 text-blue-600 rounded'
                  required
                  type='radio'
                  name='payment_option'
                  id='exampleRadios5'
                />
                <label
                  className='form-check-label ml-2  '
                  htmlFor='exampleRadios5'
                >
                  Online Getway
                </label>
              </div>
            </div>
            <div className='payment-logo flex justify-start items-center gap-2 my-4'>
              <img className='mr-3' src={paypal} alt='' />
              <img className='mr-3' src={visa} alt='' />
              <img className='mr-3' src={master} alt='' />
              <img src={zapper} alt='' />
            </div>
            <Link to='#' className='btn mt-3'>
              Place an Order
              <GoSignOut className='ml-5 custom-inline-flex' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
