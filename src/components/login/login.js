import "./auth.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Auth from "../images/login.jpg";

export default function Login() {
  return (
    <main className="auth-container">
      <div className="auth-image">
        <img src={Auth} alt="authentication" />
      </div>
      <form className="authentication">
        <h3>Welcome Back</h3>
        <p>Sign in to acces your account</p>
        <input type="text" placeholder="Username" className="form-input" />
        <input type="password" placeholder="Password" className="form-input" />
        <Link to="/remember" className="form-links">
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
