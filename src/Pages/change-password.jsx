import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { confirmPasswordReset } from "firebase/auth";
import { auth, authUnavailableMessage } from "../store/firebaseConfig";
export default function ResetPassword() {
  const [params] = useSearchParams();
  const code = params.get("oobCode");
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);
  const [pending, setPending] = useState(false);
  const submit = async (event) => {
    event.preventDefault();
    if (!auth || !code || pending) return;
    const data = new FormData(event.currentTarget);
    if (data.get("password") !== data.get("confirmPassword"))
      return setError("Passwords do not match.");
    setPending(true);
    setError("");
    try {
      await confirmPasswordReset(auth, code, data.get("password"));
      setDone(true);
    } catch {
      setError(
        "This reset link may have expired. Request a new link and try again.",
      );
    } finally {
      setPending(false);
    }
  };
  return (
    <div className="ww-auth-single ww-auth-card">
      <h1>{done ? "Password updated" : "Set a new password"}</h1>
      {!auth ? (
        <p className="ww-notice">{authUnavailableMessage}</p>
      ) : !code ? (
        <p>Open the reset link from your email to set a new password.</p>
      ) : done ? (
        <p>Your password has been changed. You can now sign in.</p>
      ) : (
        <form onSubmit={submit}>
          <label>
            New password
            <input
              name="password"
              type="password"
              autoComplete="new-password"
              required
              minLength={6}
            />
          </label>
          <label>
            Confirm password
            <input
              name="confirmPassword"
              type="password"
              autoComplete="new-password"
              required
              minLength={6}
            />
          </label>
          {error && (
            <p role="alert" className="ww-error">
              {error}
            </p>
          )}
          <button className="ww-button" disabled={pending}>
            {pending ? "Updating…" : "Update password"}
          </button>
        </form>
      )}
      <Link
        className="ww-text-button"
        to={done ? "/login" : "/forget-password"}
      >
        {done ? "Sign in" : "Request a new reset link"}
      </Link>
    </div>
  );
}
