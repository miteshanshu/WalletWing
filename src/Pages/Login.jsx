/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { PasswordInput } from '../Common/Password';
import googleImg from '../assets/google.svg';
import facebookImg from '../assets/Facebook-f_Logo-Blue-Logo.wine.svg';
import GithubImg from '../assets/GitHub-Logo.wine.svg';
import { Link, useNavigate } from 'react-router-dom';
import { signIn, signInWithGoogle } from '../store/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import {useState } from 'react';
import toast from 'react-hot-toast';



const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error('Please fill all fields');
      return;
    }

    dispatch(signIn({ email, password }))
      .unwrap()
      .then(() => {
        toast.success('Login successful!');
        setEmail('');
        setPassword('');
        setTimeout(() => {
          navigate('/');
        }, 1000);
      })
      .catch((error) => {
        if (error.message === 'User not found') {
          toast.error(
            'No account found with this email. Please consider signing up.'
          );
        } else {
          toast.error(
            'Please ensure your email and password are correct, or consider creating a new account.'
          );
        }
      });
  };


const handleGoogleSignIn = () => {
  dispatch(signInWithGoogle())
    .unwrap()
    .then(() => {
      toast.success('Sign in successful!');
      navigate('/');
    })
    .catch((error) => {
      toast.error(error || 'An error occurred. Please try again.');
    });
};





  return (
    <div>
      <div className='py-[120px]'>
        <div className='w-[66%] mx-auto flex justify-between'>
          <div className='w-[50%]'>
            <div className='heading_s1'>
              <h1 className='mb-[5px]'>Login to your account</h1>
              <p className='mb-[30px]'>
                Don't have an account? <Link to='/sign-up'>Create account</Link>{' '}
              </p>
              <form onSubmit={handleSubmit}>
                <div className='input-style mb-4'>
                  <input
                    name='text || email'
                    placeholder='Enter your username or email'
                    type='text'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 dark:bg-gray-900 dark:text-white'
                  />
                </div>
                <div className='input-style mb-4'>
                  <PasswordInput
                    passwordValue={password}
                    label='Password'
                    id='password'
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className='mb-6 flex justify-between items-center'>
                  <div className='forget-password'>
                    <label className='block text-gray-500  forget-check-lebal'>
                      <input className='mr-2 leading-tight' type='checkbox' />
                      <span className='text-sm dark:text-white'>
                        Remember me
                      </span>
                    </label>
                  </div>
                  <Link
                    to='/forget-password'
                    className='text-sm text-primary-700 hover:underline dark:text-primary-500'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      className='w-4 h-4 inline-block align-text-top'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z'
                      />
                    </svg>
                    <span className='inline-block ml-1'>Forgot Password</span>
                  </Link>
                </div>
                <div>
                  <button
                    className='bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline contact-from-button hover-up mb-8 mt-2 custom-btn'
                    type='submit'
                    disabled={loading}
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className='w-[50%]'>
            <div className='card-login mt-32'>
              <Link
                to='#'
                onClick={handleGoogleSignIn}
                className='social-login google-login flex items-center'
                style={{ backgroundColor: '#3BB77E', color: 'white' }}
              >
                <img src={googleImg} alt='' className='mr-2' />
                <span>Continue with Google</span>
              </Link>
              <Link
                to='#'
                className='social-login facebook-login flex items-center'
              >
                <img src={facebookImg} alt='' className='mr-2' />
                <span>Continue with Facebook</span>
              </Link>
          
              <Link
                to='#'
                className='social-login apple-login flex items-center'
              >
                <img src={GithubImg} alt='' className='mr-2' />
                <span>Continue with Github</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
