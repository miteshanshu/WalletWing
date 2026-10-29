import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Dialog, DialogTitle, DialogContent } from "@mui/material";
import { FiHeart, FiShuffle, FiEye, FiX, FiArrowRight } from "react-icons/fi";
import { addToWishlist, removeFromWishlist } from "../../store/wishlistSlice";
import { addToCompare } from "../../store/productSlice";
import { money, savedProduct } from "../../utils/catalog";
import ProductImage from "../Shop/ProductImage";
import toast from "react-hot-toast";

export default function Card({ productData: product }) {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const saved = useSelector((state) =>
    state.wishlist.items.some((item) => String(item.id) === String(product.id)),
  );
  const compare = useSelector((state) => state.product.productItems);
  const discount =
    product.oldPrice > product.price
      ? Math.round((1 - product.price / product.oldPrice) * 100)
      : 0;
  const toggleWishlist = () => {
    dispatch(
      saved
        ? removeFromWishlist(product.id)
        : addToWishlist(savedProduct(product)),
    );
    toast.success(saved ? "Removed from wishlist" : "Saved to wishlist");
  };
  const addCompare = () => {
    if (compare.some((item) => String(item.id) === String(product.id)))
      return toast("Already in your comparison");
    if (compare.length >= 4)
      return toast.error("Compare up to 4 products at a time.");
    dispatch(addToCompare(savedProduct(product)));
    toast.success("Added to comparison");
  };
  return (
    <article className="ww-product-card">
      <div className="ww-card-image">
        <Link
          to={`/product/details/${product.id}`}
          aria-label={`View ${product.productName}`}
        >
          <ProductImage src={product.catImg} alt={product.productName} />
        </Link>
        {discount > 0 && <span className="ww-discount">{discount}% off</span>}
        <button
          className={`ww-icon-button ww-save ${saved ? "is-saved" : ""}`}
          aria-label={`${saved ? "Remove" : "Save"} ${product.productName} ${saved ? "from" : "to"} wishlist`}
          aria-pressed={saved}
          onClick={toggleWishlist}
        >
          <FiHeart />
        </button>
      </div>
      <div className="ww-card-content">
        <p className="ww-eyebrow">{product.brand}</p>
        <Link className="ww-product-name" to={`/product/details/${product.id}`}>
          {product.productName}
        </Link>
        {product.rating ? (
          <span
            className="ww-rating"
            aria-label={`Rated ${product.rating} out of 5`}
          >
            <span aria-hidden="true">★</span> {product.rating}{" "}
            <span className="ww-muted">/ 5</span>
          </span>
        ) : null}
        <div className="ww-price">
          <strong>{money(product.price)}</strong>
          {discount > 0 && <del>{money(product.oldPrice)}</del>}
        </div>
        <div className="ww-card-actions">
          <Link
            className="ww-button ww-button-soft"
            to={`/product/details/${product.id}`}
          >
            Shop now <FiArrowRight />
          </Link>
          <button
            className="ww-icon-button"
            aria-label={`Quick view ${product.productName}`}
            onClick={() => setOpen(true)}
          >
            <FiEye />
          </button>
          <button
            className="ww-icon-button"
            aria-label={`Compare ${product.productName}`}
            onClick={addCompare}
          >
            <FiShuffle />
          </button>
        </div>
      </div>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        fullWidth
        maxWidth="sm"
        aria-labelledby={`quick-view-${product.id}`}
      >
        <DialogTitle
          id={`quick-view-${product.id}`}
          className="ww-dialog-title"
        >
          Quick view
          <button
            className="ww-icon-button"
            aria-label="Close quick view"
            onClick={() => setOpen(false)}
          >
            <FiX />
          </button>
        </DialogTitle>
        <DialogContent>
          <div className="ww-quick-view">
            <ProductImage src={product.catImg} alt={product.productName} />
            <h2>{product.productName}</h2>
            <p>{product.description}</p>
            <strong className="ww-price">{money(product.price)}</strong>
            <Link
              onClick={() => setOpen(false)}
              className="ww-button"
              to={`/product/details/${product.id}`}
            >
              View product & choose options <FiArrowRight />
            </Link>
          </div>
        </DialogContent>
      </Dialog>
    </article>
  );
}
