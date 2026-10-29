import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { applyPromoCode, removePromoCode } from "../../store/cartSlice";
import { cartTotals } from "../../utils/cart";
import { money } from "../../utils/catalog";
import toast from "react-hot-toast";
export default function OrderSummary({ children }) {
  const { cart, promoCodeApplied } = useSelector((state) => state.cart);
  const totals = cartTotals(cart, promoCodeApplied);
  const [code, setCode] = useState("");
  const dispatch = useDispatch();
  const apply = (event) => {
    event.preventDefault();
    if (!cart.length) return;
    if (code.trim().toUpperCase() !== "PROMO10")
      return toast.error("That code is not valid. Try PROMO10.");
    dispatch(applyPromoCode(code));
    setCode("");
    toast.success("10% discount applied");
  };
  return (
    <aside className="ww-order-summary">
      <h2>Order summary</h2>
      <dl>
        <div>
          <dt>Subtotal</dt>
          <dd>{money(totals.subTotal)}</dd>
        </div>
        <div>
          <dt>Tax (10%)</dt>
          <dd>{money(totals.tax)}</dd>
        </div>
        <div>
          <dt>Delivery</dt>
          <dd>{totals.delivery ? money(totals.delivery) : "Free"}</dd>
        </div>
        {promoCodeApplied && (
          <div className="ww-savings">
            <dt>Promo discount (10%)</dt>
            <dd>−{money(totals.discount)}</dd>
          </div>
        )}
        <div className="ww-summary-total">
          <dt>Total</dt>
          <dd data-testid="order-total">{money(totals.total)}</dd>
        </div>
      </dl>
      {promoCodeApplied ? (
        <div className="ww-promo-applied">
          PROMO10 applied{" "}
          <button
            className="ww-text-button"
            onClick={() => dispatch(removePromoCode())}
          >
            Remove
          </button>
        </div>
      ) : (
        <form className="ww-coupon-form" onSubmit={apply}>
          <label htmlFor="promo-code">Have a coupon?</label>
          <div>
            <input
              id="promo-code"
              placeholder="Try PROMO10"
              value={code}
              onChange={(event) => setCode(event.target.value)}
            />
            <button type="submit" disabled={!cart.length || !code.trim()}>
              Apply
            </button>
          </div>
        </form>
      )}
      {children}
      <p className="ww-small ww-muted">
        This is a demo storefront. No payment is collected.
      </p>
    </aside>
  );
}
