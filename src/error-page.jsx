import { useRouteError } from "react-router";

import "./error-page.css";

function ErrorPage() {
  const error = useRouteError();
  console.log(error);

  return (
    <div className="error-page">
      <h1> Opps !</h1>
      <p> sorry an unexpected error has occured</p>
      <p>
        <i>{error.statusText}</i>
        <i>{error.massage}</i>
      </p>
    </div>
  );
}

export default ErrorPage;
