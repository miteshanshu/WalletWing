import { Link } from "react-router-dom";
import { FiArrowRight, FiShoppingBag } from "react-icons/fi";
export default function Footer() {
  return (
    <footer className="ww-footer">
      <div className="ww-container">
        <div className="ww-footer-top">
          <div>
            <Link to="/" className="ww-brand">
              <span className="ww-brand-mark">
                <FiShoppingBag />
              </span>
              <span>
                Wallet<span className="ww-brand-accent">Wing</span>
              </span>
            </Link>
            <p>
              Your everyday essentials,
              <br />
              all in one place.
            </p>
            <Link to="/product" className="ww-text-button">
              Find your next favourite <FiArrowRight />
            </Link>
          </div>
          <div>
            <h2>Explore</h2>
            <Link to="/product">Shop all</Link>
            <Link to="/groceries">Groceries</Link>
            <Link to="/fresh">Fresh produce</Link>
            <Link to="/electronics">Electronics</Link>
            <Link to="/fashion">Fashion</Link>
            <Link to="/home-decor">Home decor</Link>
          </div>
          <div>
            <h2>Here to help</h2>
            <Link to="/about">About Wallet Wing</Link>
            <Link to="/Guide">Shopping guide</Link>
            <Link to="/contact-us">Contact</Link>
            <Link to="/Order">Demo order history</Link>
            <Link to="/terms">Terms & conditions</Link>
            <Link to="/policy">Privacy policy</Link>
          </div>
          <div>
            <h2>Get in touch</h2>
            <a href="mailto:miteshanshu1@gmail.com">miteshanshu1@gmail.com</a>
            <a href="tel:+917667499479">+91 76674 99479</a>
            <p>
              Monday–Friday
              <br />
              9:30 AM–6:30 PM
            </p>
            <a
              href="https://github.com/miteshanshu/WalletWing"
              target="_blank"
              rel="noreferrer"
            >
              View the project ↗
            </a>
          </div>
        </div>
        <div className="ww-footer-bottom">
          <span>
            © {new Date().getFullYear()} Wallet Wing. Built by{" "}
            <a
              href="https://github.com/miteshanshu"
              target="_blank"
              rel="noreferrer"
            >
              Mitesh Anshu
            </a>
            .
          </span>
          <span>Demo storefront · No real payments</span>
        </div>
      </div>
    </footer>
  );
}
