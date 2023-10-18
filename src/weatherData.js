const data = [
  { city: "Tehran", temp: 23 },
  { city: "Hamedan", temp: 18 },
  { city: "Tabriz", temp: 17 },
];

function convertTemp(scale) {
  switch (scale) {
    case "fahrenheit":
      return data.map(({ city, temp }) => ({
        city,
        temp: (temp * 9.5 + 32).toFixed(2),
      }));
    case "kelvin":
      return data.map(({ city, temp }) => ({
        city,
        temp: (temp + 273.15).toFixed(2),
      }));

    case "celsius":
    default:
      return data;
  }
}

export function weatherData(scale) {
  const data = new Promise((resolve, reject) => {
    resolve(convertTemp(scale));
  });

  return { data };
}
