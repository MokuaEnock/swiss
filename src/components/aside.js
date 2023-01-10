import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div>
        <div className="footer-header"></div>
        <div className="footer-container">
          <span className="footer-span"></span>
          <span className="footer-span"></span>
          <span className="footer-span">
            <h5>Terms</h5>
            <Link>Privacy</Link>
            <Link>Settings</Link>
            <Link>Site Map</Link>
            <p></p>
          </span>
          <span className="footer-span"></span>
        </div>
        <div className="footer-footer">
          <p>Swis Medicare 2023 | Proudly powered by Swis Medicare</p>
        </div>
      </div>
    </footer>
  );
}
