import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import hero from "../../assets/slider-1.png";
export default function HomeSlider() {
  return (
    <section className="ww-container ww-hero-wrap">
      <div className="ww-hero" style={{ backgroundImage: `url(${hero})` }}>
        <div className="ww-hero-copy">
          <p className="ww-eyebrow">Your everyday store</p>
          <h1>
            Good things.
            <br />
            Better value.
          </h1>
          <p>
            From fresh groceries to your next favourite find.
            <br className="ww-desktop-break" /> Make room for a little more
            everyday.
          </p>
          <Link to="/product" className="ww-button">
            Explore the shop <FiArrowRight />
          </Link>
          <span className="ww-hero-note">
            Groceries · Electronics · Fashion · Home
          </span>
        </div>
      </div>
    </section>
  );
}
