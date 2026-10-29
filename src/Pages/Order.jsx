import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { money } from "../utils/catalog";
export default function Order() {
  const orders = useSelector((state) => state.orders.items);
  return (
    <div className="ww-container ww-page">
      <div className="ww-page-heading">
        <div>
          <p className="ww-eyebrow">Saved on this device</p>
          <h1>Demo order history</h1>
          <p className="ww-muted">
            These are practice orders. No purchases or deliveries are scheduled.
          </p>
        </div>
      </div>
      {orders.length ? (
        <div className="ww-order-history">
          {orders.map((order) => (
            <article key={order.id}>
              <div className="ww-row">
                <strong>{order.id}</strong>
                <span>{money(order.totals.total)}</span>
              </div>
              <p className="ww-small ww-muted">
                {new Date(order.createdAt).toLocaleString("en-IN")}
              </p>
              <ul>
                {order.items.map((item, index) => (
                  <li key={index}>
                    {item.quantity} × {item.productName}
                    {item.selectedWeight ? ` (${item.selectedWeight})` : ""}
                  </li>
                ))}
              </ul>
              <span className="ww-filter-chip">Demo complete</span>
            </article>
          ))}
        </div>
      ) : (
        <div className="ww-empty">
          <h2>No demo orders yet</h2>
          <p>Your completed demo checkouts will appear here.</p>
          <Link to="/product" className="ww-button">
            Start shopping
          </Link>
        </div>
      )}
    </div>
  );
}
