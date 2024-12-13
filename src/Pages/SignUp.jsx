import { PasswordInput } from '../Common/Password';
import { IoBookOutline } from 'react-icons/io5';
import googleImg from '../assets/google.svg';
import facebookImg from '../assets/Facebook-f_Logo-Blue-Logo.wine.svg';
import GithubImg from '../assets/GitHub-Logo.wine.svg';
import { useDispatch } from 'react-redux';
import { signInWithGoogle, signUp } from '../store/authSlice';
import { Link, useNavigate } from 'react-router-dom'; 
import { useState } from 'react';
import toast from 'react-hot-toast';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agree, setAgree] = useState(false);
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();


 const handleSubmit = async (event) => {
   event.preventDefault();

   if (password !== confirmPassword) {
     toast.error("Passwords don't match");
     return;
   }

   try {
     await dispatch(signUp({ username, email, password })).unwrap();

     setUsername('');
     setEmail('');
     setPassword('');
     setConfirmPassword('');
     setAgree(false);

     toast.success('Signup successful!');

      setTimeout(() => {
        navigate('/');
      }
      , 1000);


   } catch (err) {
  
     toast.error(
       err|| 'An error occurred during signup. Please try again.'
     );
   }
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
              <h1 className='mb-[5px]'>Create an Account</h1>
              <p className='mb-[30px]'>
                Already have an account? <Link to='/login'>Login</Link>{' '}
              </p>
              <form onSubmit={handleSubmit}>
                <div className='input-style mb-4'>
                  <input
                    name='username'
                    placeholder='Username'
                    type='text'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className='w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 dark:bg-gray-900 dark:text-white'
                  />
                </div>
                <div className='input-style mb-4'>
                  <input
                    name='email'
                    placeholder='Your Email'
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 dark:bg-gray-900 dark:text-white'
                  />
                </div>

                <PasswordInput
                  label='Password'
                  id='password'
                  passwordValue={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <PasswordInput
                  label='Confirm Password'
                  id='confirm_password'
                  passwordValue={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />

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
                    Create Account
                  </button>
                </div>

                <p className='font-[14px] text-[#B6B6B6]'>
                  <strong>Note:</strong>Your personal data will be used to
                  support your experience throughout this website, to manage
                  access to your account, and for other purposes described in
                  our privacy policy
                </p>
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

export default SignUp;
