import { useLoaderData } from "react-router";
import { weatherData } from "./weatherData";

export async function loader({ params }) {
  const { scale } = params;
  const data = await weatherData(scale).data;

  return { data, scale };
}

function Report() {
  const { data } = useLoaderData();

  return (
    <dl>
      {data.map(({ city, temp }) => (
        <ul key={city}>
          <li>
            <span>{city}</span>
            <span>{temp}</span>
          </li>
        </ul>
      ))}
    </dl>
  );
}

export default Report;
