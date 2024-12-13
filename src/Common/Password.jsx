/* eslint-disable react/prop-types */
import  { useState } from 'react';
import { HiEye, HiEyeOff } from 'react-icons/hi';

export const PasswordInput = ({ label, id, onChange, passwordValue }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevState) => !prevState);
  };

  return (
    <div className='relative input-style mb-5'>
      <div className='relative'>
        <input
          id={id}
          name={id}
          value={passwordValue}
          placeholder={`Enter Your ${label}`}
          type={passwordVisible ? 'text' : 'password'}
          className='w-full py-2 px-4 pr-12 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 dark:bg-gray-900 dark:text-white'
          onChange={onChange}
        />
        <button
          type='button'
          onClick={togglePasswordVisibility}
          className='absolute inset-y-0 right-0 flex items-center px-3 text-gray-400'
        >
          {passwordVisible ? <HiEyeOff size={20} /> : <HiEye size={20} />}
        </button>
      </div>
    </div>
  );
};
