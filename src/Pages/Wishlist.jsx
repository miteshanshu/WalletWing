import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiTrash2 } from 'react-icons/fi';
import { IconButton, Rating } from '@mui/material';
import { FaPhoneAlt, FaShoppingBag } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromWishlist } from '../store/wishlistSlice';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import { IoMdCloseCircleOutline } from 'react-icons/io';

const Wishlist = () => {

  const [selectAll, setSelectAll] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.wishlist.items);
  const [open, setOpen] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);

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

  const handleClickOpen = (id) => {
    setProductToDelete(id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirmDelete = () => {
    if (productToDelete === null) {
      selectedProducts.forEach((productId) => {
        dispatch(removeFromWishlist(productId));
      });
      setSelectedProducts([]);
    } else {
      dispatch(removeFromWishlist(productToDelete));
      setSelectedProducts(
        selectedProducts.filter((id) => id !== productToDelete)
      );
    }
    setOpen(false);
  };

  const handleDeleteSelected = () => {
    if (selectedProducts.length > 0) {
      handleClickOpen(null);
    }
  };

  const handleProductDelete = (productId) => {
    if (!selectedProducts.includes(productId)) {
      dispatch(removeFromWishlist(productId));
    } else {
      handleClickOpen(productId);
    }
  };



  





  return (
    <div className='w-[90%] mx-auto py-8'>
      {products.length === 0 ? (
        <div className='text-center'>
          <h1 className='text-2xl font-semibold'>Your Wishlist is Empty</h1>
          <p className='text-gray-500 mt-2'>
            Start adding products to your wishlist.
          </p>
        </div>
      ) : (
        <>
          <div className='flex justify-between items-center'>
            <div className='wishlist-left'>
              <h1 className='heading-bold mb-6 text-[44px] leading-4 dark:text-white'>
                Your Wishlist
              </h1>
              <h6 className='text-body mb-10 text-[#7e7e7e] dark:text-white'>
                There are{' '}
                <span className='text-brand dark:text-white'>
                  {products.length}
                </span>{' '}
                products in this list
              </h6>
            </div>
            <div className='wishlist-right gap-3 flex'>
              <button className='px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white   btn btn-sm custom-inline-flex gap-2'>
                <FaShoppingBag className='mr-1' size={14} />
                Add all to cart
              </button>
              <button
                className={`px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white custom-inline-flex gap-2 ${
                  selectedProducts.length === 0
                    ? 'bg-gray-300'
                    : 'bg-red-600 hover:bg-red-600'
                }`}
                onClick={handleDeleteSelected}
                disabled={selectedProducts.length === 0}
              >
                <FiTrash2 className='mr-1' size={14} />
                Remove Select Items
              </button>
            </div>
          </div>
          <div className='w-full overflow-x-auto table-border'>
            <table className='w-full divide-y divide-gray-200 wishlist-table'>
              <thead className='bg-gray-50 wishlist'>
                <tr>
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
                    Price
                  </th>
                  <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Stock Status
                  </th>
                  <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Action
                  </th>
                  <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Remove
                  </th>
                </tr>
              </thead>
              <tbody className=' divide-y divide-gray-200'>
                {products.map((product) => (
                  <tr key={product.id}>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      <input
                        type='checkbox'
                        className='form-checkbox h-4 w-4'
                        id={`exampleCheckbox${product.id}`}
                        value=''
                        checked={selectedProducts.includes(product.id)}
                        onChange={() => handleSelectProduct(product.id)}
                      />
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      <img
                        className='max-w-[110px] border border-gray-300 rounded-xl'
                        src={product.image}
                        alt={product.name}
                      />
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      <h6>
                        <Link
                          className='text-heading heading-bold text-[16px] hover-change dark:text-white'
                          to={`/product/details/${product.id}`}
                        >
                          {product.name}
                        </Link>
                      </h6>
                      <td>
                        <div className='rating_wrap flex justify-center items-center'>
                          <div className='product-rate flex justify-center items-center'>
                            <Rating
                              name='read-only'
                              value={product.rating}
                              readOnly
                              precision={0.5}
                              size='small'
                            />
                          </div>
                          <span className='rating_num'>({product.rating})</span>
                        </div>
                      </td>
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-center'>
                      <span className='px-4 py-1 inline-flex text-[14px] leading-5 font-semibold rounded-md bg-green-100 text-green-800 '>
                        {product.price > 0 ? `₹${product.price}` : 'Free'}
                      </span>
                    </td>
                    <td className='row_stocks text-center'>
                      <span
                        className={`stock-statu font-bold py-2 px-2 text-xs ${
                          product.inStock === true ? 'inStock' : 'outOfStock'
                        } text-white rounded-lg mx-auto w-[60%] flex justify-center items-center`}
                      >
                        {product.stockStatus}
                      </span>
                    </td>
                    <td className='pl-2 py-4 whitespace-nowrap  text-sm font-medium text-center'>
                      {product.inStock === true ? (
                        <button className=' px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white   btn btn-sm custom-inline-flex gap-2'
                        
                        >
                          <FaShoppingBag className='mr-1' />
                          Add to cart
                        </button>
                      ) : (
                        <Link to={'/contact-us'}>
                          <button className='px-4 py-2 border border-transparent  rounded-md text-white btn-secondary btn-sm font-size-13 font-bold custom-inline-flex gap-2'>
                            <FaPhoneAlt className='mr-1' />
                            Contact Us
                          </button>
                        </Link>
                      )}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-center text-sm font-medium'>
                      <Link
                        to='#'
                        className='text-indigo-600 hover:text-indigo-900 custom-inline-flex gap-2 w-full'
                        onClick={() => handleProductDelete(product.id)}
                      >
                        <FiTrash2 size={18} className='text-red-500' />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
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
            Do you really want to delete this product from your wishlist?
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ justifyContent: 'flex-end' }}>
          <Button onClick={handleClose}>No</Button>
          <Button
            onClick={handleConfirmDelete}
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
  );
};

export default Wishlist;
