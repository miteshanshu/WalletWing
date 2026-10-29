import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FiArrowLeft, FiCheckCircle } from "react-icons/fi";
import { cartTotals } from "../utils/cart";
import { money } from "../utils/catalog";
import { clearCart } from "../store/cartSlice";
import { addDemoOrder } from "../store/orderSlice";
import OrderSummary from "../components/Shop/OrderSummary";

export default function Checkout() {
  const { cart, promoCodeApplied } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [completed, setCompleted] = useState(null);
  const placeOrder = (event) => {
    event.preventDefault();
    if (!cart.length || completed) return;
    const order = {
      id: `DEMO-${nanoid(10).toUpperCase()}`,
      createdAt: new Date().toISOString(),
      items: cart.map((item) => ({ ...item })),
      totals: cartTotals(cart, promoCodeApplied),
    };
    // Only the basket is retained. Address and contact details never leave this form.
    dispatch(addDemoOrder(order));
    dispatch(clearCart());
    setCompleted(order);
    window.scrollTo({ top: 0, behavior: "auto" });
  };
  if (completed)
    return (
      <div className="ww-container ww-empty ww-checkout-success" role="status">
        <FiCheckCircle size={54} />
        <p className="ww-eyebrow">Demo complete</p>
        <h1>You’re all set.</h1>
        <p>
          Your demo order <strong>{completed.id}</strong> totals{" "}
          {money(completed.totals.total)}.
        </p>
        <p>
          No payment was taken and no real order was placed.
          <br />
          Your contact and delivery details were not saved or sent.
        </p>
        <Link className="ww-button" to="/Order">
          View demo order history
        </Link>
        <Link className="ww-text-button" to="/product">
          Continue shopping
        </Link>
      </div>
    );
  if (!cart.length)
    return (
      <div className="ww-container ww-empty">
        <h1>Your cart is empty</h1>
        <p>Add a product before checking out.</p>
        <Link className="ww-button" to="/product">
          Browse products
        </Link>
      </div>
    );
  return (
    <div className="ww-container ww-page">
      <Link className="ww-text-button ww-back" to="/cart">
        <FiArrowLeft /> Back to cart
      </Link>
      <div className="ww-page-heading">
        <div>
          <p className="ww-eyebrow">One last step</p>
          <h1>Checkout</h1>
        </div>
      </div>
      <p className="ww-notice">
        Try the checkout with sample details. This demo does not process
        payments or send delivery information.
      </p>
      <div className="ww-checkout-layout">
        <form
          id="checkout-form"
          className="ww-checkout-form"
          onSubmit={placeOrder}
        >
          <h2>Contact & delivery</h2>
          <div className="ww-form-grid">
            <label>
              Full name
              <input name="name" autoComplete="name" required maxLength={100} />
            </label>
            <label>
              Email address
              <input
                name="email"
                type="email"
                autoComplete="email"
                required
                maxLength={200}
              />
            </label>
            <label>
              Phone number
              <input
                name="phone"
                type="tel"
                autoComplete="tel"
                inputMode="tel"
                pattern="[+]?[0-9]{7,15}"
                required
                title="Enter 7 to 15 digits, with an optional + country code."
              />
            </label>
            <label>
              Country
              <select name="country" autoComplete="country-name">
                <option>India</option>
              </select>
            </label>
            <label className="ww-form-span">
              Street address
              <input
                name="address"
                autoComplete="street-address"
                required
                maxLength={200}
              />
            </label>
            <label>
              City
              <input
                name="city"
                autoComplete="address-level2"
                required
                maxLength={80}
              />
            </label>
            <label>
              State
              <input
                name="state"
                autoComplete="address-level1"
                required
                maxLength={80}
              />
            </label>
            <label>
              PIN code
              <input
                name="pin"
                autoComplete="postal-code"
                inputMode="numeric"
                pattern="[0-9]{6}"
                required
                title="Enter a 6-digit PIN code."
                maxLength={6}
              />
            </label>
          </div>
          <h2>Payment</h2>
          <div className="ww-demo-payment">
            <FiCheckCircle />
            <div>
              <strong>Demo checkout</strong>
              <p>No card or bank details needed.</p>
            </div>
          </div>
        </form>
        <OrderSummary>
          <button
            form="checkout-form"
            type="submit"
            className="ww-button ww-full-width"
          >
            Place demo order
          </button>
        </OrderSummary>
      </div>
    </div>
  );
}
