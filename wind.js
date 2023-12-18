// FETCH WINDS FROM API //

async function getWinds() {
  const response = await fetch(
    "https://api.open-meteo.com/v1/gfs?latitude=-26.6033&longitude=153.091&current=wind_speed_10m&wind_speed_unit=kn&forecast_days=1"
  );
  if (!response.ok) {
    throw new Error("HTTP error " + response.status);
  }
  const winds = await response.json();

  // log to console
  console.log(winds);

  // return addData function
  addData(winds);
}

// return function
getWinds();

// ------------------- //
