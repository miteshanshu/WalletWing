import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FiTrash2,
  FiShoppingCart,
  FiRefreshCcw,
  FiXCircle,
} from 'react-icons/fi';
import { Button, IconButton, Rating } from '@mui/material';
import { FiLogOut } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import {
  clearCart,
  decreaseQuantityInCart,
  increaseQuantityInCart,
  removeItem,
  addTotal,
} from '../store/cartSlice';
import toast from 'react-hot-toast';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { IoMdCloseCircleOutline } from 'react-icons/io';

const Cart = () => {
  const products = useSelector((state) => state.cart.cart);
  const subTotal = useSelector((state) => state.cart.subTotal);
  const [subTotalValue, setSubTotal] = useState(subTotal);
  const [selectAll, setSelectAll] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);


console.log(formSubmitted)




const handlePreventDefault = (event) => {
    event.preventDefault();
  }

const handleSubmit = () => {
  if(email === '') {
    toast.error('Please enter your email');
  }
  else{
    toast.success('Email submitted successfully');
    setFormSubmitted(true);
    setEmail(''); 
  }
}

  





  const allProductsTotal = subTotalValue;

  const tax = Math.floor(subTotalValue * 0.1);
  const totalValue =
    subTotalValue +
    Math.floor(subTotalValue * 0.1) +
    (products.length > 0 ? (subTotalValue > 500 ? 0 : 100) : 0);


    const handleAddTotal = () => {
      dispatch(addTotal(totalValue));
    };

  useEffect(() => {
    setSubTotal(subTotal);
  }, [subTotal]);

  const dispatch = useDispatch();

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    setSelectedProducts(selectAll ? [] : products.map((product) => product.id));
  };

  const handleSelectProduct = (productId) => {
    const index = selectedProducts.indexOf(productId);
    if (index === -1) {
      setSelectedProducts([...selectedProducts, productId]);
    } else {
      setSelectedProducts(selectedProducts.filter((id) => id !== productId));
    }
  };

  const handleRemoveItem = (productId) => {
    const product = products.find((product) => product.id === productId);
    if (product) {
      dispatch(removeItem(product));
    }
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClearAll = () => {
    handleClose();
    dispatch(clearCart());
  };
  const increaseQuantity = (product) => {
    dispatch(increaseQuantityInCart(product));
  };

  const decreaseQuantity = (product) => {
    dispatch(decreaseQuantityInCart(product));
  };

  const handleUpdateCart = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      toast.success('Cart Updated Successfully');
    }, 2000);
  };



  return (
    <div className='w-[95%] mx-auto py-8'>
      <div className='flex justify-between'>
        <div>
          <h1 className='heading-bold mb-6 text-[44px] leading-4 dark:text-white'>
            Your Cart
          </h1>
          <h6 className='text-body mb-10 text-[#7e7e7e] dark:text-white'>
            There are{' '}
            <span className='text-brand dark:text-white'>
              {products.length}
            </span>{' '}
            products in this list
          </h6>
        </div>
        <div>
          <button className='btn btn-md text-white bg-gray-500 '>
            <Link to='/product'>
              <FiShoppingCart className='inline-block mr-2' size={20} />{' '}
              Continue Shopping
            </Link>
          </button>
        </div>
      </div>
      <div className='flex justify-between mb-6 w-[67%]'>
        <button
          className={`btn btn-sm  ${
            products.length === 0
              ? 'disabled'
              : 'text-white bg-blue hover:bg-blue-600'
          }`}
          onClick={() => handleUpdateCart()}
          disabled={products.length === 0}
        >
          <FiRefreshCcw
            className={`inline-block mr-2 ${isLoading ? 'animate-spin' : ''}`}
            size={20}
          />{' '}
          Update Cart
        </button>
        <button
          className={`btn btn-sm ${
            products.length === 0
              ? 'disabled'
              : 'text-white bg-red hover:bg-red-600'
          }`}
          onClick={handleOpen}
          disabled={products.length === 0}
        >
          <FiXCircle className='inline-block mr-2' size={20} /> Clear Cart
        </button>
      </div>

      <div className='flex justify-between gap-8'>
        <div className='w-[70%] overflow-x-auto table-border'>
          <table className='w-full divide-y divide-gray-200'>
            <thead className='bg-gray-50 wishlist'>
              <tr className='pl-6'>
                <th className='uppercase tracking-wider'>
                  <input
                    type='checkbox'
                    className='form-checkbox h-4 w-4'
                    id='selectAllCheckbox'
                    value=''
                    checked={selectAll}
                    onChange={handleSelectAll}
                  />
                </th>
                <th
                  className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                  colSpan='2'
                >
                  Product
                </th>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                  Unite Price
                </th>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                  Quantity
                </th>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                  Subtotal
                </th>

                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                  Remove
                </th>
              </tr>
            </thead>
            <tbody className=' divide-y divide-gray-200'>
              {/* Repeat this <tr> block for each product */}
              {products.map((product) => (
                <tr key={product.id}>
                  <td className='px-3 pl-6 py-4 whitespace-nowrap'>
                    <input
                      type='checkbox'
                      className='form-checkbox h-4 w-4'
                      id={`exampleCheckbox${product.id}`}
                      value=''
                      checked={selectedProducts.includes(product.id)}
                      onChange={() => handleSelectProduct(product.id)}
                    />
                  </td>
                  <td className='px-3 py-4 whitespace-nowrap'>
                    <img
                      className='max-w-[80px] border border-gray-300 rounded-xl'
                      src={product.catImg}
                      alt={product.brand}
                    />
                  </td>
                  <td className='px-3 py-4'>
                    <Link
                      to={`/product/details/${product.id}`}
                      className='text-heading heading-bold text-[15px] hover-change dark:text-white'
                    >
                      <h6 className='text-heading heading-bold text-[15px] hover-change dark:text-white'>
                        {product.productName}
                      </h6>
                    </Link>
                    <td>
                      <div className='rating_wrap flex justify-center items-center'>
                        <div className='product-rate flex justify-center items-center'>
                          <Rating
                            name='read-only'
                            value={product.rating}
                            precision={0.5}
                            readOnly
                            size='small'
                          />
                        </div>
                        <span className='rating_num'>({product.rating})</span>
                      </div>
                    </td>
                  </td>
                  <td className='px-3 py-4 whitespace-nowrap  text-center'>
                    <span className='px-4 py-2 inline-flex text-[16px] leading-5 font-semibold rounded-md bg-blue-100 text-blue-800'>
                      {product.price === 0 ? 'Free' : `₹ ${product.price}`}
                    </span>
                  </td>
                  <td className='px-3 py-4 whitespace-nowrap'>
                    <div className='flex items-center justify-center space-x-2'>
                      <button
                        className='border border-[#3BB77E] rounded-md bg-white shadow-sm text-sm font-medium text-gray-700  w-8 h-8'
                        onClick={() => decreaseQuantity(product)}
                      >
                        -
                      </button>
                      <input
                        type='number'
                        min='1'
                        className='w-10 h-8 border border-[#3BB77E] text-center rounded-md text-sm font-medium text-gray-700'
                        value={product.quantity}
                        readOnly
                      />
                      <button
                        className='border border-[#3BB77E] rounded-md bg-white shadow-sm text-sm font-medium text-gray-700  w-8 h-8'
                        onClick={() => increaseQuantity(product)}
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className='px-3 py-4 whitespace-nowrap text-sm font-medium text-center'>
                    <span className='px-4 py-2 inline-flex text-[16px] leading-5 font-semibold rounded-md bg-green-100 text-green-800'>
                      ₹{product.total}
                    </span>
                  </td>
                  <td className='px-3 py-4 whitespace-nowrap text-center text-sm font-medium'>
                    <Link
                      to='#'
                      onClick={() => handleRemoveItem(product.id)}
                      className='text-indigo-600 hover:text-indigo-900'
                    >
                      <FiTrash2 size={18} className='text-red-500' />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className='subtotal'>
          <div className='col-span-12 w-full mx-auto p-8 bg-white shadow-md rounded-md'>
            <h2 className='font-manrope font-bold text-3xl leading-10 text-black pb-8 border-b border-gray-300'>
              Order Summary
            </h2>
            <div className='mt-8'>
              <form onSubmit={handlePreventDefault}>
                <div className='block pb-6 w-[400px]'>
                  <div className='flex items-center justify-between py-2'>
                    <p className='font-medium text-lg leading-8 text-black'>
                      All Products Total
                    </p>
                    <p className='font-semibold text-lg leading-8 text-[#3BB77E]'>
                      ₹{allProductsTotal}
                    </p>
                  </div>
                  <div className='flex items-center justify-between py-2'>
                    <p className='font-medium text-lg leading-8 text-black'>
                      Tax
                    </p>
                    <p className='font-semibold text-lg leading-8 text-[#3BB77E]'>
                      ₹{tax}
                    </p>
                  </div>
                  <div className='flex items-center justify-between py-2'>
                    <p className='font-medium text-lg leading-8 text-black'>
                      Delivery
                    </p>
                    <p className='font-semibold text-lg leading-8 text-[#3BB77E]'>
                      {products.length > 0
                        ? subTotalValue > 500
                          ? 'Free'
                          : '₹100'
                        : '₹0'}
                    </p>
                  </div>
                </div>
                <div className='flex items-center mb-1.5 text-gray-600 text-sm font-medium'>
                  Optinal Email for Order Updates
                </div>
                <div className='flex pb-4 w-full'>
                  <div className='relative w-full '>
                    <input
                      type='email'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className='block w-full h-11 pr-11 pl-5 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-white border border-gray-300 rounded-lg placeholder-gray-500 focus:outline-gray-400 '
                      placeholder='Enter your email'
                    />
                  </div>
                </div>
                <div className='flex items-center border-b border-gray-200'>
                  <button
                    className='rounded-lg w-full bg-black py-2.5 px-4 text-white text-sm font-semibold text-center mb-8 transition-all duration-500 hover:bg-black/80'
                    onClick={() => handleSubmit()}
                  >
                    Submit
                  </button>
                </div>
                <div className='flex items-center justify-between py-8'>
                  <p className='font-medium text-xl leading-8 text-black'>
                    Subtotal
                  </p>
                  <p className='font-semibold text-xl leading-8 text-[#3BB77E]'>
                    ₹{totalValue}
                  </p>
                </div>

                <Link
                  to='/checkout'
                  className='w-full'
                  onClick={handleAddTotal}
                >
                  <button
                    className={`w-full text-center rounded-xl py-3 px-6 font-semibold text-xl transition-all duration-500 btn btn-md custom-inline-flex ${
                      products.length === 0
                        ? 'btn-disabled'
                        : 'text-white bg-blue-500 hover:bg-blue-600'
                    }`}
                    disabled={products.length === 0}
                  >
                    Checkout
                    <FiLogOut className='ml-3' size={20} />
                  </button>
                </Link>
              </form>
            </div>
          </div>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby='alert-dialog-title'
            aria-describedby='alert-dialog-description'
            PaperProps={{
              style: {
                padding: '5px',
              },
            }}
          >
            <DialogTitle id='alert-dialog-title'>
              Delete Confirmation
              <IconButton
                aria-label='close'
                onClick={handleClose}
                sx={{ position: 'absolute', right: 8, top: 8 }}
              >
                <IoMdCloseCircleOutline />
              </IconButton>
            </DialogTitle>
            <DialogContent>
              <DialogContentText id='alert-dialog-description'>
                Are you sure you want to delete all products?
              </DialogContentText>
            </DialogContent>
            <DialogActions sx={{ justifyContent: 'flex-end' }}>
              <Button onClick={handleClose}>No</Button>
              <Button
                onClick={handleClearAll}
                autoFocus
                sx={{
                  backgroundColor: 'red',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: 'darkred',
                  },
                }}
              >
                Yes
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default Cart;
