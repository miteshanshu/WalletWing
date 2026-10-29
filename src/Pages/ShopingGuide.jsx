import { Link } from "react-router-dom";
import GuideImg from "../assets/guide-1.png";

export default function ShopingGuide() {
  return (
    <div className="ww-container ww-page">
      <div className="ww-page-heading">
        <div>
          <p className="ww-eyebrow">Getting started</p>
          <h1>Shopping guide</h1>
          <p className="ww-muted">Explore Wallet Wing with a practice order.</p>
        </div>
      </div>
      <p className="ww-notice">
        This is a demo storefront. No payments, confirmation emails or
        deliveries are sent.
      </p>
      <img
        src={GuideImg}
        alt="Grocery shopping"
        className="w-full rounded-2xl mb-8"
      />
      <div className="single-content">
        <h2>1. Find a product</h2>
        <p>
          Browse categories or search by product or brand. Use the filters,
          sorting and page controls to narrow your results.
        </p>
        <h2>2. Choose your options</h2>
        <p>
          Open a product, choose a size or weight when offered, set the
          quantity, then add it to your cart. Save favourites to your wishlist
          or compare up to four products.
        </p>
        <h2>3. Review your cart</h2>
        <p>
          Update quantities or remove items before checkout. The demo adds 10%
          tax and ₹100 delivery for baskets below ₹500. Apply PROMO10 for a 10%
          discount on the displayed order total.
        </p>
        <h2>4. Try checkout</h2>
        <p>
          Use sample contact and delivery details. No payment details are
          required. Place demo order saves the basket and totals on this device,
          then empties your cart. Contact and address fields are not saved or
          sent.
        </p>
        <h2>5. View your demo order</h2>
        <p>
          The <Link to="/Order">demo order history</Link> keeps up to 20
          practice orders in this browser. It does not represent real purchases.
        </p>
        <h2>Need help?</h2>
        <p>
          <Link to="/contact-us">Contact Wallet Wing</Link> to prepare an email
          in your own email app.
        </p>
      </div>
    </div>
  );
}
