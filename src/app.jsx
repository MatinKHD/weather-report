import { Outlet, Link } from "react-router-dom";

import Footer from "./footer";

import "./app.css";

function App() {
  return (
    <div className="app-container">
      <h1>Temprature App</h1>
      <div className="degree-container">
        <ul>
          <li>
            <Link to="reports/celsius">°c</Link>
          </li>
          <div className="divider"></div>
          <li>
            <Link to="reports/fahrenheit">°f</Link>
          </li>
          <div className="divider"></div>
          <li>
            <Link to="reports/kelvin">°K</Link>
          </li>
        </ul>
      </div>
      <div className="outlet-container">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
