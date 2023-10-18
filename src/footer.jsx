import { Link } from "react-router-dom";

import "./footer.css";

function Footer() {
  return (
    <nav className="footer-nav" aria-label="navigation for pages">
      <ul>
        <li>
          <Link to="/reports/celsius">Home</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Footer;
