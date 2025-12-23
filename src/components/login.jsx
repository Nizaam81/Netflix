import "./login.css"
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../src/firebase";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/home");
    } catch (err) {
      switch (err.code) {
        case "auth/wrong-password":
          setError("Incorrect password. Please try again.");
          break;
        case "auth/user-not-found":
          setError("No account found with this email.");
          break;
        case "auth/invalid-email":
          setError("Please enter a valid email address.");
          break;
        case "auth/too-many-requests":
          setError("Too many attempts. Please try again later.");
          break;
        default:
          setError("Login failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login">
      <div className="login__background">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt="Netflix"
        />

        <div className="login__container">
          <h1>Sign In</h1>

          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email or mobile number"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            {error && <p style={{ color: "red" }}>{error}</p>}

            <button type="submit" disabled={loading}>
              {loading ? "Signing In..." : "Sign In"}
            </button>

            <div className="login__options">
              <label>
                <input type="checkbox" /> Remember me
              </label>
              <span className="help">Forgot password?</span>
            </div>
          </form>

          <p className="signup">
            New to Netflix? <span>Sign up now.</span>
          </p>

          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a bot.
            <span> Learn more.</span>
          </small>
        </div>
      </div>
    </div>
  );
}

export default Login;
