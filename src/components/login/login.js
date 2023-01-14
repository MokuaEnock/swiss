import "./auth.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <main className="auth-container">
      <div className="auth-image"></div>
      <form className="authentication">
        <h3>Login to Swiss Medicare</h3>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <Link to="">Forgot Password</Link>
        <button type="submit">Submit</button>
        <Link to="/signup">No account join us?</Link>
      </form>
    </main>
  );
}
