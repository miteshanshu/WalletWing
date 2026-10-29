import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FiHeart } from "react-icons/fi";
import Card from "../components/Card/Card";
import { allProducts } from "../utils/catalog";
export default function Wishlist() {
  const saved = useSelector((state) => state.wishlist.items);
  const data = useSelector((state) => state.data.data);
  const products = allProducts(data);
  return (
    <div className="ww-container ww-page">
      <div className="ww-page-heading">
        <div>
          <p className="ww-eyebrow">For another day</p>
          <h1>Your wishlist</h1>
          <p className="ww-muted">{saved.length} saved favourites</p>
        </div>
      </div>
      {saved.length ? (
        <div className="ww-product-grid ww-home-grid">
          {saved.map((item) => (
            <Card
              key={item.id}
              productData={
                products.find(
                  (product) => String(product.id) === String(item.id),
                ) || {
                  ...item,
                  productName: item.name,
                  catImg: item.image,
                  productImages: [item.image],
                  weight: [],
                }
              }
            />
          ))}
        </div>
      ) : (
        <div className="ww-empty">
          <FiHeart size={42} />
          <h2>Save something you love</h2>
          <p>Tap a heart on any product to keep it here.</p>
          <Link className="ww-button" to="/product">
            Explore products
          </Link>
        </div>
      )}
    </div>
  );
}
