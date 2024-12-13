import { Link } from 'react-router-dom';
import forgetPassword from '../assets/forgot_password.svg';
import { IoBookOutline } from 'react-icons/io5';
import { useState } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../store/firebaseConfig';
import toast from 'react-hot-toast';


const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [agree, setAgree] = useState(false);


const handleSubmit = async (event) => {
  event.preventDefault();
  if (!agree) {
    toast.error('Please agree to the terms and conditions.');
    return;
  }
  try {
    await sendPasswordResetEmail(auth, email);
  toast.success(
    'Password reset email successfully sent! Please check your inbox.'
  );

    setEmail('');
  } catch (error) {
    if (error.code === 'auth/user-not-found') {

      toast.error(
        'No account found with this email. Please create an account.'
      );
    } else {
      
      toast.error(error.message || 'Something went wrong. Please try again.');
    }
  }
};
  return (
    <div className='page-content pt-[120px] pb-[100px]'>
      <div className=''>
        <div className=''>
          <div className='w-1/3 mx-auto'>
            <div className='heading_s1'>
              <img
                className='rounded-md'
                src={forgetPassword}
                alt='Forgot Password'
              />
              <h2 className='mb-[15px] mt-[15px] text-[#253D4E] font-semibold leading-snug text-4xl dark:text-white'>
                Forgot your password?
              </h2>
              <p className='text-base font-normal leading-6 mb-5 text-custom-gray dark:text-white'>
                Not to worry, we got you! Let’s get you a new password. Please
                enter your email address or your Username.
                if you Remember your password,{' '}
                <Link to='/login' className='text-blue-500'>
                  Login
                </Link>

              </p>
              <form onSubmit={handleSubmit}>
                <div className='mb-4 forget-input'>
                  <input
                    className='w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 dark:bg-gray-900 dark:text-white'
                    type='text'
                    required
                    value={email}
                    name='email'
                    placeholder="Enter your email ID"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className='mb-6 flex justify-between items-center'>
                  <div className='forget-password'>
                    <label className='block text-gray-500  forget-check-lebal'>
                      <input
                        className='mr-2 leading-tight'
                        type='checkbox'
                        checked={agree}
                        onChange={(e) => setAgree(e.target.checked)}
                      />
                      <span className='text-sm dark:text-white'>
                        I agree to the
                        <Link to='/terms' className='text-blue-500 mr-2'>
                          Terms & Conditions
                        </Link>
                        and
                        <Link to='/policy' className='text-blue-500 ml-2'>
                          Privacy Policy.
                        </Link>
                      </span>
                    </label>
                  </div>
                  <Link
                    to='/terms'
                    className='text-gray-500 dark:text-white flex items-center'
                  >
                    <IoBookOutline className='mr-2 text-gray-500' />
                    Learn more
                  </Link>
                </div>
                <div>
                  <button
                    className={`bg-blue-500  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline contact-from-button hover-up mb-8 mt-2 custom-btn ${
                      agree ? '' : 'btn-disabled'
                    }`}
                    type='submit'
                    disabled={!agree}
                  >
                    Reset password
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;