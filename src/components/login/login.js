import "./auth.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Auth from "../images/login.jpg";

export default function Login() {
  let [name, setName] = useState("");
  let [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(name, password);
  }

  return (
    <main className="auth-container">
      <div className="auth-image">
        <img src={Auth} alt="authentication" />
      </div>
      <form className="authentication" onSubmit={handleSubmit}>
        <h3>Welcome Back</h3>
        <input
          type="text"
          placeholder="Username"
          className="form-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="form-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
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
