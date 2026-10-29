import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import {
  FiArrowRight,
  FiShoppingBag,
  FiMinus,
  FiPlus,
  FiTrash2,
} from "react-icons/fi";
import {
  clearCart,
  decreaseQuantityInCart,
  increaseQuantityInCart,
  removeItem,
} from "../store/cartSlice";
import { cartKey } from "../utils/cart";
import { money } from "../utils/catalog";
import ProductImage from "../components/Shop/ProductImage";
import OrderSummary from "../components/Shop/OrderSummary";
export default function Cart() {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [confirmClear, setConfirmClear] = useState(false);
  const [selected, setSelected] = useState([]);
  const selectedItems = cart.filter((item) => selected.includes(cartKey(item)));
  const allSelected = cart.length > 0 && selectedItems.length === cart.length;
  const removeSelected = () => {
    selectedItems.forEach((item) => dispatch(removeItem(item)));
    setSelected([]);
  };
  return (
    <div className="ww-container ww-page">
      <div className="ww-page-heading">
        <div>
          <p className="ww-eyebrow">Your everyday picks</p>
          <h1>Your cart</h1>
          <p className="ww-muted">
            {cart.reduce((sum, item) => sum + item.quantity, 0)} items in your
            basket
          </p>
        </div>
        <Link to="/product" className="ww-text-button">
          Continue shopping <FiArrowRight />
        </Link>
      </div>
      {!cart.length ? (
        <div className="ww-empty">
          <FiShoppingBag size={42} />
          <h2>Your basket is waiting</h2>
          <p>Discover something you’ll love, then add it here.</p>
          <Link className="ww-button" to="/product">
            Explore products <FiArrowRight />
          </Link>
        </div>
      ) : (
        <div className="ww-cart-layout">
          <section className="ww-cart-items" aria-label="Cart items">
            <div className="ww-cart-toolbar">
              <label>
                <input
                  type="checkbox"
                  checked={allSelected}
                  onChange={() =>
                    setSelected(allSelected ? [] : cart.map(cartKey))
                  }
                />{" "}
                Select all
              </label>
              <div>
                <button
                  className="ww-text-button"
                  disabled={!selectedItems.length}
                  onClick={removeSelected}
                >
                  Remove selected
                </button>
                <button
                  className="ww-text-button"
                  onClick={() => setConfirmClear(true)}
                >
                  Clear cart
                </button>
              </div>
            </div>
            {cart.map((item) => (
              <article className="ww-cart-item" key={cartKey(item)}>
                <input
                  type="checkbox"
                  aria-label={`Select ${item.productName}${item.selectedWeight ? ` (${item.selectedWeight})` : ""}`}
                  checked={selected.includes(cartKey(item))}
                  onChange={() =>
                    setSelected((items) =>
                      items.includes(cartKey(item))
                        ? items.filter((key) => key !== cartKey(item))
                        : [...items, cartKey(item)],
                    )
                  }
                />
                <Link
                  to={`/product/details/${item.id}`}
                  className="ww-cart-image"
                >
                  <ProductImage src={item.catImg} alt={item.productName} />
                </Link>
                <div className="ww-cart-description">
                  <span className="ww-eyebrow">{item.brand}</span>
                  <Link to={`/product/details/${item.id}`}>
                    {item.productName}
                  </Link>
                  {item.selectedWeight != null && (
                    <span className="ww-small ww-muted">
                      Size / Weight: {item.selectedWeight}
                    </span>
                  )}
                  <span className="ww-small">{money(item.price)} each</span>
                </div>
                <div
                  className="ww-quantity"
                  role="group"
                  aria-label={`Quantity for ${item.productName}${item.selectedWeight != null ? ` (${item.selectedWeight})` : ""}`}
                >
                  <button
                    aria-label={`Decrease ${item.productName}${item.selectedWeight != null ? ` (${item.selectedWeight})` : ""}`}
                    disabled={item.quantity <= 1}
                    onClick={() => dispatch(decreaseQuantityInCart(item))}
                  >
                    <FiMinus />
                  </button>
                  <output aria-live="polite">{item.quantity}</output>
                  <button
                    aria-label={`Increase ${item.productName}${item.selectedWeight != null ? ` (${item.selectedWeight})` : ""}`}
                    disabled={item.quantity >= 99}
                    onClick={() => dispatch(increaseQuantityInCart(item))}
                  >
                    <FiPlus />
                  </button>
                </div>
                <strong className="ww-cart-line-total">
                  {money(item.price * item.quantity)}
                </strong>
                <button
                  className="ww-icon-button ww-remove"
                  aria-label={`Remove ${item.productName}${item.selectedWeight != null ? ` (${item.selectedWeight})` : ""} from cart`}
                  onClick={() => dispatch(removeItem(item))}
                >
                  <FiTrash2 />
                </button>
              </article>
            ))}
          </section>
          <OrderSummary>
            <Link className="ww-button ww-full-width" to="/checkout">
              Continue to checkout <FiArrowRight />
            </Link>
          </OrderSummary>
        </div>
      )}
      <Dialog
        open={confirmClear}
        onClose={() => setConfirmClear(false)}
        aria-labelledby="clear-cart-title"
      >
        <DialogTitle id="clear-cart-title">Clear your cart?</DialogTitle>
        <DialogContent>This removes all items from this basket.</DialogContent>
        <DialogActions>
          <button
            className="ww-button ww-button-outline"
            onClick={() => setConfirmClear(false)}
          >
            Keep items
          </button>
          <button
            className="ww-button"
            onClick={() => {
              dispatch(clearCart());
              setSelected([]);
              setConfirmClear(false);
            }}
          >
            Clear cart
          </button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
