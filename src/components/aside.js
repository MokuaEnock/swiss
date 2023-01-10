import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div>
        <div className="footer-header"></div>
        <div className="footer-container">
          <span className="footer-span">
            <img src="" alt="logo" id="footer-image" />
          </span>
          <span className="footer-span">
            <h5>About</h5>
            <Link>Doctors</Link>
            <Link>Hospital</Link>
            <Link>Contact</Link>
            <Link>Address</Link>
            <p></p>
          </span>
          <span className="footer-span">
            <h5>Terms</h5>
            <Link>Privacy</Link>
            <Link>Settings</Link>
            <Link>Site Map</Link>
            <p></p>
          </span>
          <span className="footer-span">
            <h5>About</h5>
            <p>
              Swis Medicare is an online health service center, that has unique
              features and high services.
            </p>
            <p></p>
          </span>
        </div>
        <div className="footer-footer">
          <p>Swis Medicare 2023 | Proudly powered by Swis Medicare</p>
        </div>
      </div>
    </footer>
  );
}
