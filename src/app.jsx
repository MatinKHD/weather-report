import { Outlet } from "react-router-dom";

import Footer from "./footer";

import "./app.css";

function App() {
  return (
    <>
      <h1>Temprature App</h1>
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
