import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  FiMenu,
  FiX,
  FiSearch,
  FiShoppingBag,
  FiHeart,
  FiUser,
  FiHome,
  FiGrid,
  FiShuffle,
} from "react-icons/fi";
import DarkNightMode from "../../Common/DarkNightMode";
import { slugify } from "../../utils/catalog";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const menuButton = useRef(null);
  const { cart } = useSelector((state) => state.cart);
  const wishlist = useSelector((state) => state.wishlist.items.length);
  const compare = useSelector((state) => state.product.productItems.length);
  const user = useSelector((state) => state.auth.user);
  const categories = useSelector((state) => state.data.data);
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  const accountPath = user ? "/account" : "/login";
  useEffect(() => {
    setMenuOpen(false);
    setSearch(new URLSearchParams(location.search).get("q") || "");
  }, [location.pathname, location.search]);
  const submitSearch = (event) => {
    event.preventDefault();
    navigate(
      search.trim()
        ? `/product?q=${encodeURIComponent(search.trim())}`
        : "/product",
    );
  };
  const action = (to, Icon, label, badge) => (
    <Link
      className="ww-header-action"
      to={to}
      aria-label={`${label}${badge ? ` (${badge})` : ""}`}
    >
      <span className="ww-action-icon">
        <Icon aria-hidden="true" />
        {badge > 0 && (
          <span className="ww-badge">{badge > 99 ? "99+" : badge}</span>
        )}
      </span>
      <span className="ww-action-label">{label}</span>
    </Link>
  );
  return (
    <>
      <a href="#main-content" className="ww-skip">
        Skip to content
      </a>
      <div className="ww-announcement">
        Everyday essentials, a little easier.{" "}
        <span>Free delivery on orders ₹500 and above.</span>
      </div>
      <header className="ww-header">
        <div className="ww-header-inner ww-container">
          <button
            ref={menuButton}
            type="button"
            className="ww-icon-button ww-menu-toggle"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="site-navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
          <Link to="/" className="ww-brand" aria-label="Wallet Wing home">
            <span className="ww-brand-mark">
              <FiShoppingBag />
            </span>
            <span>
              Wallet<span className="ww-brand-accent">Wing</span>
              <small>Everyday, delivered.</small>
            </span>
          </Link>
          <form onSubmit={submitSearch} role="search" className="ww-search">
            <label className="sr-only" htmlFor="store-search">
              Search products
            </label>
            <input
              id="store-search"
              type="search"
              placeholder="Search products, brands & more"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
            <button type="submit" aria-label="Search">
              <FiSearch />
            </button>
          </form>
          <div className="ww-header-actions">
            <div className="ww-desktop-action">
              {action("/compare", FiShuffle, "Compare", compare)}
            </div>
            <div className="ww-desktop-action">
              {action("/wishlist", FiHeart, "Wishlist", wishlist)}
            </div>
            {action("/cart", FiShoppingBag, "Cart", count)}
            <div className="ww-desktop-action">
              {action(accountPath, FiUser, user ? "Account" : "Sign in")}
            </div>
            <DarkNightMode />
          </div>
        </div>
        <nav
          id="site-navigation"
          aria-label="Main navigation"
          className={`ww-navigation ${menuOpen ? "is-open" : ""}`}
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              setMenuOpen(false);
              menuButton.current?.focus();
            }
          }}
        >
          <div className="ww-container ww-nav-inner">
            <NavLink to="/product" className="ww-all-products">
              <FiGrid /> Browse all products
            </NavLink>
            {categories.map((category) => (
              <NavLink
                key={category.cat_name}
                to={`/${slugify(category.cat_name)}`}
              >
                {category.cat_name}
              </NavLink>
            ))}
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact-us">Contact</NavLink>
            <div className="ww-mobile-menu-links">
              <Link to="/compare">Compare ({compare})</Link>
              <Link to={accountPath}>{user ? "My account" : "Sign in"}</Link>
            </div>
          </div>
        </nav>
      </header>
      <nav className="ww-mobile-nav" aria-label="Mobile shortcuts">
        {[
          ["/", FiHome, "Home", 0],
          ["/product", FiGrid, "Shop", 0],
          ["/wishlist", FiHeart, "Wishlist", wishlist],
          ["/cart", FiShoppingBag, "Cart", count],
          [accountPath, FiUser, "Account", 0],
        ].map(([to, Icon, label, badge]) => (
          <NavLink end={to === "/"} key={label} to={to}>
            <span className="ww-action-icon">
              <Icon />
              {badge > 0 && (
                <span className="ww-badge">{badge > 99 ? "99+" : badge}</span>
              )}
            </span>
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>
    </>
  );
}
