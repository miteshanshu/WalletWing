import { Fragment, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Menu, Transition } from '@headlessui/react';
import { Link,  useNavigate } from 'react-router-dom';
import settingIcon from '../assets/settings-sliders.svg';
import favoriteIcon from '../assets/icon-favorite.svg';
import signInIcon from '../assets/sign-in-alt.svg';
import voucherIcon from '../assets/home-location-alt.svg';
import userIcon from '../assets/icon-user.svg';
import passwordIcon from '../assets/password.svg';
import User from '../assets/icon-user.svg';
import { FiChevronDown } from 'react-icons/fi';
import { signOutUser } from '../store/authSlice';
import toast from 'react-hot-toast';



function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
    const navigate = useNavigate();

const googleUser = useSelector((state) => state.auth.user);
  const Authentication = useSelector((state) => state.auth.auth); 

let accountMenuItem;
if (googleUser) {
 
  const displayName =
    googleUser.providerData[0].providerId === 'google.com'
      ? googleUser.displayName
      : googleUser.username;

  if (displayName) {
    accountMenuItem = {
      text: `Welcome ${displayName}`,
      icon: userIcon,
      path: '/account',
    };
  } else {
    accountMenuItem = {
      text: 'My Account',
      icon: userIcon,
      path: '/account',
    };
  }
} else {
  accountMenuItem = {
    text: 'My Account',
    icon: userIcon,
    path: '/account',
  };
}


  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = () => {
    setIsOpen(false);
  };

const handleLogout = async () => {
  try {
    await dispatch(signOutUser());
    toast.success('Logged out successfully!');
    setIsOpen(false);
    setTimeout(() => {
      navigate('/')
      }, 1000);
  } catch (error) {
    toast.error('Logout failed. Please try again.');
  }
};


  const menuItems = Authentication ?  [
 accountMenuItem,
    { text: 'Order Tracking', icon: voucherIcon, path: '/account', },
    { text: 'My Wishlist', icon: favoriteIcon, path: '/wishlist' },
    { text: 'Setting', icon: settingIcon, path: '/account' },
    user
      ? { text: 'Logout', icon: signInIcon, action: handleLogout }
      : { text: 'Login', icon: signInIcon, path: '/login' },
    { text: 'Reset Password', icon: passwordIcon, path: '/forget-password' },
  ]:
  [
    { text: 'Login', icon: signInIcon, path: '/login' },
    { text: 'Forget Password', icon: passwordIcon, path: '/forget-password' },
  ];




  return (
    <Menu as='div' className='relative inline-block text-left'>
      <button
        onClick={handleButtonClick}
        className='flex items-center w-full justify-center gap-x-1.5 rounded-md bg-white px-1 mx-2 py-2 text-sm font-semibold text-gray-900 transition-all duration-300 cursor-pointer'
      >
        <img src={User} alt='logo' />
        Account
        <FiChevronDown
          className={`ml-1 text-gray-700 transform ${
            isOpen ? 'rotate-180' : 'rotate-0'
          } transition-transform duration-300`}
        />
      </button>

      <Transition
        show={isOpen}
        as={Fragment}
        enter='transition ease-out duration-300'
        enterFrom='opacity-0 scale-95'
        enterTo='opacity-100 scale-100'
        leave='transition ease-in duration-200'
        leaveFrom='opacity-100 scale-100'
        leaveTo='opacity-0 scale-95'
      >
        <Menu.Items className='absolute right-[-10px]  z-10 mt-4 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
          <div className='py-1'>
            {menuItems.map((menuItem, index) => (
              <Menu.Item key={index}>
                {({ active }) =>
                  menuItem.action ? (
                    <button
                      onClick={menuItem.action}
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'flex items-center px-4 py-2 text-sm transition-all duration-300 leading-7 w-full'
                      )}
                    >
                      <img
                        src={menuItem.icon}
                        alt='icons'
                        className='h-5 w-5 mr-2'
                      />
                      {menuItem.text}
                    </button>
                  ) : (
                    <Link
                      to={menuItem.path}
                      onClick={handleItemClick}
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'flex items-center px-4 py-2 text-sm transition-all duration-300 leading-7'
                      )}
                    >
                      <img
                        src={menuItem.icon}
                        alt='icons'
                        className='h-5 w-5 mr-2'
                      />
                      {menuItem.text}
                    </Link>
                  )
                }
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
