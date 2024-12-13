import { useState } from 'react';
import resetPasswordImg from '../assets/reset_password.svg';
import { IoMdEyeOff , IoMdEye } from 'react-icons/io';
const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [passwordMatchError, setPasswordMatchError] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    if (passwordMatchError) {
      setPasswordMatchError(false);
    }
    if (passwordMatch) {
      setPasswordMatch(false); 
    }
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
    if (passwordMatchError) {
      setPasswordMatchError(false);
    }
    if (passwordMatch) {
      setPasswordMatch(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setPasswordMatchError(true);
      setPasswordMatch(false); 
    } else {
      setPasswordMatchError(false);
      setPasswordMatch(true);
     
    }
  };
  

  return (
    <div>
      <div className='page-content pt-[120px] pb-[100px]'>
        <div className='w-1/2 mx-auto'>
          <div className='heading_s1'>
            <img
              className='rounded-md'
              src={resetPasswordImg}
              alt='Forgot Password'
            />
            <h2 className='mb-[15px] mt-[15px] text-[#253D4E] font-semibold leading-snug text-4xl dark:text-white'>
              Set new password
            </h2>
            <p className='text-base font-normal leading-6 mb-8 text-custom-gray dark:text-white'>
              Please create a new password that you don’t use on any other site.
            </p>
            <div className='flex items-start justify-between'>
              <div className='left-form w-1/2'>
                <form onSubmit={handleSubmit}>
                  <div className='relative mb-4 forget-input'>
                    <input
                      className={`w-full py-2 px-4 border rounded-md focus:outline-none ${
                        passwordMatchError
                          ? 'border-red-500'
                          : 'border-gray-300'
                      } dark:bg-gray-900 dark:text-white mb-2`}
                      type={isPasswordVisible ? 'text' : 'password'}
                      required
                      name='password'
                      placeholder='Password *'
                      value={password}
                      onChange={handlePasswordChange}
                    />
                    <button
                      type='button'
                      onClick={togglePasswordVisibility}
                      className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500'
                    >
                      {isPasswordVisible ? (
                        <IoMdEyeOff size={22} />
                      ) : (
                        <IoMdEye size={22} />
                      )}
                    </button>
                  </div>
                  <div className='relative mb-4 forget-input'>
                    <input
                      className={`w-full py-2 px-4 border rounded-md focus:outline-none ${
                        passwordMatchError
                          ? 'border-red-500'
                          : 'border-gray-300'
                      } dark:bg-gray-900 dark:text-white mb-2`}
                      type={isPasswordVisible ? 'text' : 'password'}
                      required
                      name='confirmPassword'
                      placeholder='Confirm Password *'
                      value={confirmPassword}
                      onChange={handleConfirmPasswordChange}
                    />
                    <button
                      type='button'
                      onClick={togglePasswordVisibility}
                      className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500'
                    >
                      {isPasswordVisible ? (
                        <IoMdEyeOff size={22} />
                      ) : (
                        <IoMdEye size={22} />
                      )}
                    </button>
                  </div>

                  {passwordMatchError && (
                    <p className='text-red-500 mb-2'>Passwords do not match</p>
                  )}

                  {passwordMatch && (
                    <p className='text-green-500 mb-2'>Passwords match</p>
                  )}

                  <div>
                    <button
                      className='bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline contact-from-button hover-up btn-md mt-2'
                      type='submit'
                    >
                      Reset password
                    </button>
                  </div>
                </form>
              </div>
              <div className='right-info w-1/2'>
                <div className='w-full pl-[50px]'>
                  <h6 className='mb-[15px] text-[#253D4E] font-bold dark:text-white'>
                    Password must:
                  </h6>
                  <p className='dark:text-white'>
                    Be between 9 and 64 characters
                  </p>
                  <p className='dark:text-white'>
                    Include at least two of the following:
                  </p>
                  <ol className='text-sm font-normal leading-6 text-[#7E7E7E] dark:text-white'>
                    <li
                      className={`custom-list-inside ${
                        password && /[A-Z]/.test(password)
                          ? 'text-green-500'
                          : ''
                      }`}
                    >
                      An uppercase character
                    </li>
                    <li
                      className={`custom-list-inside ${
                        password && /[a-z]/.test(password)
                          ? 'text-green-500'
                          : ''
                      }`}
                    >
                      A lowercase character
                    </li>
                    <li
                      className={`custom-list-inside ${
                        password && /\d/.test(password) ? 'text-green-500' : ''
                      }`}
                    >
                      A number
                    </li>
                    <li
                      className={`custom-list-inside ${
                        password && /[\W_]/.test(password)
                          ? 'text-green-500'
                          : ''
                      }`}
                    >
                      A special character
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      
    </div>
  );
};

export default ResetPassword;
