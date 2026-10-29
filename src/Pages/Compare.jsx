import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FiShuffle, FiX } from "react-icons/fi";
import { removeFromCompare, removeAllFromCompare } from "../store/productSlice";
import { money } from "../utils/catalog";
import ProductImage from "../components/Shop/ProductImage";
export default function Compare() {
  const products = useSelector((state) => state.product.productItems);
  const dispatch = useDispatch();
  return (
    <div className="ww-container ww-page">
      <div className="ww-page-heading">
        <div>
          <p className="ww-eyebrow">Make the right pick</p>
          <h1>Compare products</h1>
          <p className="ww-muted">Compare up to 4 products side by side.</p>
        </div>
        {products.length > 0 && (
          <button
            className="ww-text-button"
            onClick={() => dispatch(removeAllFromCompare())}
          >
            Clear comparison
          </button>
        )}
      </div>
      {!products.length ? (
        <div className="ww-empty">
          <FiShuffle size={40} />
          <h2>What’s on your shortlist?</h2>
          <p>Use the compare button on product cards to get started.</p>
          <Link className="ww-button" to="/product">
            Find products
          </Link>
        </div>
      ) : (
        <div
          className="ww-compare-scroll"
          tabIndex={0}
          role="region"
          aria-label="Product comparison table; scroll horizontally to see all products"
        >
          <table className="ww-compare-table">
            <caption className="sr-only">Product comparison</caption>
            <thead>
              <tr>
                <th scope="col">Product</th>
                {products.map((item) => (
                  <th scope="col" key={item.id}>
                    <button
                      className="ww-icon-button"
                      aria-label={`Remove ${item.name} from comparison`}
                      onClick={() => dispatch(removeFromCompare(item.id))}
                    >
                      <FiX />
                    </button>
                    <ProductImage src={item.image} alt={item.name} />
                    <Link to={`/product/details/${item.id}`}>{item.name}</Link>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ["Price", (p) => money(p.price)],
                ["Brand", (p) => p.brand || "—"],
                ["Rating", (p) => `${p.rating} / 5`],
                ["Description", (p) => p.description || "See product details"],
              ].map(([label, value]) => (
                <tr key={label}>
                  <th scope="row">{label}</th>
                  {products.map((item) => (
                    <td key={item.id}>{value(item)}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
