import Auth from "../images/login.jpg";
import { Link } from "react-router-dom";

export default function Remember() {
  return (
    <main className="auth-container">
      <div className="auth-image">
        <img src={Auth} alt="authentication" />
      </div>
      <form className="authentication">
        <h3>Welcome Back</h3>
        <input type="text" placeholder="Username" className="form-input" />
        <input type="password" placeholder="Password" className="form-input" />
        <Link to="" className="form-links">
          Forgot Password
        </Link>
        <button type="submit" className="submit-button">
          Submit
        </button>
        <Link to="/signup" className="form-links">
          No account join us?
        </Link>
      </form>
    </main>
  );
}
