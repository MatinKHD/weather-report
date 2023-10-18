import { useLoaderData } from "react-router-dom";
import { weatherData } from "./weatherData";

import "./report.css";

export async function loader({ params }) {
  const { scale } = params;
  const data = await weatherData(scale).data;

  return { data, scale };
}

function Report() {
  const { data, scale } = useLoaderData();

  return (
    <ul>
      {data.map(({ city, temp }) => (
        <li key={city}>
          <span className="city">{city}</span>
          <span className="temp">
            {temp}°{scale === "celsius" && <span>c</span>}
            {scale === "fahrenheit" && <span>f</span>}
            {scale === "kelvin" && <span>K</span>}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default Report;
