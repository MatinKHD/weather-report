import { useLoaderData } from "react-router";
import { weatherData } from "./weatherData";

export async function loader({ params }) {
  const { scale } = params;
  const data = await weatherData(scale).data;

  return { data, scale };
}

function Report() {
  const data = useLoaderData();

  console.log(data);
}

export default Report;
