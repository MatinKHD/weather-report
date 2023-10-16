import { Outlet } from "react-router-dom";

import "./app.css";

function App() {
  return (
    <>
      <h1>Temprature App</h1>
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default App;
