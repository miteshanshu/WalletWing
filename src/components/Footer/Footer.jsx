/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unescaped-entities */
import banner from '../../assets/banner-9.png';
import icon1 from '../../assets/icon-1.svg';
import icon2 from '../../assets/icon-2.svg';
import icon3 from '../../assets/icon-3.svg';
import icon4 from '../../assets/icon-4.svg';
import icon5 from '../../assets/icon-5.svg';
import './Footer.css';
import { FaEnvelope, FaLinkedin, FaPhone } from 'react-icons/fa6';
import logo from '../../assets/mitesh.png';
import payment from '../../assets/payment-method.png';
import apple from '../../assets/app-store.jpg';
import playstore from '../../assets/google-play.jpg';
import email from '../../assets/icon-email-2.svg';
import clock from '../../assets/icon-clock.svg';
import contact from '../../assets/icon-contact.svg';
import location from '../../assets/icon-location.svg';
import phoneCall from '../../assets/phone-call.svg';
import {
  FaFacebook,
  FaInstagram,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Footer = () => {
   const FooterData = [
      {
         id: 1,
         icon: icon1,
         title: 'Exclusive Offers',
         text: 'For Orders Above ₹5000',
      },
      {
         id: 2,
         icon: icon2,
         title: 'Fast services',
         text: 'Available 24/7 ',
      },
      {
         id: 3,
         icon: icon3,
         title: 'Daily Deal',
         text: 'Sign up for special discounts',
      },
      {
         id: 4,
         icon: icon4,
         title: 'Wide Choices',
         text: 'Mega savings on top products',
      },
      {
         id: 5,
         icon: icon5,
         title: 'Easy Returns',
         text: '7-day return policy',
      },
   ];
     const footerSecondData = [
       {
         title: 'Company',
         links: [
           { title: 'About Us', link: '/about' },
           { title: 'Delivery Information', link: '#' },
           { title: 'Privacy Policy', link: '/privacy' },
           { title: 'Terms & Conditions', link: '/terms' },
           { title: 'Contact Us', link: '/contact' },
         ],
       },
       {
         title: 'Account',
         links: [
           { title: 'My Account', link: '/account' },
           { title: 'Compare products', link: '/compare' },
           { title: 'Wish List', link: '/wishlist' },
           { title: 'View Cart', link: '/cart' },
           { title: 'Returns', link: '/contact-us' },
         ],
       },
       {
         title: 'Corporate',
         links: [
           { title: 'Purchase Order', link: '/account#orders' },
           { title: 'Terms of Use', link: '/terms' },
           { title: 'Privacy Policy', link: '/Policy' },
           { title: 'Purchase Guide', link: '/guide' },
           { title: 'Contact Us', link: '/contact-us' },
         ],
       },
       {
         title: 'Popular',
         links: [
           { title: 'Special Offers', link: '/product' },
           { title: 'Discounts', link: '/product' },
           { title: 'Reviews', link: '#' },
           { title: 'FAQs', link: '#' },
           { title: 'Blog', link: '#' },
         ],
       },
     ];
   return (
     <>
       <footer className=' dark:bg-gray-900 p-6 px-10'>
         <div className='relative newsletter-inner flex justify-between items-center mb-10 '>
           <div className='ml-16'>
             <div className='flex flex-col'>
               <h2 className='text-[#253D4E] dark:text-white text-[45px] mb-4 font-bold'>
                 Stay home & get your daily
               </h2>

               <h2 className='text-[#253D4E] dark:text-white text-[45px] mb-4  font-bold'>
                 needs from our shop
               </h2>
             </div>

             <div>
               <h3 className='text-[#7E7E7E] text-[22px] font-normal '>
                 Start You'r Daily Shopping with{' '}
                 <span className='text-[#29A56C]'>Our Mart</span>
               </h3>
             </div>
             <div className='flex items-center gap-2 mt-10 outline-none border-none'>
               <input
                 type='email'
                 name='email'
                 id='email'
                 placeholder='Subscribe for latest updates'
                 className='px-8 py-3 rounded-[25px] border-2 border-gray-300 focus:outline-none focus:border-green-500 dark:text-black dark:placeholder:text-black'
               />
               <button className='flex items-center gap-2 bg-green-500 text-white px-8 py-3 rounded-[25px] hover:bg-green-700 transition-colors duration-200'>
                 <FaEnvelope />
                 Subscribe
               </button>
             </div>
           </div>
           <div className='banner-9'>
             <img src={banner} alt='' />
           </div>
         </div>
         <div className='grid grid-cols-5 gap-4  mt-16 mb-24'>
           {FooterData.map((data, i) => (
             <div
               key={i}
               className='bg-[#F4F6FA] flex items-center p-4 px-0 rounded-lg'
             >
               <div className='rounded-xl p-[10px] hover-up'>
                 <img src={data.icon} alt='' />
               </div>
               <div className='ml-4'>
                 <h3 className='text-[#253D4E]  dark:text-black text-[1.1rem]   mb-2 font-bold'>
                   {data?.title}
                 </h3>
                 <h4>{data?.text}</h4>
               </div>
             </div>
           ))}
         </div>

         <div className='grid grid-cols-7 gap-4 mt-16  footer-list'>
           <div className='col-span-2'>
             <div className=''>
               <Link to='/' className='mb-15'>
                 <img src={logo} alt='logo' className='h-[150px] w-full' />
               </Link>
             </div>
             <ul>
               <li className='flex items-start my-4 space-x-1'>
                 <img src={location} alt='' />
                 <strong className='text-[#253D4E] text-[15px] font-bold dark:text-white'>
                   Address:
                 </strong>
                 <span className='text-[#253D4E] text-[15px] font-normal dark:text-white'>
                   Roorkee, Uttrakhand, 247664
                 </span>
               </li>
               <li className='flex items-center my-4  space-x-1'>
                 <img src={contact} alt='' />
                 <strong className='text-[#253D4E] text-[15px] font-bold dark:text-white'>
                   Mobile No:
                 </strong>
                 <span className='text-[#253D4E] text-[15px] font-normal dark:text-white'>
                   7667499479
                 </span>
               </li>
               <li className='flex items-center my-4 space-x-1'>
                 <img src={email} alt='' />
                 <strong className='text-[#253D4E] text-[15px] font-bold dark:text-white'>
                   Email:
                 </strong>
                 <span className='text-[#253D4E] text-[15px] font-normal dark:text-white'>
                  miteshanshu1@gmail.com
                 </span>
               </li>
               <li className='flex items-center my-4 space-x-1'>
                 <img src={clock} alt='' />
                 <strong className='text-[#253D4E] text-[15px] font-bold dark:text-white'>
                   Hours:
                 </strong>
                 <span className='text-[#253D4E] text-[15px] font-normal dark:text-white'>
                   Monday - Friday : 9:30 AM to 6:30 PM
                 </span>
               </li>
             </ul>
           </div>
           {footerSecondData.map((data, i) => (
             <div key={i} className='col-span-1 ml-[3rem] '>
               <h4 className='mb-5 text-[22px] text-[#253D4E] font-bold dark:text-white'>
                 {data.title}
               </h4>
               <ul className='flex flex-col gap-4'>
                 {data.links.map((link, j) => (
                   <li
                     key={j}
                     className='hover:translate-x-2 transition-transform duration-500 dark:text-white'
                   >
                     <Link to={link.link}>{link.title}</Link>
                   </li>
                 ))}
               </ul>
             </div>
           ))}
           <div className='col-span-1 '>
             <h4 className='mb-5 text-[24px] text-[#253D4E] font-bold leading-6  dark:text-white'>
               Install App
             </h4>
             <p className='my-2 text-[#253D4E] text-[15px] font-normal  dark:text-white'>
               From App Store or Google Play
             </p>
             <div className='flex flex-wrap my-5 justify-start gap-3'>
               <Link to='#' className='hover-up'>
                 <img src={apple} alt='' className='max-w-[120px]' />
               </Link>
               <Link to='#' className='hover-up'>
                 <img src={playstore} alt='' className='max-w-[120px]' />
               </Link>
             </div>
             <p className='my-2 text-[#253D4E] text-[15px] font-normal  dark:text-white'>
               Secured Payment Gateways
             </p>
             <img src={payment} alt='' />
           </div>
         </div>
       </footer>
       <footer className='py-3   border-t border-[#9cf1ca] mt-2'>
         <div className='flex justify-around items-center'>
           <div className='flex justify-center items-center my-8'>
             <p className='text-black dark:text-white text-center mb-0 mr-2'>
               &copy;{new Date().getFullYear()} Powered by
             </p>
             <p>
               <Link
                 to='https://github.com/miteshanshu'
                 target='_blank'
                 rel='noreferrer'
                 className='text-black dark:text-white'
               >
                 <span className='text-[#29A56C] mb-0'>Mitesh Anshu</span>
               </Link>
             </p>
             <br />
           </div>
           <div>
             <div className='hotline inline-flex mr-8 min-w-[200px]'>
               <img src={phoneCall} alt='hotline' />
               <Link to='tel:+917667499479' className='hover-up'>
                 <p>
                   7667499479
                   <span className='dark:text-white'>Working Mon - Fri</span>
                 </p>
               </Link>
             </div>
             <div className='hotline inline-flex mr-8 min-w-[200px]'>
               <img src={phoneCall} alt='hotline' />
               <Link to='tel:+919507852706' className='hover-up'>
                 <p>
                  9507852706
                   <span className='dark:text-white'>24/7 Support Center</span>
                 </p>
               </Link>
             </div>
           </div>
           <div className='flex gap-3 items-center justify-center social-icon'>
             <h6 className='mr-2 text-[##253D4E] font-bold dark:text-white'>
               Follow Us
             </h6>
             <Link
               to='https://www.facebook.com/miteshsri.2208/'
               target='_blank'
               rel='noreferrer'
               className='hover-up'
             >
               <FaFacebook className='icon' size={16} color='white' />
             </Link>
             <Link
               to='https://www.linkedin.com/in/miteshanshu/'
               className='hover-up'
               target='_blank'
               rel='noreferrer'
             >
               <FaLinkedin className='icon' size={16} color='white' />
             </Link>
             <Link
               to='https://www.instagram.com/miteshsri2208_/'
               target='_blank'
               rel='noreferrer'
               className='hover-up'
             >
               <FaInstagram className='icon' size={16} color='white' />
             </Link>
             <Link to='mailto:miteshanshu1@gmail.com' className='hover-up'>
               <FaEnvelope className='icon' size={16} color='white' />
             </Link>
             <Link to='tel:+917667499479' className='hover-up'>
               <FaPhone className='icon' size={16} color='white' />
             </Link>
           </div>
         </div>
       </footer>
     </>
   );
};

export default Footer;
