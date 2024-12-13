import { IconButton, Rating } from '@mui/material';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { FaPhoneAlt, FaShoppingBag } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeAllFromCompare, removeFromCompare } from '../store/productSlice';
import { FiTrash2 } from 'react-icons/fi';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import { IoMdCloseCircleOutline } from 'react-icons/io';
import { useState } from 'react';

const Compare = () => {
  const products = useSelector((state) => state.product.productItems);
  const dispatch = useDispatch();
   const [open, setOpen] = useState(false); 



  const handleRemoveProduct = (id) => {
    dispatch(removeFromCompare(id));
  };




   const handleOpen = () => {
     setOpen(true);
   };

   const handleClose = () => {
     setOpen(false);
   };

   const handleConfirmDelete = () => {
     handleClose();
     dispatch(removeAllFromCompare());
   };

  return (
    <>
      {products.length === 0 ? (
        <div className='w-[85%] mx-auto py-16 text-center'>
          <h1 className='text-3xl font-semibold mb-4 dark:text-white'>
            No Products to Compare
          </h1>
          <p className='text-gray-600 dark:text-gray-400'>
            Start adding products to compare them and find the best one for you.
          </p>
        </div>
      ) : (
        <div className='w-[85%] mx-auto py-16'>
          <div className='flex justify-between items-center'>
            <div className='compare-left'>
              <h1 className='heading-bold mb-6 text-[42px] leading-4 dark:text-white'>
                Products Compare
              </h1>
              <h6 className='text-body mb-10 text-[#7e7e7e] dark:text-white'>
                There are <span className='text-brand'>{products.length}</span>{' '}
                products to compare
              </h6>
            </div>
            <div className='compare-right  gap-3 flex'>
              <button className='px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white   btn btn-sm custom-inline-flex gap-2'>
                <FaShoppingBag className='mr-1' size={14} />
                Add all to cart
              </button>
              <button
                className='px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white custom-inline-flex gap-2 bg-red'
                onClick={handleOpen}
              >
                <FiTrash2 className='mr-1' size={14} />
                Clear All
              </button>
            </div>
          </div>

          <div className='table-responsive'>
            <table className='table text-center table-compare'>
              <tbody>
                {/* Header row */}
                <tr className='pr_image'>
                  <td className='text-muted font-sm fw-600 font-heading '>
                    Preview
                  </td>
                  {products.map((product) => (
                    <td key={product.id} className='row_img'>
                      <img
                        src={product.image}
                        alt='compare-img'
                        className='max-w-[210px] rounded-xl mx-auto'
                      />
                    </td>
                  ))}
                </tr>
                {/* Other product details */}
                <tr className='pr_title'>
                  <td className='text-muted font-sm fw-600 font-heading'>
                    Name
                  </td>
                  {products.map((product) => (
                    <td key={product.id} className='product_name'>
                      <h6>
                        <Link
                          className='text-heading heading-bold text-[16px] hover-change dark:text-white'
                          to={`/product/details/${product.id}`}
                        >
                          {product.name}
                        </Link>
                      </h6>
                    </td>
                  ))}
                </tr>
                {/* Price */}
                <tr className='pr_price'>
                  <td className='text-muted font-heading dark:text-white'>
                    Price
                  </td>
                  {products.map((product) => (
                    <td key={product.id} className='product_price'>
                      <h4 className='price text-brand'>
                        {' '}
                        {product.price > 0 ? `₹${product.price}` : 'Free'}
                      </h4>
                    </td>
                  ))}
                </tr>
                {/* Rating */}
                <tr className='pr_rating'>
                  <td className='text-muted font-sm fw-600 font-heading'>
                    Rating
                  </td>
                  {products.map((product) => (
                    <td key={product.id}>
                      <div className='rating_wrap flex justify-center items-center'>
                        <div className='product-rate flex justify-center items-center'>
                          <Rating
                            name='read-only'
                            value={product.rating}
                            readOnly
                            size='small'
                          />
                        </div>
                        <span className='rating_num'>({product.rating})</span>
                      </div>
                    </td>
                  ))}
                </tr>
                {/* Description */}
                <tr className='description'>
                  <td className='text-muted font-sm fw-600 font-heading'>
                    Description
                  </td>
                  {products.map((product) => (
                    <td key={product.id} className='row_text'>
                      <p className='text-[16px] max-w-[90%]  mx-auto dark:text-white'>
                        {product.description}
                      </p>
                    </td>
                  ))}
                </tr>
                {/* Stock status */}
                <tr className='pr_stock'>
                  <td className='text-muted font-sm fw-600 font-heading'>
                    Stock status
                  </td>
                  {products.map((product) => (
                    <td key={product.id} className='row_stock'>
                      <span
                        className={`stock-status bg-${
                          product.inStock ? 'green' : 'red'
                        }-500 text-white px-2 py-1 rounded-lg`}
                      >
                        {product.inStock ? 'In Stock' : 'Out of Stock'}
                      </span>
                    </td>
                  ))}
                </tr>
                {/* Weight */}
                <tr className='product-weight-row'>
                  <td className='product-weight-label text-muted font-sm fw-600 font-heading'>
                    Weight
                  </td>
                  {products.map((product) =>
                    product.weight.length > 1 ? (
                      <td key={product.id} className='product-weight-value'>
                        <select className='product-weight-select block w-1/2 mx-auto py-2 px-3 border border-gray-300 bg-white dark:bg-gray-900 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500'>
                          {product.weight.map((weight, index) => (
                            <option key={index} value={weight}>
                              {weight}
                            </option>
                          ))}
                        </select>
                      </td>
                    ) : (
                      <td key={product.id} className='product-weight-value'>
                        <span>No weight information available</span>
                      </td>
                    )
                  )}
                </tr>

                {/* Buy now */}
                <tr className='pr_add_to_cart'>
                  <td className='text-muted font-sm fw-600 font-heading'>
                    Buy now
                  </td>
                  {products.map((product) =>
                    product.inStock ? (
                      <td key={product.id} className='row_btn'>
                        <button className='btn btn-sm custom-inline-flex gap-2'>
                          <FaShoppingBag className='mr-1' />
                          Add to cart
                        </button>
                      </td>
                    ) : (
                      <td key={product.id} className='row_add_to_cart'>
                        <Link to='contact-us' >
                          <button className='px-4 py-2 border border-transparent  rounded-md text-white btn-secondary btn-sm font-size-13 font-bold custom-inline-flex gap-2'>
                            <FaPhoneAlt className='mr-1' />
                            Contact Us
                          </button>
                        </Link>
                      </td>
                    )
                  )}
                </tr>
                {/* Remove */}
                <tr className='pr_remove text-muted'>
                  <td className='text-muted font-md fw-600'></td>
                  {products.map((product) => (
                    <td key={product.id} className='row_remove'>
                      <Link
                        to='#'
                        onClick={() => handleRemoveProduct(product.id)}
                        className='inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700'
                      >
                        <RiDeleteBin6Line className='mr-2' />
                        <span>Remove</span>
                      </Link>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
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
      )}
    </>
  );
};

export default Compare;




