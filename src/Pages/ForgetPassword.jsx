import { useState } from "react";
import { Link } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth, authUnavailableMessage } from "../store/firebaseConfig";
export default function ForgotPassword() {
  const [status, setStatus] = useState("");
  const [pending, setPending] = useState(false);
  const submit = async (event) => {
    event.preventDefault();
    if (!auth || pending) return;
    const email = new FormData(event.currentTarget).get("email");
    setPending(true);
    try {
      await sendPasswordResetEmail(auth, email);
      setStatus(
        "If an account exists for this email, you’ll receive password reset instructions.",
      );
    } catch {
      setStatus(
        "We couldn’t send the reset email. Check your connection and try again.",
      );
    } finally {
      setPending(false);
    }
  };
  return (
    <div className="ww-auth-single ww-auth-card">
      <p className="ww-eyebrow">Let’s get you back in</p>
      <h1>Forgot password?</h1>
      <p>Enter your account email to receive a reset link.</p>
      {!auth && <p className="ww-notice">{authUnavailableMessage}</p>}
      <form onSubmit={submit}>
        <label>
          Email address
          <input type="email" name="email" autoComplete="email" required />
        </label>
        <button className="ww-button ww-full-width" disabled={!auth || pending}>
          {pending ? "Sending…" : "Send reset link"}
        </button>
      </form>
      {status && (
        <p role="status" className="ww-notice">
          {status}
        </p>
      )}
      <Link className="ww-text-button" to="/login">
        Back to sign in
      </Link>
    </div>
  );
}
