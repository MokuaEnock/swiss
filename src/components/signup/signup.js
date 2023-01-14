import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <main className="auth-container">
      <div className="auth-image"></div>
      <form className="authentication">
        <h3>Get started.</h3>
        <span></span>
        <input type="text" placeholder="Username" />
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Password Confirmation" />
        <button type="submit">Submit</button>
        <Link to="/login">Have an account: Login?</Link>
      </form>
    </main>
  );
}
