import { Link } from "react-router-dom";

function Footer() {
  return (
    <nav aria-label="navigation for pages">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Footer;
