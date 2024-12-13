/* eslint-disable react/prop-types */
import loader from '../assets/loading.gif';

const Loader = ({ isLoading }) => {
  return (
    <div id='preloader-active' className={isLoading ? '' : 'hidden'}>
      <div className='preloader flex items-center justify-center'>
        <div className='preloader-inner relative'>
          <div className='text-center'>
            <img src={loader} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;