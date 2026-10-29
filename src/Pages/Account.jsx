import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signOutUser } from "../store/authSlice";
import toast from "react-hot-toast";
export default function Account() {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logout = async () => {
    try {
      await dispatch(signOutUser()).unwrap();
      navigate("/");
      toast.success("Signed out");
    } catch {
      toast.error("Sign-out failed. Please try again.");
    }
  };
  return (
    <div className="ww-container ww-page">
      <div className="ww-page-heading">
        <div>
          <p className="ww-eyebrow">Your account</p>
          <h1>Hello, {user?.displayName || "there"}.</h1>
          <p>{user?.email}</p>
        </div>
        <button className="ww-button ww-button-outline" onClick={logout}>
          Sign out
        </button>
      </div>
      <div className="ww-account-links">
        <Link to="/wishlist">
          <h2>Your wishlist</h2>
          <p>All your saved favourites.</p>
        </Link>
        <Link to="/Order">
          <h2>Demo orders</h2>
          <p>Your practice checkouts on this device.</p>
        </Link>
        <Link to="/forget-password">
          <h2>Reset password</h2>
          <p>Request a password reset link by email.</p>
        </Link>
      </div>
    </div>
  );
}
