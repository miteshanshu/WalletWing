import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { FiArrowRight, FiTruck, FiHeart, FiShoppingBag } from "react-icons/fi";
import HomeSlider from "../components/HomeSlider/HomeSlider";
import Card from "../components/Card/Card";
import { allProducts, slugify } from "../utils/catalog";
import fresh from "../assets/info-1.png";
import breakfast from "../assets/info-2.png";
import organic from "../assets/info-3.png";
const banners = [
  {
    image: fresh,
    title: "Fresh picks for your everyday.",
    label: "The fresh edit",
    to: "/fresh",
  },
  {
    image: breakfast,
    title: "A better start to your morning.",
    label: "Pantry favourites",
    to: "/groceries",
  },
  {
    image: organic,
    title: "A little goodness in every basket.",
    label: "Fruit & vegetables",
    to: "/fresh/fresh-fruits",
  },
];
export default function Home() {
  const data = useSelector((state) => state.data.data);
  const [category, setCategory] = useState("All");
  const products = allProducts(data)
    .filter((product) => category === "All" || product.category === category)
    .slice(0, 12);
  return (
    <>
      <HomeSlider />
      <section className="ww-container ww-section">
        <div className="ww-section-heading">
          <div>
            <p className="ww-eyebrow">A little inspiration</p>
            <h2>Shop your everyday</h2>
          </div>
          <Link to="/product" className="ww-text-button">
            View all <FiArrowRight />
          </Link>
        </div>
        <div className="ww-feature-grid">
          {banners.map((banner) => (
            <Link
              className="ww-feature"
              key={banner.to}
              to={banner.to}
              style={{ backgroundImage: `url(${banner.image})` }}
            >
              <div>
                <p className="ww-eyebrow">{banner.label}</p>
                <h3>{banner.title}</h3>
                <span>
                  Shop now <FiArrowRight />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section className="ww-container ww-section">
        <div className="ww-section-heading">
          <div>
            <p className="ww-eyebrow">Find your favourites</p>
            <h2>Popular products</h2>
          </div>
          <Link to="/product" className="ww-text-button">
            Explore all <FiArrowRight />
          </Link>
        </div>
        <div
          className="ww-category-tabs"
          role="group"
          aria-label="Popular product categories"
        >
          {["All", ...data.map((item) => item.cat_name)].map((item) => (
            <button
              className={category === item ? "active" : ""}
              aria-pressed={category === item}
              key={item}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="ww-product-grid ww-home-grid">
          {products.map((product) => (
            <Card key={product.id} productData={product} />
          ))}
        </div>
      </section>
      <section className="ww-container ww-section">
        <div className="ww-category-strip">
          <div>
            <p className="ww-eyebrow">Something for every day</p>
            <h2>What’s on your list?</h2>
          </div>
          <div>
            {data.map((item) => (
              <Link to={`/${slugify(item.cat_name)}`} key={item.cat_name}>
                {item.cat_name}
                <FiArrowRight />
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section
        className="ww-container ww-benefits"
        aria-label="Shopping information"
      >
        <div>
          <FiTruck />
          <p>
            <strong>Delivery made simple</strong>
            <span>Free on orders ₹500 and above</span>
          </p>
        </div>
        <div>
          <FiHeart />
          <p>
            <strong>Keep your favourites</strong>
            <span>Save your picks for another day</span>
          </p>
        </div>
        <div>
          <FiShoppingBag />
          <p>
            <strong>Pick up where you left off</strong>
            <span>Your basket stays on this device</span>
          </p>
        </div>
      </section>
    </>
  );
}
