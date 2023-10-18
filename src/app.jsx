import { Outlet, NavLink } from "react-router-dom";

import Footer from "./footer";

import "./app.css";

function App() {
  return (
    <div className="app-container">
      <h1>Temprature App</h1>
      <nav className="degree-container">
        <ul>
          <li>
            <NavLink
              to="reports/celsius"
              className={({ isActive, isPending }) =>
                [isPending ? "pending" : "", isActive ? "active" : ""].join("")
              }
            >
              °c
            </NavLink>
          </li>
          <div className="divider"></div>
          <li>
            <NavLink
              to="reports/fahrenheit"
              className={({ isActive, isPending }) =>
                [isPending ? "pending" : "", isActive ? "active" : ""].join("")
              }
            >
              °f
            </NavLink>
          </li>
          <div className="divider"></div>
          <li>
            <NavLink
              to="reports/kelvin"
              className={({ isActive, isPending }) =>
                [isPending ? "pending" : "", isActive ? "active" : ""].join("")
              }
            >
              °K
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="outlet-container">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
