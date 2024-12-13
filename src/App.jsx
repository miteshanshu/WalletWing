/* eslint-disable react/prop-types */
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Login from './Pages/Login';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ErrorPage from './Pages/404Page';
import MaintenancePage from './Pages/Maintainece';
import Error500Page from './Pages/505Page';
import SignUpPage from './Pages/SignUp';
import ForgotPasswordPage from './Pages/ForgetPassword';
import { DarkModeProvider } from './Common/DarkModeProvider';
import Contact from './Pages/ContactUs';
import Home from './Pages/Home';
import ScrollToTopButton from '../src/Common/ScrollTop';
import ProductList from './Product-List/ProductList';
import About from './Pages/About';
import ResetPassword from './Pages/change-password';
import Account from './Pages/Account';
import Order from './Pages/Order';
import ShopingGuide from './Pages/ShopingGuide';
import PrivacyStatement from './Pages/PrivacyStatement';
import TermsAndConditions from './Pages/TermsAndConditions';
import Compare from './Pages/Compare';
import Wishlist from './Pages/Wishlist';
import { useEffect} from 'react';
import Cart from './Pages/Cart';
import Checkout from './Pages/Checkout';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './store/dataSlice';
import Loader from './Common/Loader';
import ProductDetailsPage from './Pages/ProductDetailsPage';
import { Toaster } from 'react-hot-toast';

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.data.loading);
  //  useEffect(() => {
  //     const handleBeforeUnload = (event) => {
  //        event.preventDefault();

  //        event.returnValue = '';
  //     };

  //     window.addEventListener('beforeunload', handleBeforeUnload);

  //     return () => {
  //        window.removeEventListener('beforeunload', handleBeforeUnload);
  //     };
  //  }, []);

  function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [pathname]);

    return null;
  }
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);





  return (
    <DarkModeProvider>
      <Toaster
        position='top-center'
        reverseOrder={false}
        gutter={8}
        containerStyle={{}}
        containerClassName=''
        toastOptions={{
          duration: 2000,
          style: {
            background: '#333',
            color: '#fff',
          },
        }}
      />
      <BrowserRouter>
        {isLoading && <Loader isLoading={isLoading} />}
        <Header  />
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='/product'
            element={<ProductList  />}
          />
          <Route
            path='/product/details/:productId'
            element={<ProductDetailsPage />}
          />
          <Route path='/:category' element={<ProductList />} />
          <Route path='/:category/:subcategory' element={<ProductList />} />
          <Route path='/Order' element={<Order />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/Guide' element={<ShopingGuide />} />
          <Route path='/Policy' element={<PrivacyStatement />} />
          <Route path='/checkout' element={<Checkout />} />

          <Route path='/compare' element={<Compare />} />
          <Route path='/wishlist' element={<Wishlist />} />
          <Route path='/terms' element={<TermsAndConditions />} />

          <Route path='/login' element={<Login />} />
          <Route path='/contact-us' element={<Contact />} />
          <Route path='/sign-up' element={<SignUpPage />} />
          <Route path='/forget-password' element={<ForgotPasswordPage />} />
          <Route path='/reset-password' element={<ResetPassword />} />
          <Route path='/account' element={<Account />} />
          <Route path='/about' element={<About />} />
          <Route path='/maintenance' element={<MaintenancePage />} />
          <Route path='/error-500' element={<Error500Page />} />
          <Route path='/*' element={<ErrorPage />} />
        </Routes>
        <ScrollToTopButton />
        <Footer />
      </BrowserRouter>
    </DarkModeProvider>
  );
}

export default App;
