// FETCH WINDS FROM API //

async function getWinds() {
  const response = await fetch(
    "https://api.open-meteo.com/v1/gfs?latitude=-26.6033&longitude=153.091&hourly=wind_speed_10m,wind_direction_10m&forecast_days=1"
  );
  if (!response.ok) {
    throw new Error("HTTP error " + response.status);
  }
  const winds = await response.json();

  // log to console
  console.log(winds);

  // return addData function
 addWindsData(winds);
}

// return function
getWinds();

// ------------------- //

// ADD DATA TO HTML //

function addWindsData(winds) {

  // wind speed
  const windSpeedContainer = document.querySelector(".wind-details");
  const windSpeed = document.createElement("p");
windSpeed.textContent = Math.round(winds.current.wind_speed_10m) + " knots";

  // APPEND ELEMENTS TO CONTAINER //

  // wind speed
  windSpeedContainer.appendChild(windSpeed);

}
// ----------------------------- //