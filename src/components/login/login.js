import "./auth.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <main className="auth-container">
      <div className="auth-image"></div>
      <form className="authentication">
        <h3>Login to Swiss Medicare</h3>
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
