import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { signIn, signUp, signInWithGoogle } from "../../store/authSlice";
import { auth, authUnavailableMessage } from "../../store/firebaseConfig";
import toast from "react-hot-toast";
export default function AuthPage({ register = false }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { loading, user } = useSelector((state) => state.auth);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const target = location.state?.from?.pathname || "/account";
  const handle = async (event) => {
    event.preventDefault();
    setError("");
    const data = new FormData(event.currentTarget);
    if (register && data.get("password") !== data.get("confirmPassword")) {
      setError("Passwords do not match.");
      return;
    }
    try {
      await dispatch(
        (register ? signUp : signIn)({
          username: data.get("username"),
          email: data.get("email"),
          password: data.get("password"),
        }),
      ).unwrap();
      toast.success(register ? "Account created" : "Welcome back");
      navigate(target, { replace: true });
    } catch (message) {
      setError(String(message));
    }
  };
  const google = async () => {
    setError("");
    try {
      await dispatch(signInWithGoogle()).unwrap();
      navigate(target, { replace: true });
    } catch (message) {
      setError(String(message));
    }
  };
  if (user)
    return (
      <div className="ww-container ww-empty">
        <h1>You’re signed in</h1>
        <Link to="/account" className="ww-button">
          Go to your account
        </Link>
      </div>
    );
  return (
    <div className="ww-auth-wrap">
      <section className="ww-auth-card">
        <p className="ww-eyebrow">Welcome to Wallet Wing</p>
        <h1>
          {register ? "Make yourself at home." : "Good to see you again."}
        </h1>
        <p className="ww-muted">
          {register ? (
            <>
              Already have an account?{" "}
              <Link to="/login" state={location.state}>
                Sign in
              </Link>
            </>
          ) : (
            <>
              New here?{" "}
              <Link to="/sign-up" state={location.state}>
                Create an account
              </Link>
            </>
          )}
        </p>
        {!auth && (
          <p className="ww-notice" role="status">
            {authUnavailableMessage}
          </p>
        )}
        <form onSubmit={handle}>
          {register && (
            <label>
              Your name
              <input
                name="username"
                autoComplete="name"
                required
                minLength={2}
                maxLength={80}
              />
            </label>
          )}
          <label>
            Email address
            <input name="email" type="email" autoComplete="email" required />
          </label>
          <label>
            Password
            <div className="ww-password">
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete={register ? "new-password" : "current-password"}
                minLength={register ? 6 : undefined}
                required
              />
              <button
                type="button"
                className="ww-icon-button"
                aria-label={showPassword ? "Hide password" : "Show password"}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
          </label>
          {register && (
            <>
              <label>
                Confirm password
                <input
                  name="confirmPassword"
                  type={showPassword ? "text" : "password"}
                  autoComplete="new-password"
                  required
                  minLength={6}
                />
              </label>
              <label className="ww-checkbox-label">
                <input type="checkbox" required />{" "}
                <span>
                  I agree to the <Link to="/terms">terms</Link> and{" "}
                  <Link to="/policy">privacy policy</Link>.
                </span>
              </label>
              <p className="ww-small ww-muted">
                Use at least 6 characters for your password.
              </p>
            </>
          )}
          {error && (
            <p role="alert" className="ww-error">
              {error}
            </p>
          )}
          <button
            type="submit"
            className="ww-button ww-full-width"
            disabled={loading || !auth}
          >
            {loading ? "Please wait…" : register ? "Create account" : "Sign in"}
          </button>
        </form>
        {!register && (
          <Link to="/forget-password" className="ww-text-button ww-forgot-link">
            Forgot password?
          </Link>
        )}
        <div className="ww-auth-divider">
          <span>or</span>
        </div>
        <button
          type="button"
          className="ww-button ww-button-outline ww-full-width"
          disabled={loading || !auth}
          onClick={google}
        >
          Continue with Google
        </button>
        <Link className="ww-text-button ww-forgot-link" to="/product">
          Continue browsing
        </Link>
      </section>
      <aside className="ww-auth-aside">
        <FiShoppingIllustration />
        <h2>
          All your favourites.
          <br />
          One little basket.
        </h2>
        <p>Groceries, fresh finds, and everyday essentials — right here.</p>
      </aside>
    </div>
  );
}
function FiShoppingIllustration() {
  return (
    <svg
      width="88"
      height="88"
      viewBox="0 0 88 88"
      fill="none"
      aria-hidden="true"
    >
      <path d="M20 28h48l5 47H15l5-47Z" stroke="currentColor" strokeWidth="3" />
      <path
        d="M31 35V23a13 13 0 0 1 26 0v12"
        stroke="currentColor"
        strokeWidth="3"
      />
      <path d="m32 53 9 8 17-19" stroke="currentColor" strokeWidth="3" />
    </svg>
  );
}
