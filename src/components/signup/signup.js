import { Link } from "react-router-dom";

export default function Signup() {
  function handleFormButtons(e) {
    e.preventDefault();
  }
  return (
    <main className="auth-container">
      <div className="auth-image"></div>
      <form className="authentication">
        <h3>Get started.</h3>
        <span className="form-buttons">
          <button onClick={handleFormButtons}>Patient</button>
          <button onClick={handleFormButtons}>Doctor</button>
          <button onClick={handleFormButtons}>Admin</button>
        </span>
        <input type="text" placeholder="Username" className="form-input" />
        <input type="text" placeholder="Email" className="form-input" />
        <input type="password" placeholder="Password" className="form-input" />
        <input
          type="password"
          placeholder="Password Confirmation"
          className="form-input"
        />
        <button type="submit" className="submit-button">
          Submit
        </button>
        <Link to="/login" className="form-links">
          Have an account?
        </Link>
      </form>
    </main>
  );
}
