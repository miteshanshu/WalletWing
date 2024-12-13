/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import {
  FiShoppingBag,
  FiShoppingCart,
  FiMapPin,
  FiUser,
  FiLogOut,
} from 'react-icons/fi';
import { LuSlidersHorizontal } from 'react-icons/lu';
import { Link, useNavigate } from 'react-router-dom';
import { PasswordInput } from '../Common/Password';
import { useDispatch } from 'react-redux';
import { signOutUser } from '../store/authSlice';
import toast from 'react-hot-toast';

const Account = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const navigate = useNavigate();

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const orders = [
    {
      id: '#1357',
      date: 'January 15, 2024',
      status: 'Processing',
      total: '₹8,437.50 for 2 items',
    },
    {
      id: '#2468',
      date: 'March 22, 2024',
      status: 'Completed',
      total: '₹6,487.00 for 5 items',
    },
    {
      id: '#2366',
      date: 'May 10, 2024',
      status: 'Completed',
      total: '₹9,390.00 for 3 items',
    },
    {
      id: '#3579',
      date: 'August 05, 2024',
      status: 'Processing',
      total: '₹4,815.00 for 1 item',
    },
  ];
  

      const dispatch = useDispatch();



      const handleLogout = async () => {
        try {
          await dispatch(signOutUser());
          toast.success('Logged out successfully!');
       
          setTimeout(() => {
            navigate('/');
          }, 1000);
        } catch (error) {
          toast.error('Logout failed. Please try again.');
        }
      };

const renderTabContent = () => {
  switch (activeTab) {
    case 'dashboard':
      return (
        <div>
          <div className='account-card'>
            <div className='card-header'>
              <h3 className='mb-0'>Hello Anshu!</h3>
            </div>
            <div className='card-body'>
              <p className='dark:text-white'>
                From your account dashboard. you can easily check &amp; view
                your <Link to='#'>recent orders</Link>,<br />
                manage your <Link to='#'>
                  shipping and billing addresses
                </Link>{' '}
                and <Link to='#'>edit your password and account details.</Link>
              </p>
            </div>
          </div>
        </div>
      );
    case 'orders':
      return (
        <div>
          <div className='card  rounded-lg'>
            <div className='card-header p-4 border-b border-gray-200'>
              <h3 className='mb-0 text-lg font-semibold'>Your Orders</h3>
            </div>
            <div className='card-body p-4'>
              <div className='table-responsive'>
                <table className='table-auto w-full'>
                  <thead>
                    <tr>
                      <th className='px-4 py-2 text-base'>Order</th>
                      <th className='px-4 py-2 text-base'>Date</th>
                      <th className='px-4 py-2 text-base'>Status</th>
                      <th className='px-4 py-2 text-base'>Total</th>
                      <th className='px-4 py-2 text-base'>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order, index) => (
                      <tr
                        key={index}
                        className='border-t border-gray-200 text-center'
                      >
                        <td className='px-4 py-2 text-[14px]'>{order.id}</td>
                        <td className='px-4 py-2 text-[14px]'>{order.date}</td>
                        <td className='px-4 py-2 text-[14px]'>
                          {order.status}
                        </td>
                        <td className='px-4 py-2 text-[14px]'>{order.total}</td>
                        <td className='px-4 py-2 text-[14px]'>
                          <Link
                            to='#'
                            className='btn-small block text-blue-500 hover:text-blue-700 text-[14px]'
                          >
                            View
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      );
    case 'track-orders':
      return (
        <div>
          <div>
            <div className='card-header'>
              <h3 className='mb-0'>Orders tracking</h3>
            </div>
            <div className='card-body'>
              <p>
                To track your order please enter your OrderID in the box below
                and press "Track" button. This was given to you on your receipt
                and in the confirmation email you should have received.
              </p>
              <form>
                <div className='input-style mb-[10px]'>
                  <label
                    htmlFor='email'
                    className='block mb-2 text-sm font-bold'
                  >
                    Order ID
                  </label>
                  <input
                    id='email'
                    name='email'
                    placeholder='Found in your order confirmation email'
                    type='email'
                    className='w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 dark:bg-gray-900 dark:text-white'
                  />
                </div>
                <div className='input-style mb-[15px]'>
                  <label
                    htmlFor='email'
                    className='block mb-2 text-sm font-bold'
                  >
                    Billing email
                  </label>
                  <input
                    id='email'
                    name='email'
                    placeholder='Email you used during checkout'
                    type='email'
                    className='w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 dark:bg-gray-900 dark:text-white'
                  />
                </div>
                <button
                  className='submit submit-auto-width bg-indigo-500 transition duration-300 ease-in-out text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline contact-from-button btn-md'
                  type='submit'
                >
                  Track
                </button>
              </form>
            </div>
          </div>
        </div>
      );
    case 'address':
      return (
        <div>
          <div className='flex items-center justify-between'>
            <div className='card-header w-1/2'>
              <h3 className='mb-0 text-base'>Billing Address</h3>
              <div className='card-body'>
                <address className='font-normal not-italic text-[14px]'>
                1234 MG Road
                  <br />
                  Sector 17,
                  <br />
                  Chandigarh, <br />
                  Haryana, 160017
                </address>
                <p>India</p>
                <Link to='#' className='text-[#3BB77E]'>
                  Edit
                </Link>
              </div>
            </div>
            <div className='card-header w-1/2'>
              <h3 className='mb-0 text-base font-20'>Shipping Address</h3>
              <div className='card-body'>
                <address className='font-normal not-italic text-[14px]'>
                45, Hauz Khas Village
                  <br />
                  Near Deer Park,
                  <br />
                  New Delhi, 110016
                </address>
                <p>India</p>
                <Link to='#' className='text-[#3BB77E]'>
                  Edit
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
    case 'account-detail':
      return (
        <div>
          <div className='card-header'>
            <h3>Account Details</h3>
          </div>
          <div className='card-body'>
            <p>
              Already have an account?{' '}
              <Link to={'/login'}>Log in instead!</Link>
            </p>
            <form action=''>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-5'>
                <div className='input-style'>
                  <label htmlFor='first_name' className='block mb-2 text-sm'>
                    First Name *
                  </label>
                  <input
                    id='first_name'
                    name='first_name'
                    placeholder='Enter Your First Name'
                    type='text'
                    className='w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 dark:bg-gray-900 dark:text-white'
                  />
                </div>
                <div className='input-style'>
                  <label htmlFor='last_name' className='block mb-2 text-sm'>
                    Last Name *
                  </label>
                  <input
                    id='last_name'
                    name='last_name'
                    placeholder='Enter Your Last Name'
                    type='text'
                    className='w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 dark:bg-gray-900 dark:text-white'
                  />
                </div>
              </div>
              <div className='input-style mb-5'>
                <label htmlFor='display_name' className='block mb-2 text-sm'>
                  Display Name *
                </label>
                <input
                  id='display_name'
                  name='display_name'
                  placeholder='Enter Your Display Name'
                  type='text'
                  className='w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 dark:bg-gray-900 dark:text-white'
                />
              </div>
              <div className='input-style mb-5'>
                <label htmlFor='email' className='block mb-2 text-sm'>
                  Email Address *
                </label>
                <input
                  id='email'
                  name='email'
                  placeholder='Enter Your Email Address'
                  type='email'
                  className='w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 dark:bg-gray-900 dark:text-white'
                />
              </div>
              <div className='input-style mb-5'>
                <label
                  htmlFor='current_password'
                  className='block mb-2 text-sm'
                >
                  Current Password *
                </label>
                <PasswordInput label='Current Password' id='current_password' />
              </div>
              <div className='input-style mb-5'>
                <label htmlFor='new_password' className='block mb-2 text-sm'>
                  New Password *
                </label>
                <PasswordInput label='New Password' id='new_password' />
              </div>
              <div className='input-style mb-5'>
                <label
                  htmlFor='confirm_password'
                  className='block mb-2 text-sm'
                >
                  Confirm Password *
                </label>
                <PasswordInput label='Confirm Password' id='confirm_password' />
              </div>
              <div>
                <button
                  type='submit'
                  className='btn btn-fill-out submit font-bold bg-indigo-500 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      );
    default:
      return null;
  }
};

  return (
    <div className='w-[90%] mx-auto py-[80px]'>
      <div className='flex justify-center gap-24'>
        <div className='w-1/4'>
          <div className='dashboard-menu'>
            <ul className='flex flex-col' role='tablist'>
              <li className='nav-item'>
                <Link
                  className={`nav-link ${
                    activeTab === 'dashboard' && 'active'
                  } flex items-center`}
                  to='#dashboard'
                  role='tab'
                  aria-controls='dashboard'
                  onClick={() => handleTabClick('dashboard')}
                >
                  <LuSlidersHorizontal className='mr-2' />
                  Dashboard
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  className={`nav-link ${
                    activeTab === 'orders' && 'active'
                  } flex items-center`}
                  to='#orders'
                  role='tab'
                  aria-controls='orders'
                  onClick={() => handleTabClick('orders')}
                >
                  <FiShoppingBag className='mr-2' />
                  Orders
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  className={`nav-link ${
                    activeTab === 'track-orders' && 'active'
                  } flex items-center`}
                  to='#track-orders'
                  role='tab'
                  aria-controls='track-orders'
                  onClick={() => handleTabClick('track-orders')}
                >
                  <FiShoppingCart className='mr-2' />
                  Track Your Order
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  className={`nav-link ${
                    activeTab === 'address' && 'active'
                  } flex items-center`}
                  to='#address'
                  role='tab'
                  aria-controls='address'
                  onClick={() => handleTabClick('address')}
                >
                  <FiMapPin className='mr-2' />
                  My Address
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  className={`nav-link ${
                    activeTab === 'account-detail' && 'active'
                  } flex items-center`}
                  to='#account-detail'
                  role='tab'
                  aria-controls='account-detail'
                  onClick={() => handleTabClick('account-detail')}
                >
                  <FiUser className='mr-2' />
                  Account details
                </Link>
              </li>
              <li className='nav-item'>
                <button
                  className='nav-link flex items-center'
                  to='#'
                  role='tab'
                  aria-controls='logout'
                  onClick={handleLogout}
                >
                  <FiLogOut className='mr-2' />
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className='w-[55%]'>{renderTabContent()}</div>
      </div>
    </div>
  );
};

export default Account;
