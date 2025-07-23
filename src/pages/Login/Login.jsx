import './Login.css';
import logo from '../../assets/logo.png';
import loader from '../../assets/netflix_spinner.gif';
import { useEffect, useState } from 'react';
import { login, signup } from '../../Firebase';
import { toast } from 'react-toastify';

const Login = () => {
  const [signState, setSignState] = useState("Login");
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    document.title = `Netflix | ${signState}`;
  }, [signState]);

  const user_login = async (email, password) => {
    try {
      await login(email, password);
      toast.success("Logged in successfully!");
      return true;
    } catch (error) {
      toast.error(error.message || "Login failed.");
      return false;
    }
  };

  const user_signup = async (name, email, password) => {
    try {
      await signup(name, email, password);
      toast.success("Account created!");
      return true;
    } catch (error) {
      toast.error(error.message || "Signup failed.");
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password || (signState === "Sign Up" && !name)) {
      toast.warn("Please fill in all the required fields.");
      return;
    }

    setLoading(true);
    const success =
      signState === "Login"
        ? await user_login(email, password)
        : await user_signup(name, email, password);

    if (success) {
      setName("");
      setEmail("");
      setPassword("");
    }

    setLoading(false);
  };

  return loading ? (
    <div className="loading">
      <img src={loader} alt="Loading..." />
    </div>
  ) : (
    <div className="login">
      <img src={logo} className="login-logo" alt="Netflix Logo" />
      <div className="login-form">
        <h1>{signState}</h1>
        <form onSubmit={handleSubmit}>
          {signState === "Sign Up" && (
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Your name"
              required
            />
          )}
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Your email"
            required
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Your password"
            required
          />
          <button type="submit" disabled={loading}>
            {loading
              ? "Please wait..."
              : signState === "Login"
                ? "Login"
                : "Create account"}
          </button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signState === "Login" ? (
            <p>
              New to Netflix?
              <span onClick={() => setSignState("Sign Up")}>Sign Up Now</span>
            </p>
          ) : (
            <p>
              Already have an account?
              <span onClick={() => setSignState("Login")}>Sign In Now</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
