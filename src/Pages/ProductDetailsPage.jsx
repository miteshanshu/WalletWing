import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  FiArrowLeft,
  FiHeart,
  FiMinus,
  FiPlus,
  FiShoppingBag,
  FiShuffle,
} from "react-icons/fi";
import toast from "react-hot-toast";
import { addToCart } from "../store/cartSlice";
import { addToWishlist, removeFromWishlist } from "../store/wishlistSlice";
import { addToCompare } from "../store/productSlice";
import {
  allProducts,
  isAvailable,
  money,
  savedProduct,
  slugify,
} from "../utils/catalog";
import ProductImage from "../components/Shop/ProductImage";

export default function ProductDetailsPage() {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.data);
  const product = allProducts(data).find(
    (item) => String(item.id) === productId,
  );
  const saved = useSelector((state) =>
    state.wishlist.items.some((item) => String(item.id) === productId),
  );
  const compare = useSelector((state) => state.product.productItems);
  const [quantity, setQuantity] = useState(1);
  const [selectedWeight, setWeight] = useState("");
  const [image, setImage] = useState("");
  useEffect(() => {
    setImage(product?.catImg || "");
    setWeight("");
    setQuantity(1);
  }, [productId, product?.catImg]);
  if (!product)
    return (
      <div className="ww-container ww-empty">
        <h1>Product not found</h1>
        <p>This product may have moved or is no longer in the catalog.</p>
        <Link className="ww-button" to="/product">
          Back to the shop
        </Link>
      </div>
    );
  const options = product.weight || [];
  const images = [
    ...new Set(
      [product.catImg, ...(product.productImages || [])].filter(Boolean),
    ),
  ];
  const add = () => {
    if (options.length > 1 && !selectedWeight)
      return toast.error("Choose a size or weight first.");
    dispatch(
      addToCart({
        product: {
          ...product,
          selectedWeight: selectedWeight || options[0] || null,
        },
        quantity,
      }),
    );
    toast.success("Added to your cart");
    setQuantity(1);
  };
  const toggleSaved = () => {
    dispatch(
      saved
        ? removeFromWishlist(product.id)
        : addToWishlist(savedProduct(product)),
    );
    toast.success(saved ? "Removed from wishlist" : "Saved to wishlist");
  };
  const addCompare = () => {
    if (compare.some((item) => item.id === product.id))
      return toast("Already in your comparison");
    if (compare.length >= 4)
      return toast.error("Compare up to 4 products at a time.");
    dispatch(addToCompare(savedProduct(product)));
    toast.success("Added to comparison");
  };
  return (
    <div className="ww-container ww-page">
      <Link
        className="ww-text-button ww-back"
        to={`/${slugify(product.category)}`}
      >
        <FiArrowLeft /> Back to {product.category}
      </Link>
      <div className="ww-product-detail">
        <section className="ww-gallery" aria-label="Product photos">
          <div className="ww-main-image">
            <ProductImage src={image} alt={product.productName} eager />
          </div>
          <div className="ww-thumbnails">
            {images.map((src, index) => (
              <button
                key={src}
                className={src === image ? "active" : ""}
                aria-label={`Show product photo ${index + 1}`}
                aria-pressed={src === image}
                onClick={() => setImage(src)}
              >
                <ProductImage
                  src={src}
                  alt={`${product.productName}, view ${index + 1}`}
                />
              </button>
            ))}
          </div>
        </section>
        <section className="ww-product-copy">
          <p className="ww-eyebrow">
            {product.brand} / {product.subcategory}
          </p>
          <h1>{product.productName}</h1>
          <p className="ww-rating">
            <span aria-hidden="true">★</span> {product.rating} out of 5
          </p>
          <div className="ww-detail-price">
            <strong>{money(product.price)}</strong>
            {product.oldPrice > product.price && (
              <del>{money(product.oldPrice)}</del>
            )}
          </div>
          <p className="ww-description">{product.description}</p>
          {options.length > 1 && (
            <fieldset className="ww-option-picker">
              <legend>
                Size / Weight <span className="ww-muted">(choose one)</span>
              </legend>
              <div>
                {options.map((option) => (
                  <button
                    type="button"
                    key={option}
                    aria-pressed={String(option) === String(selectedWeight)}
                    className={
                      String(option) === String(selectedWeight) ? "active" : ""
                    }
                    onClick={() => setWeight(option)}
                  >
                    {option}
                    {typeof option === "number" &&
                    /groceries|fresh/i.test(product.category)
                      ? " g"
                      : ""}
                  </button>
                ))}
              </div>
            </fieldset>
          )}
          <div className="ww-purchase-row">
            <div className="ww-quantity" role="group" aria-label="Quantity">
              <button
                aria-label="Decrease quantity"
                disabled={quantity <= 1}
                onClick={() => setQuantity(quantity - 1)}
              >
                <FiMinus />
              </button>
              <output aria-live="polite">{quantity}</output>
              <button
                aria-label="Increase quantity"
                disabled={quantity >= 99}
                onClick={() => setQuantity(quantity + 1)}
              >
                <FiPlus />
              </button>
            </div>
            <button
              className="ww-button"
              disabled={!isAvailable(product)}
              onClick={add}
            >
              <FiShoppingBag />
              {isAvailable(product) ? "Add to cart" : "Out of stock"}
            </button>
          </div>
          <div className="ww-detail-actions">
            <button
              className="ww-text-button"
              onClick={toggleSaved}
              aria-pressed={saved}
            >
              <FiHeart />
              {saved ? "Saved to wishlist" : "Save for later"}
            </button>
            <button className="ww-text-button" onClick={addCompare}>
              <FiShuffle />
              Compare
            </button>
          </div>
          <p className="ww-delivery-note">
            Free delivery on orders ₹500 and above. Demo checkout available.
          </p>
        </section>
      </div>
      <section className="ww-product-information">
        <h2>Product information</h2>
        <dl>
          <div>
            <dt>Brand</dt>
            <dd>{product.brand}</dd>
          </div>
          <div>
            <dt>Category</dt>
            <dd>{product.category}</dd>
          </div>
          <div>
            <dt>Product ID</dt>
            <dd>{product.id}</dd>
          </div>
        </dl>
      </section>
    </div>
  );
}
